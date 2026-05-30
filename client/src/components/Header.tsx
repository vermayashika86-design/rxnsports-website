import { Link } from "wouter";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - RXN Sports
 * Updated with category-driven labels, cart/search icons, and scroll state.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "BOXING", href: "/products?category=boxing" },
    { label: "WEIGHTLIFTING", href: "/products?category=weightlifting" },
    { label: "WRESTLING", href: "/products?category=wrestling" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-white py-4"
      } border-b border-black/10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/logo.png" alt="RXN SPORTS" className="h-10 md:h-12 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.label} href={item.href}>
                <a className="text-xs font-bold tracking-widest text-black hover:text-primary transition-colors duration-200 relative group uppercase">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* Icons + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-black hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-black hover:text-primary transition-colors relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            
            <Link href="/products">
              <a className="hidden md:block bg-primary hover:bg-red-700 text-white font-bold px-6 py-2.5 transition-all duration-200 hover:scale-105 rounded-sm text-xs tracking-widest">
                SHOP NOW
              </a>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-sm transition-colors"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-100 space-y-4 pb-4">
            {navItems.map(item => (
              <Link key={item.label} href={item.href}>
                <a
                  className="block text-sm font-bold tracking-widest text-black hover:text-primary transition-colors uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/products">
              <a
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-primary hover:bg-red-700 text-white font-bold py-3 px-4 transition-all duration-200 text-center rounded-sm text-xs tracking-widest"
              >
                SHOP NOW
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
