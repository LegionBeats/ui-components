import SphereImageGrid from "./img-sphere";

const IMAGES = Array.from({ length: 30 }, (_, i) => ({
  id: `img-${i}`,
  src: `https://picsum.photos/seed/sphere-${i}/300/300`,
  alt: `Image ${i + 1}`,
  title: `Photo ${i + 1}`,
}));

export default function ImgSphereDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <SphereImageGrid
        images={IMAGES}
        containerSize={360}
        sphereRadius={140}
        autoRotate
      />
    </div>
  );
}