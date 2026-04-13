import advisorPhoto from "@/assets/advisor-photo.png";

const milestones = [
  { year: "Oct 2020", event: "Licensed Financial Advisor" },
  { year: "May 2021", event: "Rookie Highflyers Club Member" },
  { year: "Dec 2021", event: "National Achievers Club Member" },
  { year: "Nov 2021", event: "Promoted as Assistant Unit Manager" },
  { year: "Jul 2022", event: "BBCon NextGen on Fire Delegate – Penang, Malaysia" },
  { year: "Dec 2022", event: "National Achievers Club Member" },
  { year: "Feb 2023", event: "Siklab 2 Delegate" },
  { year: "Dec 2023", event: "Branch Achievers Club Member" },
  { year: "Jun 2024", event: "Bangkok, Thailand BBCON Delegate" },
  { year: "Jul 2024", event: "Sectoral Achievers Club" },
  { year: "Apr 2025", event: "Branch Achievers Club" },
  { year: "Nov 2025", event: "National Achievers Club" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="fade-up relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={advisorPhoto}
                alt="Financial Advisor"
                className="w-full max-w-md mx-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-md mx-auto h-full rounded-2xl border-2 border-accent/30 z-0 transition-all duration-500 group-hover:-bottom-5 group-hover:-right-5" />
          </div>

          <div className="space-y-6 fade-up">
            <p className="text-accent font-medium tracking-widest text-sm uppercase">
              About Me
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Trusted Partner in Building Wealth
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a passion for financial empowerment and years of dedicated service,
              I help individuals and families secure their future through personalized
              financial planning, investment strategies, and comprehensive protection plans.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">120+</p>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">12+</p>
                <p className="text-sm text-muted-foreground">Awards Earned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="fade-up">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest text-sm uppercase">
              Achievements
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
              A Journey of Excellence
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`fade-up relative flex items-start gap-6 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-background z-10 mt-1.5" />

                  {/* Content card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left lg:ml-auto"
                    }`}
                  >
                    <div className="bg-card rounded-xl p-4 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {m.year}
                      </span>
                      <p className="text-sm text-foreground font-medium mt-1">
                        {m.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
