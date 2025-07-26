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
          Guidelines for using FitnessForword materials
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Our Original Content</h2>
          <p className="leading-relaxed text-balance">
            All workout programs, meal guides, instructional videos, and articles created by FitnessForword are protected intellectual property. While we encourage you to use them for personal fitness journeys, they may not be republished or sold without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Brand Protection</h2>
          <p className="leading-relaxed text-balance">
            The FitnessForword name, logo, and visual identity are trademarks. You may not use them to promote your own products/services or in ways that suggest we endorse you without a formal partnership agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Fair Use Policy</h2>
          <p className="leading-relaxed text-balance">
            You're welcome to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Share links to our content</li>
              <li>Print workouts for personal use</li>
              <li>Reference our articles with proper attribution</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Prohibited Uses</h2>
          <p className="leading-relaxed text-balance">
            Never:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Scrape or copy our database of exercises</li>
              <li>Resell our training plans as your own</li>
              <li>Use our content for commercial apps/websites</li>
            </ul>
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. User Contributions</h2>
          <p className="leading-relaxed text-balance">
            When you post workout results or nutrition tips in our community, you keep ownership but grant us rights to feature your content (with credit) in our marketing and social media.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. Copyright Requests</h2>
          <p className="leading-relaxed text-balance">
            Fitness professionals may request limited usage rights for client training by contacting our team. We typically approve nonprofit/educational uses with proper attribution.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          These terms protect the quality of FitnessForword resources while allowing responsible sharing.
        </p>
      </div>
    </div>
  );
}