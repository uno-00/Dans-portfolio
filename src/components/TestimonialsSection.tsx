import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Owner",
    text: "Sterling Finance transformed our retirement strategy. Their personalized approach gave us confidence we never had before.",
  },
  {
    name: "James & Linda Park",
    role: "Retired Couple",
    text: "We finally feel secure about our future. The team's dedication and expertise made all the difference.",
  },
  {
    name: "David Chen",
    role: "Tech Executive",
    text: "Professional, transparent, and genuinely caring. They helped me optimize my portfolio and save significantly on taxes.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 fade-up">
          <p className="text-accent font-medium tracking-widest text-sm uppercase">Testimonials</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="fade-up bg-card rounded-xl p-8 border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
