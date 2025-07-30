import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Activity, Dumbbell, HeartPulse, Scale, ArrowRight } from 'lucide-react';

const tools = [
	{
		title: 'BMI Calculator',
		description:
			'Quickly check your BMI to understand your weight category and potential health risks.',
		href: '/bmi-calculator',
		icon: <Scale className="h-10 w-10 text-primary mb-4" />,
		cta: 'Calculate BMI',
	},
	{
		title: 'Workout Planner',
		description:
			'Create a custom fitness routine tailored to your goals and fitness level.',
		href: '/workout-planner',
		icon: <Dumbbell className="h-10 w-10 text-primary mb-4" />,
		cta: 'Plan Workouts',
	},
	{
		title: 'Nutrition Tracker',
		description:
			'Track your daily calories and macronutrients to stay on top of your diet.',
		href: '/nutrition-tracker',
		icon: <HeartPulse className="h-10 w-10 text-primary mb-4" />,
		cta: 'Track Nutrition',
	},
	{
		title: 'Fitness Progress Tracker',
		description:
			'Log workouts and track progress to stay motivated and see results.',
		href: '/progress-tracker',
		icon: <Activity className="h-10 w-10 text-primary mb-4" />,
		cta: 'Track Progress',
	},
];

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<section className="w-full py-12 md:py-20 lg:py-28 text-center bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg">
				<div className="container px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary mb-6 text-balance">
						Transform Your Fitness Journey
					</h1>
					<p className="max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl lg:text-2xl mb-8 text-balance">
						Struggling with workout plans or nutrition tracking? FitnessForword simplifies your fitness goals. We provide
						intuitive tools to help you understand your body, create effective routines, and track your progress. No
						guesswork, just results.
					</p>
					<Link href="#tools" passHref>
						<Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
							Explore Our Tools
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
				</div>
			</section>

			<section id="tools" className="w-full py-12 md:py-20 lg:py-24">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-headline text-primary mb-12">
						Fitness Tools Designed For You
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
						{tools.map((tool) => (
							<Card key={tool.title} className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
								<CardHeader className="items-center text-center">
									{tool.icon}
									<CardTitle className="text-2xl font-headline">{tool.title}</CardTitle>
								</CardHeader>
								<CardContent className="flex-grow">
									<CardDescription className="text-center text-foreground/70 text-balance">
										{tool.description}
									</CardDescription>
								</CardContent>
								<CardFooter className="justify-center">
									<Link href={tool.href} passHref>
										<Button variant="default" className="w-full sm:w-auto">
											{tool.cta} <ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/30 rounded-xl shadow-lg">
				<div className="container px-4 md:px-6 text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary mb-6">
						Ready to Begin Your Transformation?
					</h2>
					<p className="max-w-xl mx-auto text-lg text-foreground/80 md:text-xl mb-8 text-balance">
						Start your fitness journey today with tools that adapt to your goals and lifestyle.
					</p>
					<Link href="/about" passHref>
						<Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105">
							Learn More About Us
						</Button>
					</Link>
				</div>
			</section>

			<section className="w-full py-12 md:py-20 lg:py-24">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-headline text-primary mb-12">
						Why Choose FitnessForward?
					</h2>
					<p className="max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl lg:text-2xl mb-8 text-balance">
						FitnessForward is your ultimate companion in achieving your health and fitness goals. With our suite of tools,
						you can plan, track, and optimize every aspect of your fitness journey. Whether you're a beginner or a
						seasoned athlete, our platform is designed to empower you with actionable insights and personalized
						recommendations.
					</p>
					<p className="max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl lg:text-2xl mb-8 text-balance">
						Join thousands of users who have transformed their lives with FitnessForward. From tracking your BMI to
						planning your workouts and monitoring your nutrition, we provide everything you need to succeed. Start your
						journey today and experience the difference.
					</p>
				</div>
			</section>
		</div>
	);
}