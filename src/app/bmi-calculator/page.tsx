'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from "react";
import { HeartPulse, ArrowRight, Info, Gauge, Scale, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

function BMICalculatorForm() {
  const [height, setHeight] = useState(170); // in cm
  const [weight, setWeight] = useState(70); // in kg
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [isCalculated, setIsCalculated] = useState(false);

  function calculateBMI(e: React.FormEvent) {
    e.preventDefault();
    const heightM = height / 100;
    const bmiValue = weight / (heightM * heightM);
    setBmi(bmiValue);
    
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obesity");
    
    setIsCalculated(true);
  }

  function handleReset() {
    setHeight(170);
    setWeight(70);
    setBmi(null);
    setCategory("");
    setIsCalculated(false);
  }

  // Calculate BMI progress (for visualization)
  const bmiProgress = bmi ? Math.min(Math.max((bmi / 40) * 100, 0), 100) : 0;

  // Get color based on BMI category
  const getCategoryColor = () => {
    if (!bmi) return "bg-gray-200";
    if (bmi < 18.5) return "bg-blue-400";
    if (bmi < 24.9) return "bg-green-400";
    if (bmi < 29.9) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <form onSubmit={calculateBMI} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="height" className="flex items-center gap-2">
            <Gauge className="h-4 w-4" />
            Height (cm)
          </Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={e => setHeight(Number(e.target.value))}
            min={50}
            max={300}
            required
            className="h-12 text-lg"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>50cm</span>
            <span>300cm</span>
          </div>
        </div>
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
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1 h-12 text-lg" size="lg">
          Calculate BMI <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className={`p-6 rounded-xl ${getCategoryColor()}/10 border ${getCategoryColor()}/30`}>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Your BMI Result</h3>
              <div className="text-4xl font-extrabold">{bmi?.toFixed(1)}</div>
              <div className={`text-lg font-semibold ${getCategoryColor().replace('bg', 'text')}`}>
                {category}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obesity</span>
              </div>
              <Progress 
                value={bmiProgress} 
                className={`h-3 ${getCategoryColor()}`}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-secondary/30 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              BMI is a screening tool but not a diagnostic of body fatness or health. 
              Consult a healthcare provider for a more comprehensive assessment.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default function BMICalculatorPage() {
  return (
    <div className="flex flex-col items-center w-full py-8 md:py-12 lg:py-16 space-y-8 px-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-primary/5 via-background to-background">
          <CardHeader className="flex flex-col items-center text-center space-y-3">
            <div className="p-3 rounded-full bg-primary/10">
              <HeartPulse className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">
              BMI Calculator
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-lg">
              Calculate your Body Mass Index to understand your health status based on height and weight.
            </p>
          </CardHeader>
          <CardContent>
            <BMICalculatorForm />
          </CardContent>
        </Card>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Understanding BMI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              BMI (Body Mass Index) is a simple calculation using a person's height and weight. 
              It is used to broadly categorize a person as underweight, normal weight, overweight, or obese. 
              While BMI is a useful screening tool, it's not a direct measure of body fatness or health.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  How to Use This Calculator
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <ol className="list-decimal list-inside pl-4 space-y-2">
                    <li>Enter your height in centimeters (or use the slider)</li>
                    <li>Enter your weight in kilograms (or use the slider)</li>
                    <li>Click "Calculate BMI" to see your result</li>
                    <li>Review your BMI category and what it means</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  BMI Categories and Meaning
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <h4 className="font-medium text-blue-800">Underweight</h4>
                      <p className="text-sm text-blue-600">BMI &lt; 18.5</p>
                      <p className="text-xs text-blue-500 mt-1">May indicate undernutrition or other health issues</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                      <h4 className="font-medium text-green-800">Normal weight</h4>
                      <p className="text-sm text-green-600">BMI 18.5–24.9</p>
                      <p className="text-xs text-green-500 mt-1">Generally considered healthy weight range</p>
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                      <h4 className="font-medium text-yellow-800">Overweight</h4>
                      <p className="text-sm text-yellow-600">BMI 25–29.9</p>
                      <p className="text-xs text-yellow-500 mt-1">May indicate increased health risks</p>
                    </div>
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <h4 className="font-medium text-red-800">Obesity</h4>
                      <p className="text-sm text-red-600">BMI ≥ 30</p>
                      <p className="text-xs text-red-500 mt-1">Associated with higher health risks</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">
                  Limitations of BMI
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Doesn't directly measure body fat percentage</li>
                    <li>May misclassify muscular individuals as overweight</li>
                    <li>Doesn't account for fat distribution (important for health risks)</li>
                    <li>May not be equally accurate across all ethnic groups</li>
                    <li>Doesn't consider age or sex differences</li>
                  </ul>
                  <p className="mt-3 text-sm bg-secondary/30 p-3 rounded-lg">
                    For a more comprehensive health assessment, consider consulting with a healthcare professional 
                    who can evaluate additional factors like waist circumference, body composition, and other health markers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="bg-secondary/30 rounded-b-lg">
            <p className="text-sm text-muted-foreground text-center w-full">
              This calculator is for informational purposes only. Always consult with a healthcare provider 
              for medical advice about your health.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 