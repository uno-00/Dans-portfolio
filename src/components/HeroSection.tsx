import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Financial advisor office"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[50%_55%]"
        />
        <div className="absolute inset-0 bg-navy-dark/65" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-2xl space-y-6 fade-up">
          <p className="text-gold font-medium tracking-widest text-sm uppercase">
            Trusted Financial Advisory
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Secure Your Financial Future Today
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
            Expert guidance to grow, protect, and manage your wealth with
            confidence. Let's build a plan tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:brightness-110 animate-pulse-glow"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
