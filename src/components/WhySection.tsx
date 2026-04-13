import { CheckCircle, Clock, Heart, Lock } from "lucide-react";

const benefits = [
  { icon: CheckCircle, title: "Proven Track Record", desc: "Consistent results across market cycles with transparent reporting." },
  { icon: Heart, title: "Client-First Approach", desc: "Your goals drive every recommendation we make." },
  { icon: Lock, title: "Fiduciary Standard", desc: "We are legally bound to act in your best interest at all times." },
  { icon: Clock, title: "Ongoing Support", desc: "Regular reviews and 24/7 access to your financial dashboard." },
];

export default function WhySection() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 fade-up">
          <p className="text-accent font-medium tracking-widest text-sm uppercase">Why Choose Us</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Built on Trust & Transparency
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
          {benefits.map((b) => (
            <div key={b.title} className="fade-up text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <b.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
