import { ShieldAlert } from 'lucide-react';

export default function RightsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Content Rights & Usage
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Guidelines for enjoying and sharing FitnessForward materials responsibly
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Our Original Content</h2>
          <p className="leading-relaxed text-balance">
            All workout programs, meal guides, instructional videos, and articles created by FitnessForward are crafted with care to support your fitness journey. Feel free to use them for personal growth, but please reach out if you'd like to share or repurpose them beyond personal use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Brand Protection</h2>
          <p className="leading-relaxed text-balance">
            The FitnessForward name, logo, and visual identity represent our commitment to quality and trust. If you'd like to collaborate or use our branding, we'd love to hear from you to explore a formal partnership.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Fair Use Policy</h2>
          <p className="leading-relaxed text-balance">
            We encourage you to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Share links to our content to inspire others</li>
              <li>Print workouts for your personal use</li>
              <li>Reference our articles with proper credit</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Prohibited Uses</h2>
          <p className="leading-relaxed text-balance">
            To maintain the integrity of our resources, we kindly ask that you avoid:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Copying or scraping our database of exercises</li>
              <li>Reselling our training plans as your own</li>
              <li>Using our content for commercial apps or websites without permission</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. User Contributions</h2>
          <p className="leading-relaxed text-balance">
            When you share workout results or tips in our community, you retain ownership of your content. We may feature your contributions (with credit) to inspire others in our marketing or social media.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. Copyright Requests</h2>
          <p className="leading-relaxed text-balance">
            If you're a fitness professional or educator, we'd be happy to discuss limited usage rights for nonprofit or educational purposes. Just reach out to our team with your request, and we'll work together to find a solution.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          These guidelines are here to protect the quality of FitnessForward resources while encouraging responsible sharing and collaboration.
        </p>
      </div>
    </div>
  );
}