import React from 'react';
import { 
  Github, 
  Twitter, 
  Youtube, 
  MessageCircle,
  Mail,
  Rocket,
  Code2,
  Users,
  BookOpen,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 pt-20 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">Codey</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of developers with interactive learning experiences and a supportive community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Courses', 'Tutorials', 'Workshops', 'Community'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and resources.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-slate-800">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
              <Users className="w-5 h-5" />
              <span className="text-2xl font-bold">50K+</span>
            </div>
            <p className="text-slate-400 text-sm">Active Learners</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
              <Code2 className="w-5 h-5" />
              <span className="text-2xl font-bold">200+</span>
            </div>
            <p className="text-slate-400 text-sm">Coding Courses</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-2xl font-bold">1000+</span>
            </div>
            <p className="text-slate-400 text-sm">Tutorials</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
              <Rocket className="w-5 h-5" />
              <span className="text-2xl font-bold">95%</span>
            </div>
            <p className="text-slate-400 text-sm">Success Rate</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2024 Codey. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;