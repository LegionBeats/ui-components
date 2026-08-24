import { useEffect, useRef } from "react";

const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

const FS = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_warp;
uniform float u_flash;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0; float a=0.5;
  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.07+vec2(13.1,5.7); a*=0.5; }
  return v;
}
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  float r = length(uv), rr = max(r, 0.08), a = atan(uv.y, uv.x), t = u_time;
  vec3 col = vec3(0.012, 0.011, 0.014);
  float hz = fbm(uv * 2.6 + vec2(t * 0.35, 1.7));
  col += vec3(0.13, 0.06, 0.032) * hz * (0.7 + 0.6 * u_warp);
  for (int i = 0; i < 3; i++) {
    float fi = float(i), ringN = 26.0 + fi * 9.0;
    vec2 sp = vec2((a / 6.28318 + 0.5) * ringN, (0.3 + fi * 0.22) / rr + t * (2.0 + fi * 1.2));
    vec2 cell = floor(sp), f = fract(sp);
    float h = hash(cell + fi * 17.31), on = step(0.68, h);
    vec2 c = vec2(0.2 + 0.6 * hash(cell + 4.7), 0.5), dlt = f - c;
    float sy = mix(130.0, 8.0, u_warp), star = on * exp(-(dlt.x * dlt.x * 150.0 + dlt.y * dlt.y * sy));
    float tw = (0.7 + 0.3 * sin(h * 81.0 + t * 9.0));
    vec3 sCol = mix(vec3(1.0, 0.94, 0.85), vec3(1.0, 0.6, 0.33), step(0.9, h));
    col += sCol * star * mix(tw, 1.0, u_warp) * smoothstep(0.02, 0.25, r) * (1.1 + 0.7 * u_warp);
  }
  col += vec3(1.0, 0.8, 0.58) * u_warp * 0.32 * exp(-r * 4.0);
  col = mix(col, vec3(1.0, 0.97, 0.92), clamp(u_flash, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}`;

export type LaunchButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  /** Follow the cursor with a subtle parallax drift. */
  parallax?: boolean;
  className?: string;
};

export function LaunchButton({
  children = "Launch",
  onClick,
  parallax = true,
  className,
}: LaunchButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const warpTarget = useRef(0);
  const flashRef = useRef(0);

  // WebGL portal
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const locP = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(locP);
    gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uWarp = gl.getUniformLocation(prog, "u_warp");
    const uFlash = gl.getUniformLocation(prog, "u_flash");

    let warp = 0;
    let z = 0;
    let last = performance.now();
    let raf = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      warp += (warpTarget.current - warp) * Math.min(1, dt * 2.6);
      flashRef.current *= Math.exp(-4.5 * dt);
      z += dt * (0.05 + warp * 1.35);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, z);
      gl.uniform1f(uWarp, warp);
      gl.uniform1f(uFlash, flashRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cursor parallax
  useEffect(() => {
    if (!parallax) return;
    const el = containerRef.current;
    if (!el) return;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 15;
      ty = (e.clientY / window.innerHeight - 0.5) * 15;
    };
    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.setProperty("--lb-x", `${x.toFixed(2)}px`);
      el.style.setProperty("--lb-y", `${y.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={`launch-button-intro ${className ?? ""}`}
      style={{ ["--lb-x" as string]: "0px", ["--lb-y" as string]: "0px" }}
    >
      <button
        type="button"
        onClick={() => {
          flashRef.current = 1;
          onClick?.();
        }}
        onMouseEnter={() => (warpTarget.current = 1)}
        onMouseLeave={() => (warpTarget.current = 0)}
        className="group relative block w-[264px] h-[78px] border-0 p-[7px] rounded-[24px] cursor-pointer outline-none transition-all duration-300 ease-[cubic-bezier(.34,1.4,.5,1)] hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-[#d43d17] focus-visible:outline-offset-[5px] bg-[linear-gradient(180deg,#3c3f46_0%,#15171b_55%,#2a2d33_100%)] shadow-[0_26px_52px_rgba(15,12,10,.35),0_3px_10px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.14)] hover:shadow-[0_32px_64px_rgba(160,60,12,.3),0_4px_12px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.16)]"
      >
        <span className="relative w-full h-full rounded-[17px] overflow-hidden bg-[#06050a] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,.9)]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
            aria-hidden="true"
          />
          <span
            className="relative z-10 pointer-events-none font-medium text-sm tracking-[0.34em] indent-[0.34em] text-[#fdf6ee] uppercase"
            style={{
              textShadow:
                "0 0 14px rgba(255,170,100,.55), 0 1px 6px rgba(0,0,0,.9)",
            }}
          >
            {children}
          </span>
        </span>
      </button>
    </div>
  );
}

export default LaunchButton;
