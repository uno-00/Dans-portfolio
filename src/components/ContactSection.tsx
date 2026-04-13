import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <p className="text-accent font-medium tracking-widest text-sm uppercase">Contact</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
              Book Your Free Consultation
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 fade-up">
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
              { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="block text-sm font-medium text-foreground mb-1.5">
                  {f.label}
                </label>
                <input
                  id={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your financial goals..."
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
            >
              {submitted ? "Message Sent ✓" : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
