"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function GoalPlannerPage() {
  const [currentWeight, setCurrentWeight] = useState(75);
  const [targetWeight, setTargetWeight] = useState(65);
  const [weeks, setWeeks] = useState(10);
  const [plan, setPlan] = useState<string | null>(null);

  const handleCalculate = () => {
    const totalLoss = currentWeight - targetWeight;
    const weeklyLoss = totalLoss / weeks;
    setPlan(`To reach your goal, aim to lose ~${weeklyLoss.toFixed(1)} kg per week.`);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Fitness Goal Planner</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Current Weight (kg)</Label>
            <Input type="number" value={currentWeight} onChange={e => setCurrentWeight(Number(e.target.value))} />
          </div>
          <div>
            <Label>Target Weight (kg)</Label>
            <Input type="number" value={targetWeight} onChange={e => setTargetWeight(Number(e.target.value))} />
          </div>
          <div>
            <Label>Weeks to Achieve Goal</Label>
            <Input type="number" value={weeks} onChange={e => setWeeks(Number(e.target.value))} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button onClick={handleCalculate}>Create Plan</Button>
          {plan && <p className="text-foreground/80">{plan}</p>}
        </CardFooter>
      </Card>
    </div>
  );
}
