import React from "react";
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto footer  w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-green-500">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <a
                href="/equipment"
                className="block hover:text-green-500 transition-colors"
              >
                Equipment
              </a>
              <a
                href="#"
                className="block hover:text-green-500 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#"
                className="block hover:text-green-500 transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-green-500">Legal</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block hover:text-green-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block hover:text-green-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block hover:text-green-500 transition-colors"
              >
                Safety Guidelines
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-green-500">Contact</h3>
            <div className="space-y-1">
              <p>123 Farm Street</p>
              <p>Agri City, FC 45678</p>
              <p>Email: support@agribook.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Agribook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
