export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-primary-foreground">
              Sterling<span className="text-accent">.</span>Finance
            </p>
            <p className="text-xs mt-1">Trusted Financial Advisory Since 2010</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary-foreground transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors duration-300">Services</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors duration-300">Contact</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-xs text-center space-y-2">
          <p>© {new Date().getFullYear()} Sterling Finance. All rights reserved.</p>
          <p className="max-w-2xl mx-auto text-primary-foreground/50">
            Disclaimer: The information provided on this website is for general informational purposes only and does not constitute financial advice. 
            Past performance is not indicative of future results. Please consult a qualified financial advisor before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
