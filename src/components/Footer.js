"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUp, Code } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 md:py-12 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="logo-bg h-8 w-8 rounded-full flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800">
              Akshar Tyagi
            </span>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Akshar Tyagi. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-slate-700" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
