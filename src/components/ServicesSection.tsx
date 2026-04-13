import { PiggyBank, LineChart, Shield, Landmark } from "lucide-react";

const services = [
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    desc: "Build a secure retirement plan that ensures comfort and peace of mind for your golden years.",
  },
  {
    icon: LineChart,
    title: "Investment Management",
    desc: "Strategically grow your portfolio with diversified investments tailored to your risk profile.",
  },
  {
    icon: Shield,
    title: "Risk & Insurance",
    desc: "Protect your assets and loved ones with comprehensive risk management and insurance solutions.",
  },
  {
    icon: Landmark,
    title: "Tax Strategy",
    desc: "Minimize your tax burden with smart, compliant strategies that maximize your wealth.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 fade-up">
          <p className="text-accent font-medium tracking-widest text-sm uppercase">Services</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Comprehensive Financial Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {services.map((s) => (
            <div
              key={s.title}
              className="fade-up bg-card rounded-xl p-8 space-y-4 border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/20">
                <s.icon className="text-accent transition-transform duration-300 group-hover:scale-110" size={24} />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
