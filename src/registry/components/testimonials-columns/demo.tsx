import { TestimonialsColumn, type Testimonial } from "./testimonials-columns";

const testimonials: Testimonial[] = [
  {
    text: "This platform completely changed how our team ships. Everything just clicks.",
    image: "https://i.pravatar.cc/80?img=1",
    name: "Alex Rivera",
    role: "Product Lead",
  },
  {
    text: "The onboarding was so smooth. I had our first workflow live within an hour.",
    image: "https://i.pravatar.cc/80?img=2",
    name: "Priya Shah",
    role: "Founder, Northloop",
  },
  {
    text: "Support is fast, docs are clear, and the API feels designed by people who care.",
    image: "https://i.pravatar.cc/80?img=3",
    name: "Marcus Chen",
    role: "Staff Engineer",
  },
  {
    text: "We replaced three separate tools with this. Our stack finally feels sane.",
    image: "https://i.pravatar.cc/80?img=4",
    name: "Sara Okonkwo",
    role: "Head of Ops",
  },
  {
    text: "Beautiful defaults, endless flexibility. Exactly what I look for in a tool.",
    image: "https://i.pravatar.cc/80?img=5",
    name: "Luca Bianchi",
    role: "Design Engineer",
  },
];

export default function TestimonialsColumnsDemo() {
  return (
    <div className="w-full flex items-center justify-center p-6 bg-background">
      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[500px] overflow-hidden">
        <TestimonialsColumn testimonials={testimonials} duration={15} />
        <TestimonialsColumn
          testimonials={testimonials.slice().reverse()}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={testimonials}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </div>
  );
}