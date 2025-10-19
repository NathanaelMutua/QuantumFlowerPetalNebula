import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
                HP
              </div>
              <div>HighPoint Resort</div>
            </div>
            <p className="text-gray-400 text-sm">
              Experience luxury and comfort in the heart of Kitengela. Your perfect getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Our Rooms</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Restaurant</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600" />
                <span>Olooloitikosh, Isinya<br />Kajiado County, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>highpointresort@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded text-sm focus:outline-none focus:border-red-600"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors">
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 HighPoint Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
