"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="logo-bg h-8 w-8 rounded-full flex items-center justify-center">
            <Code className="h-4 w-4 text-white" />
          </div>
          <span className="hidden font-bold text-xl sm:inline-block text-slate-800">
            Akshar Tyagi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover-underline-animation"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover-underline-animation"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover-underline-animation"
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium hover-underline-animation"
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto flex flex-col space-y-3 p-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium py-2 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium py-2 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
