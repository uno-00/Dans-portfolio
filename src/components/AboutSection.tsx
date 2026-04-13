import { Award, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: TrendingUp, value: "$120M+", label: "Assets Managed" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-up">
            <p className="text-accent font-medium tracking-widest text-sm uppercase">About Us</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              A Partner You Can Trust With Your Future
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience in wealth management, retirement
              planning, and investment strategy, we provide personalized
              financial solutions that align with your life goals. Our
              client-first approach ensures every decision is made with your
              best interest at heart.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe financial planning should be accessible, transparent,
              and empowering. Whether you're just starting out or planning for
              retirement, we're here to guide every step.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 fade-up">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-secondary rounded-xl p-6 text-center space-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <s.icon className="mx-auto text-accent transition-transform duration-300 hover:scale-110" size={28} />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
