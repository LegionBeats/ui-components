import LogoLoop from "./logo-loop";

const logos = [
  { node: <span style={{ fontWeight: 700 }}>React</span>, title: "React", href: "https://react.dev" },
  { node: <span style={{ fontWeight: 700 }}>Next.js</span>, title: "Next.js", href: "https://nextjs.org" },
  { node: <span style={{ fontWeight: 700 }}>TypeScript</span>, title: "TypeScript" },
  { node: <span style={{ fontWeight: 700 }}>Tailwind</span>, title: "Tailwind CSS" },
  { node: <span style={{ fontWeight: 700 }}>Vercel</span>, title: "Vercel" },
  { node: <span style={{ fontWeight: 700 }}>GitHub</span>, title: "GitHub" },
  { node: <span style={{ fontWeight: 700 }}>Docker</span>, title: "Docker" },
  { node: <span style={{ fontWeight: 700 }}>Prisma</span>, title: "Prisma" },
  { node: <span style={{ fontWeight: 700 }}>Supabase</span>, title: "Supabase" },
  { node: <span style={{ fontWeight: 700 }}>Stripe</span>, title: "Stripe" },
];

export default function LogoLoopDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 720 }}>
      <LogoLoop logos={logos} speed={80} logoHeight={28} gap={48} fadeOut scaleOnHover />
    </div>
  );
}