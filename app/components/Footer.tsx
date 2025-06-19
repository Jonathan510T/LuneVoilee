'use client';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Help Column */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-black">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-black">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-black">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* About Column */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-4">About the Shop</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* Social Column */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-4">Follow Us</h3>
          <div className="flex items-center space-x-6 text-2xl">
            <Link href="https://instagram.com" target="_blank" className="hover:text-black">
              <i className="bx bxl-instagram" />
            </Link>
            <Link href="https://tiktok.com" target="_blank" className="hover:text-black">
              <i className="bx bxl-tiktok" />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-black">
              <i className="bx bxl-youtube" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lune Voilee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;