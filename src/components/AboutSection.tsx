import advisorPhoto from "@/assets/advisor-photo.png";
import servicesTrustedPhoto from "@/assets/services-trusted.png";

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

const consultantGallery = [
  {
    src: advisorPhoto,
    alt: "Danina portrait",
    imageClass: "object-contain object-center",
  },
  {
    src: servicesTrustedPhoto,
    alt: "Client planning session",
    imageClass: "object-contain object-center",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="fade-up relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-border/60 w-full max-w-[520px] mx-auto">
              <img
                src={advisorPhoto}
                alt="Financial Advisor"
                loading="lazy"
                className="block w-full aspect-[4/5] sm:aspect-auto sm:h-[420px] object-cover object-[50%_35%] sm:object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-2 -right-2 w-full max-w-[520px] mx-auto h-full rounded-2xl border-2 border-accent/30 z-0 transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3" />
          </div>

          <div className="space-y-6 fade-up">
            <p className="text-accent font-medium tracking-widest text-sm uppercase">About</p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Danina Roselle Matulac
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am Danina, a Filipino Certified Wealth Planner based in Manila, Philippines,
              dedicated to helping individuals and families achieve financial clarity and long-term
              stability. I specialize in providing tailored financial solutions for single
              professionals, young families, business owners, and estate owners, guiding them in
              making informed financial decisions that align with their goals and life stages.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a strong commitment to financial education and planning, I empower my clients to
              build, protect, and grow their wealth through strategic and personalized approaches. I
              simplify complex financial matters and provide clear direction so my clients can
              confidently secure their present needs while preparing for a financially stable
              future.
            </p>
          </div>
        </div>

        {/* Financial consultant story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="fade-up w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[220px] sm:auto-rows-[240px]">
            {consultantGallery.map((photo) => (
              <div
                key={`${photo.alt}-${photo.src}`}
                className="rounded-xl overflow-hidden border border-border/60 shadow-sm bg-card p-2"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full h-full ${photo.imageClass} transition-transform duration-500 hover:scale-[1.02]`}
                />
              </div>
            ))}
          </div>

          <div className="fade-up space-y-6">
            <h3 className="font-heading text-3xl lg:text-5xl font-semibold text-primary leading-tight">
              As a Financial Consultant,
            </h3>
            <p className="text-muted-foreground leading-relaxed text-xl">
              My mission is to help Filipinos take control of their financial lives by providing
              practical, well-structured, and personalized financial planning solutions. I believe
              that financial awareness and proper guidance play a vital role in making informed
              decisions that lead to lasting security and independence.
            </p>
            <p className="text-muted-foreground leading-relaxed text-xl">
              Through a client-focused approach, I work closely with individuals and families to
              strengthen their financial foundation, manage risks effectively, and create
              strategies that support both present needs and future aspirations.
            </p>
            <div className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-center sm:text-left">
                  <p className="text-3xl font-bold text-accent">120+</p>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-center sm:text-left">
                  <p className="text-3xl font-bold text-accent">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-center sm:text-left">
                  <p className="text-3xl font-bold text-accent">12+</p>
                  <p className="text-sm text-muted-foreground">Awards Earned</p>
                </div>
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
