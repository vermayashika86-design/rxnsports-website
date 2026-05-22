import { Link } from "wouter";

/**
 * Footer Component - RXN Sports
 * Aggressive Minimalism Design: Bold black background with white text
 */
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">RXN</span>
              </div>
              <span className="font-display font-bold text-lg">RXN SPORTS</span>
            </div>
            <p className="text-sm text-gray-300">
              Weapon to Win. Manufacturing excellence since 1972. Trusted by
              athletes across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-gray-300 hover:text-primary transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Boxing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Weightlifting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Fitness
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  MMA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@rxnsports.in</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li className="pt-2">
                <span className="text-primary font-semibold">Follow Us</span>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 RXN Sports. All rights reserved. Crafted in Bharat, played
              worldwide.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
