'use client';

import { useEffect, useState } from 'react';
import { generateAboutUsContent, AboutUsContentInput } from '@/ai/flows/finance-forward-about-us-page';

export default function AboutPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const input: AboutUsContentInput = {
      missionStatementKeywords: 'fitness planning, ease of use, traditional Fitness, cryptocurrency',
      calculationExplanationsRequest: 'Explain the logic of the fitness calculations.',
      geminiApiUsageDetailsRequest: 'Describe how the Gemini API is used for cryptocurrency data.'
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
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      {content && (
        <div className="max-w-2xl w-full space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Mission Statement</h2>
            <p>{content.missionStatement}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">How Our Calculations Work</h2>
            <p>{content.calculationExplanations}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Gemini API Usage</h2>
            <p>{content.geminiApiUsageDetails}</p>
          </section>
        </div>
      )}
    </div>
  );
} 