"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Your Privacy Matters
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          How we protect your fitness journey data at FitnessForword
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Data We Collect</h2>
          <p className="leading-relaxed text-balance">
            To provide personalized fitness guidance, we collect:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Basic profile information (name, email, age)</li>
              <li>Workout logs and exercise preferences</li>
              <li>Body measurements and progress photos (optional)</li>
              <li>Nutrition information you choose to track</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
          <p className="leading-relaxed text-balance">
            Your data helps us:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Create customized workout plans</li>
              <li>Track your fitness progress over time</li>
              <li>Provide nutrition recommendations</li>
              <li>Improve our services and features</li>
            </ul>
            We never sell or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Security</h2>
          <p className="leading-relaxed text-balance">
            We implement industry-standard measures to protect your information:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Secure encrypted connections (SSL/TLS)</li>
              <li>Regular security audits</li>
              <li>Limited access to personal data</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Your Choices</h2>
          <p className="leading-relaxed text-balance">
            You have full control over your data:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Update or delete your account anytime</li>
              <li>Export your fitness data for personal use</li>
              <li>Opt-out of non-essential communications</li>
            </ul>
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}