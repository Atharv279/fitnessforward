import { ShieldAlert } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Disclaimer
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Important information regarding your use of FitnessForward.
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. General Information Only</h2>
          <p className="leading-relaxed text-balance">
            The content provided on FitnessForward, including workout plans, nutrition guides, fitness calculators, and articles, is for general informational purposes only. It is not intended as medical advice, professional training advice, or a substitute for consultation with qualified health professionals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Not Professional Medical or Fitness Advice</h2>
          <p className="leading-relaxed text-balance">
            FitnessForward does not provide personalized medical or fitness advice. The information on this website should not be considered as a replacement for professional guidance from certified trainers, nutritionists, or healthcare providers. Always consult with appropriate professionals before beginning any new fitness program or making changes to your health regimen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Accuracy of Information</h2>
          <p className="leading-relaxed text-balance">
            While we endeavor to provide accurate and current fitness and health information, we cannot guarantee that all content is complete, up-to-date, or appropriate for every individual. Exercise and nutrition needs vary by person, and you should evaluate whether any information is suitable for your specific circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Physical Activity Risks</h2>
          <p className="leading-relaxed text-balance">
            Physical exercise carries inherent risks. By using any fitness information from this site, you acknowledge that you are participating voluntarily and assume all risks of injury or harm. It is your responsibility to ensure that you are in good health before beginning any exercise program and to exercise within your limits.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
          <p className="leading-relaxed text-balance">
            FitnessForward and its creators will not be liable for any injuries, damages, or losses resulting from the use of information on this website. Users participate in any fitness activities at their own risk and are responsible for consulting with appropriate health professionals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. External Links</h2>
          <p className="leading-relaxed text-balance">
            Our website may contain links to third-party websites. These links are provided for convenience only, and we do not endorse or assume responsibility for the content or practices of these external sites.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4">
          By using FitnessForward, you acknowledge that you have read, understood, and agreed to this disclaimer. If you do not agree with these terms, please refrain from using our website.
        </p>
      </div>
    </div>
  );
}