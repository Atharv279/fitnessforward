'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from "react";
import { Flame, ArrowRight, Info, Scale, Gauge, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const activityLevels = [
	{ label: "Sedentary (little or no exercise)", factor: 1.2 },
	{ label: "Lightly active (light exercise/sports 1-3 days/week)", factor: 1.375 },
	{ label: "Moderately active (moderate exercise/sports 3-5 days/week)", factor: 1.55 },
	{ label: "Very active (hard exercise/sports 6-7 days a week)", factor: 1.725 },
	{ label: "Super active (very hard exercise & physical job)", factor: 1.9 },
];

function CaloriePlannerForm() {
	const [age, setAge] = useState(30);
	const [gender, setGender] = useState("male");
	const [height, setHeight] = useState(170); // cm
	const [weight, setWeight] = useState(70); // kg
	const [activity, setActivity] = useState(activityLevels[0].factor);
	const [result, setResult] = useState<number | null>(null);
	const [isCalculated, setIsCalculated] = useState(false);

	function calculateCalories(e: React.FormEvent) {
		e.preventDefault();
		let bmr = gender === "male"
			? 10 * weight + 6.25 * height - 5 * age + 5
			: 10 * weight + 6.25 * height - 5 * age - 161;
		const calories = bmr * activity;
		setResult(calories);
		setIsCalculated(true);
	}

	function handleReset() {
		setAge(30);
		setGender("male");
		setHeight(170);
		setWeight(70);
		setActivity(activityLevels[0].factor);
		setResult(null);
		setIsCalculated(false);
	}

	return (
		<form onSubmit={calculateCalories} className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<Label htmlFor="age" className="flex items-center gap-2">
						<Gauge className="h-4 w-4" />
						Age
					</Label>
					<Input
						id="age"
						type="number"
						value={age}
						onChange={e => setAge(Number(e.target.value))}
						min={10}
						max={120}
						required
						className="h-12 text-lg"
					/>
					<div className="flex justify-between text-sm text-muted-foreground">
						<span>10</span>
						<span>120</span>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="gender" className="flex items-center gap-2">
						<Scale className="h-4 w-4" />
						Gender
					</Label>
					<select
						id="gender"
						value={gender}
						onChange={e => setGender(e.target.value)}
						className="input input-bordered w-full h-12 text-lg"
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
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
						max={250}
						required
						className="h-12 text-lg"
					/>
					<div className="flex justify-between text-sm text-muted-foreground">
						<span>50cm</span>
						<span>250cm</span>
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
						max={300}
						required
						className="h-12 text-lg"
					/>
					<div className="flex justify-between text-sm text-muted-foreground">
						<span>10kg</span>
						<span>300kg</span>
					</div>
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="activity" className="flex items-center gap-2">
					<Flame className="h-4 w-4" />
					Activity Level
				</Label>
				<select
					id="activity"
					value={activity}
					onChange={e => setActivity(Number(e.target.value))}
					className="input input-bordered w-full h-12 text-lg"
				>
					{activityLevels.map((a, i) => (
						<option key={i} value={a.factor}>{a.label}</option>
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
					<div className="p-6 rounded-xl bg-orange-50 border border-orange-200 text-center">
						<h3 className="text-2xl font-bold">Estimated Daily Calories</h3>
						<div className="text-4xl font-extrabold text-orange-700">{result?.toFixed(0)} kcal</div>
					</div>
					<div className="p-4 bg-secondary/30 rounded-lg flex items-start gap-3">
						<Info className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
						<p className="text-sm text-muted-foreground">
							This estimate is based on the Mifflin-St Jeor Equation. Actual needs may vary depending on individual factors.
						</p>
					</div>
				</div>
			)}
		</form>
	);
}

export default function CaloriePlannerPage() {
	return (
		<div className="flex flex-col items-center w-full py-8 md:py-12 lg:py-16 space-y-8 px-4">
			<div className="w-full max-w-4xl mx-auto space-y-8">
				<Card className="w-full shadow-lg border-0 bg-gradient-to-br from-primary/5 via-background to-background">
					<CardHeader className="flex flex-col items-center text-center space-y-3">
						<div className="p-3 rounded-full bg-primary/10">
							<Flame className="h-8 w-8 text-primary" />
						</div>
						<CardTitle className="text-3xl font-bold tracking-tight text-primary">
							Calorie Planner
						</CardTitle>
						<p className="text-lg text-muted-foreground max-w-lg">
							Estimate your daily caloric needs based on your age, gender, height, weight, and activity level.
						</p>
					</CardHeader>
					<CardContent>
						<CaloriePlannerForm />
					</CardContent>
				</Card>

				<Card className="w-full shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-bold flex items-center gap-2">
							<Info className="h-5 w-5 text-primary" />
							Understanding Caloric Needs
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-muted-foreground">
							Your body burns calories even at rest—this is your Basal Metabolic Rate. The Mifflin-St Jeor Equation gives one of the most accurate estimates, using your weight, height, age, and sex. Then, by adjusting for your daily activity, it reveals your true calorie needs—helping you eat better, feel energized, and reach your goals with science on your side.
						</p>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger className="hover:no-underline">
									How to Use This Calculator
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground space-y-2">
									<ol className="list-decimal list-inside pl-4 space-y-2">
										<li>Enter your age, gender, height, and weight</li>
										<li>Select your activity level</li>
										<li>Click "Calculate Calories" to see your estimated needs</li>
									</ol>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger className="hover:no-underline">
									What is the Mifflin-St Jeor Equation?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									The Mifflin-St Jeor Equation is a formula that estimates your basal metabolic rate (BMR), which is the number of calories your body needs at rest. It then multiplies this by an activity factor to estimate your total daily energy expenditure (TDEE).
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger className="hover:no-underline">
									Why is Calorie Planning Important?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									Calorie planning helps you maintain a healthy weight, support your fitness goals, and ensure your body gets the energy it needs. By understanding your caloric needs, you can make informed decisions about your diet and lifestyle.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</CardContent>
					<CardFooter className="bg-secondary/30 rounded-b-lg">
						<p className="text-sm text-muted-foreground text-center w-full">
							This calculator is for informational purposes only. Actual needs may vary.
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}