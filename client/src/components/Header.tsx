import { Link } from "wouter";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

/**
 * Header Component - RXN Sports
 * Aggressive Minimalism Design: Bold red and black with clean typography
 * Features: Responsive navigation, mobile menu toggle
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Shop", href: "/products" },
    { label: "Boxing", href: "/products?category=boxing" },
    { label: "Weightlifting", href: "/products?category=weightlifting" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const cartCount = 2; // placeholder - integrate with cart state as needed

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease`} 
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E8001C" : "none",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo as condensed wordmark */}
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-display font-extrabold tracking-tight" style={{color: '#E8001C'}}>
              <span className="uppercase text-[18px]">RXN SPORTS</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-semibold transition-colors duration-200 relative group ${scrolled ? 'text-white' : 'text-white'}`}>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8001C] group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* Utility icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 rounded-sm transition-colors ${scrolled ? 'text-white' : 'text-white'}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className={`relative p-2 rounded-sm transition-colors ${scrolled ? 'text-white' : 'text-white'}`} aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white" style={{backgroundColor: '#E8001C', borderRadius: 8, minWidth: 18}}>{cartCount}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-700 space-y-3">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block text-sm font-semibold text-white hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-3 mt-2">
              <button className="p-2 rounded-sm text-white">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 rounded-sm text-white">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white" style={{backgroundColor: '#E8001C', borderRadius: 8, minWidth: 18}}>{cartCount}</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
