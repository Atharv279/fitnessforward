'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from "react";
import { Dumbbell, ArrowRight, Info, Timer, Scale, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const activities = [
  { label: "Running (6 mph)", met: 9.8 },
  { label: "Walking (3 mph)", met: 3.3 },
  { label: "Cycling (12-14 mph)", met: 8.0 },
  { label: "Swimming (moderate)", met: 6.0 },
  { label: "Weightlifting (general)", met: 3.5 },
];

function TrainingCalculatorForm() {
  const [weight, setWeight] = useState(70); // kg
  const [duration, setDuration] = useState(30); // minutes
  const [activity, setActivity] = useState(activities[0].met);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  function calculateCalories(e: React.FormEvent) {
    e.preventDefault();
    const hours = duration / 60;
    const calories = activity * weight * hours;
    setResult(calories);
    setIsCalculated(true);
  }

  function handleReset() {
    setWeight(70);
    setDuration(30);
    setActivity(activities[0].met);
    setResult(null);
    setIsCalculated(false);
  }

  return (
    <form onSubmit={calculateCalories} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="weight" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Weight (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={e => setWeight(Number(e.target.value))}
            min={10}
            max={500}
            required
            className="h-12 text-lg"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>10kg</span>
            <span>500kg</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration" className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            Duration (minutes)
          </Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            min={1}
            max={300}
            required
            className="h-12 text-lg"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>1min</span>
            <span>300min</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="activity" className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4" />
          Activity
        </Label>
        <select
          id="activity"
          value={activity}
          onChange={e => setActivity(Number(e.target.value))}
          className="input input-bordered w-full h-12 text-lg"
        >
          {activities.map((a, i) => (
            <option key={i} value={a.met}>{a.label}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-4">
        <Button type="submit" className="flex-1 h-12 text-lg" size="lg">
          Calculate Calories <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          className="flex-1 h-12 text-lg" 
          size="lg"
          onClick={handleReset}
        >
          Reset <RotateCcw className="ml-2 h-5 w-5" />
        </Button>
      </div>
      {isCalculated && (
        <div className="mt-6 space-y-4">
          <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center">
            <h3 className="text-2xl font-bold">Calories Burned</h3>
            <div className="text-4xl font-extrabold text-green-700">{result?.toFixed(2)} kcal</div>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              This estimate is based on standard MET values. Actual calories burned may vary depending on individual factors.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default function TrainingCalculatorPage() {
  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12 lg:py-16 space-y-8 px-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-primary/5 via-background to-background">
          <CardHeader className="flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Dumbbell className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">
              Training Calculator
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-lg">
              Estimate the calories burned during various physical activities based on your weight, activity, and duration.
            </p>
          </CardHeader>
          <CardContent>
            <TrainingCalculatorForm />
          </CardContent>
        </Card>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Understanding Calories Burned
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The number of calories you burn during exercise depends on your weight, the activity, and how long you do it. This calculator uses standard MET values to estimate calories burned for common activities.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  How to Use This Calculator
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <ol className="list-decimal list-inside pl-4 space-y-2">
                    <li>Enter your weight in kilograms</li>
                    <li>Enter the duration of your activity in minutes</li>
                    <li>Select the type of activity</li>
                    <li>Click "Calculate Calories" to see your result</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  What is a MET value?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  MET (Metabolic Equivalent of Task) is a unit that estimates the amount of energy used by the body during physical activity, compared to resting metabolism.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="bg-secondary/30 rounded-b-lg">
            <p className="text-sm text-muted-foreground text-center w-full">
              This calculator is for informational purposes only. Actual calories burned may vary.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 