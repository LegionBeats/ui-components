import { Marquee } from "./testimonials-3d";

const testimonials = [
  {
    name: "Ava Kim",
    role: "Product Designer",
    text: "This is the first tool that actually keeps up with how fast our team iterates.",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Daniel Ortiz",
    role: "CTO, Framestack",
    text: "We cut our build times in half the first week. It just works.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Maya Patel",
    role: "Indie Hacker",
    text: "Shipped my whole MVP over a weekend. The defaults are chef's kiss.",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    name: "Tom Becker",
    role: "Engineering Lead",
    text: "The API design is so clean that onboarding new devs takes minutes.",
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    name: "Lena Fischer",
    role: "Founder, Loopwell",
    text: "Replaced three subscriptions with this one tool. Easy decision.",
    avatar: "https://i.pravatar.cc/80?img=26",
  },
  {
    name: "Chris Yamamoto",
    role: "Staff Engineer",
    text: "Rare to find something this polished. The details are incredible.",
    avatar: "https://i.pravatar.cc/80?img=59",
  },
];

function TestimonialCard({
  name,
  role,
  text,
  avatar,
}: {
  name: string;
  role: string;
  text: string;
  avatar: string;
}) {
  return (
    <div className="w-56 rounded-xl border border-border bg-card p-4 shadow-sm">
      <p className="text-sm text-muted-foreground">{text}</p>
      <div className="mt-3 flex items-center gap-2">
        <img src={avatar} alt={name} className="h-8 w-8 rounded-full" />
        <div>
          <p className="text-xs font-semibold text-card-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials3dDemo() {
  const columns = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(1, 4),
    testimonials.slice(2, 5),
  ];

  return (
    <div className="flex w-full items-center justify-center overflow-hidden bg-background p-6">
      <div
        className="flex gap-4"
        style={{
          transform: "rotateX(35deg) rotateZ(-18deg)",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {columns.map((col, i) => (
          <Marquee
            key={i}
            vertical
            pauseOnHover
            reverse={i % 2 === 1}
            repeat={2}
            className="h-[480px]"
            style={{ "--duration": `${26 + i * 6}s` } as React.CSSProperties}
          >
            {col.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
