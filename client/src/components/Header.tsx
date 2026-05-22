import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - RXN Sports
 * Aggressive Minimalism Design: Bold red and black with clean typography
 * Features: Responsive navigation, mobile menu toggle
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-display font-bold text-black hover:text-primary transition-colors">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">RXN</span>
              </div>
              <span className="hidden sm:inline">RXN SPORTS</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-semibold text-black hover:text-primary transition-colors duration-200 relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-red-700 text-white font-bold px-6 py-2 transition-all duration-200 hover:scale-105"
            >
              <Link href="/products">
                <a>SHOP NOW</a>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t-2 border-black space-y-3">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block text-sm font-semibold text-black hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-red-700 text-white font-bold transition-all duration-200"
            >
              <Link href="/products">
                <a onClick={() => setIsMenuOpen(false)}>SHOP NOW</a>
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
