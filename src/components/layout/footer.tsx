
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <div className="mb-4 flex justify-center space-x-4 md:space-x-6 items-center">
          <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">
            Disclaimer
          </Link>
          <Link href="/legal/rights" className="hover:text-primary transition-colors">
            Rights
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="https://www.linkedin.com/in/atharv-patil-bab53a284" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link href="mailto:atharvpatil269@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </div>
        <p>&copy; {currentYear} FitnessForward. All rights reserved.</p>
        <p className="mt-1">Empowering your fitness future, one calculation at a time.</p>
      </div>
    </footer>
  );
}
