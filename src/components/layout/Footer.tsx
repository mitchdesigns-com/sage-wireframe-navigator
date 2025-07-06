import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-sage-400">SA</span>
                <div className="text-xs text-gray-400 -mt-1">
                  SAUDI ARABIA<br />
                  GLOBAL<br />
                  EXPANSION
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted gateway to Saudi Arabia's world-class medical care. 
              Experience the perfect blend of healthcare expertise, cultural hospitality, 
              and personalized service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/our-network" className="text-gray-400 hover:text-white transition-colors">Our Network</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/individuals" className="text-gray-400 hover:text-white transition-colors">For Individuals</Link></li>
              <li><Link href="/services/businesses" className="text-gray-400 hover:text-white transition-colors">For Businesses</Link></li>
              <li><Link href="/services/organizations" className="text-gray-400 hover:text-white transition-colors">For Organizations</Link></li>
              <li><Link href="/visit-saudi" className="text-gray-400 hover:text-white transition-colors">Visit Saudi</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sage Healthcare Platform. All rights reserved. | Wireframe Prototype
          </p>
        </div>
      </div>
    </footer>
  )
}
