'use server';

import { z } from 'genkit';

export type AboutUsContentOutput = {
  missionStatement: string;
  calculationExplanations: string;
};

export async function generateAboutUsContent(): Promise<AboutUsContentOutput> {
  return {
    missionStatement: `FitnessForward is a completely free platform dedicated to making health science accessible. We transform complex fitness calculations into easy-to-use tools, empowering everyone to take control of their wellness journey through accurate, research-backed metrics. Our calculators are designed by fitness professionals using standards from leading health organizations.`,
    
    calculationExplanations: `
    <h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Scientifically-Validated Calculators</h3>
    
    <h4 class="text-xl font-medium text-blue-700 mt-6 mb-2">BMI Calculator</h4>
    <p><strong>Formula:</strong> Weight (kg) / [Height (m)]²<br>
    <strong>Standards:</strong> World Health Organization classifications<br>
    <strong>Purpose:</strong> Assesses weight status based on height-to-weight ratio</p>
    
    <h4 class="text-xl font-medium text-blue-700 mt-6 mb-2">Calorie Needs Calculator</h4>
    <p><strong>Formula:</strong> Mifflin-St Jeor Equation (BMR) × Activity Factor<br>
    <strong>Sources:</strong> American Journal of Clinical Nutrition<br>
    <strong>Calculates:</strong> Daily calorie needs for maintenance, loss, or gain</p>
    
    <h4 class="text-xl font-medium text-blue-700 mt-6 mb-2">Workout Planner</h4>
    <p><strong>Based On:</strong> ACSM exercise guidelines<br>
    <strong>Factors:</strong> Goal (strength, endurance, weight loss), experience level<br>
    <strong>Outputs:</strong> Personalized weekly workout schedules</p>
    
    <h4 class="text-xl font-medium text-blue-700 mt-6 mb-2">Fitness Tracker</h4>
    <p><strong>Method:</strong> MET (Metabolic Equivalent) values × duration<br>
    <strong>Database:</strong> Compendium of Physical Activities<br>
    <strong>Tracks:</strong> Calories burned per activity session</p>
    `,
  };
}