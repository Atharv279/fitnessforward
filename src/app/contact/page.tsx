"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:atharvpatil269@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Connect With Our Fitness Team
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto text-balance">
          At FitnessForword, we value your ideas and feedback. Whether it’s about our workout routines, nutrition plans, or new features, your input helps us grow. Together, we’re building more than tools—we’re creating a supportive community. Reach out anytime; your journey is our priority.
        </p>
      </header>

      <AdPlaceholder variant="banner" label="Ad Before Contact Form" className="mb-8" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Fitness Inquiry Form</CardTitle>
            <CardDescription>Share your questions about workouts, nutrition, or account support. We typically respond within 24-48 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</Label>
                <Input type="text" name="name" id="name" autoComplete="name" required className="mt-1" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</Label>
                <Input type="email" name="email" id="email" autoComplete="email" required className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-foreground">Subject</Label>
                <Input type="text" name="subject" id="subject" required className="mt-1" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground">Your Message</Label>
                <Textarea name="message" id="message" rows={4} required className="mt-1" placeholder="Tell us about your fitness goals or questions..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary">Direct Support</CardTitle>
                     <CardDescription>For personalized training advice or technical support.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:atharvpatil269@gmail.com" className="text-foreground/90 hover:text-primary">atharvpatil269@gmail.com</a>
                    </div>
                     <p className="text-sm text-muted-foreground">
                        Best for workout program questions, account issues, and partnership opportunities.
                    </p>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary">Fitness Community</CardTitle>
                     <CardDescription>Join our growing network of fitness enthusiasts.</CardDescription>
                </CardHeader>
                <CardContent className="flex space-x-6">
                    <Link href="https://www.linkedin.com/in/atharv-patil-bab53a284" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary"><Linkedin className="h-7 w-7" /></Link>
                    <Link href="https://github.com/Atharv279/fitnessforward" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-primary"><Github className="h-7 w-7" /></Link>
                </CardContent>
            </Card>
        </div>
      </div>

      <AdPlaceholder variant="leaderboard" label="Ad After Contact Form" className="mt-12" />
    </div>
  );
}