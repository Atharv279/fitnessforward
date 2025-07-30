'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from "react";
import { Activity, ArrowRight, Info, Timer, Scale, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FitnessTrackerForm({ onAdd }: { onAdd: (entry: any) => void }) {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState(30);
  const [calories, setCalories] = useState(200);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!activity) return;
    onAdd({ activity, duration, calories });
    setActivity("");
    setDuration(30);
    setCalories(200);
  }

  function handleReset() {
    setActivity("");
    setDuration(30);
    setCalories(200);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="activity" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Activity
          </Label>
          <Input
            id="activity"
            type="text"
            value={activity}
            onChange={e => setActivity(e.target.value)}
            required
            className="h-12 text-lg"
          />
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
        <div className="space-y-2">
          <Label htmlFor="calories" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Calories Burned
          </Label>
          <Input
            id="calories"
            type="number"
            value={calories}
            onChange={e => setCalories(Number(e.target.value))}
            min={1}
            max={2000}
            required
            className="h-12 text-lg"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>1</span>
            <span>2000</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button type="submit" className="flex-1 h-12 text-lg" size="lg">
          Add Workout <ArrowRight className="ml-2 h-5 w-5" />
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
    </form>
  );
}

export default function FitnessTrackerPage() {
  const [entries, setEntries] = useState<any[]>([]);

  function addEntry(entry: any) {
    setEntries(prev => [...prev, entry]);
  }

  const totalCalories = entries.reduce((sum, e) => sum + Number(e.calories), 0);
  const totalWorkouts = entries.length;

  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12 lg:py-16 space-y-8 px-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-primary/5 via-background to-background">
          <CardHeader className="flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">
              Welcome to Your Fitness Journey
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-lg">
              Every step counts, every rep matters. Use this tracker to log your workouts, celebrate your progress, and stay motivated. Let’s make fitness a fun and rewarding adventure!
            </p>
          </CardHeader>
          <CardContent>
            <FitnessTrackerForm onAdd={addEntry} />
            {entries.length > 0 && (
              <div className="mt-8 space-y-4">
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center">
                  <h3 className="text-2xl font-bold">Your Workout Highlights</h3>
                  <ul className="list-disc pl-4 mt-2 text-left">
                    {entries.map((e, i) => (
                      <li key={i} className="text-muted-foreground">
                        <strong>{e.activity}</strong> - {e.duration} min - {e.calories} kcal
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <strong>Total Workouts:</strong> {totalWorkouts}<br />
                    <strong>Total Calories Burned:</strong> {totalCalories} kcal
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Why Tracking Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Fitness tracking isn’t just about numbers—it’s about understanding your body and celebrating your progress. It helps you stay consistent, find motivation, and make informed decisions. Whether you’re aiming to lose weight, build muscle, or simply stay active, tracking keeps you accountable and focused. It’s a way to appreciate every step of your journey and turn your goals into achievements.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  How to Use This Tracker
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <ol className="list-decimal list-inside pl-4 space-y-2">
                    <li>Enter the activity, duration, and calories burned for each workout.</li>
                    <li>Click "Add Workout" to log it.</li>
                    <li>See your total workouts and calories burned below the log.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="bg-secondary/30 rounded-b-lg">
            <p className="text-sm text-muted-foreground text-center w-full">
              This tracker is your partner in progress. Keep pushing, keep logging, and watch your fitness story unfold!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}