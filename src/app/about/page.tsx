'use client';

import { useEffect, useState } from 'react';
import { generateAboutUsContent, AboutUsContentInput } from '@/ai/flows/fitness-about-us-page';

export default function AboutPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const input: AboutUsContentInput = {
      missionStatementKeywords: 'fitness tracking, workout planning, nutrition guidance, health metrics',
      calculationExplanationsRequest: 'Explain how our fitness calculations and metrics work.',
      apiUsageDetailsRequest: 'Describe how we process health data and provide recommendations.'
    };
    generateAboutUsContent(input)
      .then(setContent)
      .catch((err) => setError(err.message || 'Failed to generate About Us content.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-center">Loading About Us content...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center w-full space-y-6 p-8">
      <h1 className="text-3xl font-bold mb-4">About FitnessForword</h1>
      {content && (
        <div className="max-w-2xl w-full space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Fitness Mission</h2>
            <p>{content.missionStatement}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">How We Calculate Your Fitness Metrics</h2>
            <p>{content.calculationExplanations}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Data Approach</h2>
            <p>{content.apiUsageDetails}</p>
          </section>
        </div>
      )}
    </div>
  );
}