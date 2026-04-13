import { Calendar } from "lucide-react";

export default function FloatingButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-glow"
      aria-label="Book Now"
    >
      <Calendar size={18} />
      <span className="hidden sm:inline">Book Now</span>
    </a>
  );
}
