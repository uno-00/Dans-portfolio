export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl fade-up">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mt-4 text-primary-foreground/80 leading-relaxed">
          Schedule a free consultation today and discover how a tailored
          financial plan can help you achieve your goals.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:brightness-110 animate-pulse-glow"
        >
          Get Started — It's Free
        </a>
      </div>
    </section>
  );
}
