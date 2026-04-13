const youtubeEmbedUrl = "https://www.youtube.com/embed/2ZcQLw1Q2ZU";

export default function VideoSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto fade-up">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={youtubeEmbedUrl}
                title="Client Story Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
