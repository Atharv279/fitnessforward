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
          Last Updated: July 30, 2025
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Welcome to FitnessForward</h2>
          <p className="leading-relaxed text-balance">
            A platform dedicated to supporting your fitness and wellness journey with science-informed, accessible resources. This disclaimer outlines the purpose and limitations of our content to ensure you use our tools with confidence and clarity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Informational Use Only</h2>
          <p className="leading-relaxed text-balance">
            All content on FitnessForward — including workout plans, nutrition guides, fitness calculators, articles, and tools — is provided for general informational purposes only. It is not intended as, nor should it be considered, medical advice, psychological counseling, or professional fitness instruction. Our goal is to educate and inspire — not to diagnose, treat, or replace expert care.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Not a Substitute for Professional Advice</h2>
          <p className="leading-relaxed text-balance">
            We do not provide personalized medical, dietary, or training recommendations. The information on this site should not replace consultation with licensed healthcare providers, certified personal trainers, or registered nutritionists. Always seek professional guidance before beginning a new exercise program, making significant dietary changes, or managing health conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Accuracy and Timeliness</h2>
          <p className="leading-relaxed text-balance">
            While we strive to deliver accurate, up-to-date, and evidence-based information, fitness and health knowledge evolves. We cannot guarantee that all content is entirely accurate, complete, current, or suitable for every individual. Your body, goals, and health status are unique — please assess how any advice applies to your personal situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Risks of Physical Activity</h2>
          <p className="leading-relaxed text-balance">
            Exercise involves inherent physical risk. By using our content, you acknowledge that participation in any fitness activity is voluntary and at your own risk. You are responsible for evaluating your fitness level, listening to your body, and ensuring you are medically cleared for physical exertion. Stop immediately if you experience pain or discomfort.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. No Liability Assumed</h2>
          <p className="leading-relaxed text-balance">
            FitnessForward, its creators, and affiliates shall not be held liable for any injury, loss, or damage arising from the use of our materials. We provide resources with care — but your safety and decisions remain your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. External Links</h2>
          <p className="leading-relaxed text-balance">
            Our site may include links to third-party websites for informational purposes. These links do not constitute endorsement, and we are not responsible for their content, privacy policies, or practices.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4">
          By using FitnessForward, you acknowledge that you have read, understood, and agreed to this disclaimer. If you do not agree, please discontinue use of the platform.
        </p>

        <p className="text-center font-semibold text-foreground/90 pt-4">
          We’re grateful to be part of your wellness journey — and committed to supporting you with transparency, care, and integrity.
        </p>
      </div>
    </div>
  );
}