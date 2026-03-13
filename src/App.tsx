/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Globe, 
  DollarSign, 
  Gift, 
  MapPin, 
  Megaphone, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrandIcon } from "./components/BrandIcon";

// --- BRAND & LOCALIZATION CONFIGURATION ---
// You can easily update these values to match your brand kit and localization needs.
const BRAND = {
  name: "VerifySMS", // Replace with your Wordmark/Brand Name
  tagline: "Secure, Private, and Instant SMS Verification", // Replace with your Tagline
  currency: "$", // Localization tweak: Change currency symbol if needed
  pricePerActivation: "0.03", // Localization tweak: Change base price if needed
  supportEmail: "support@verifysms.com",
  dashboardUrl: "https://app.verifysms.com/auth/signup",
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Wordmark */}
            <div className="flex items-center gap-2">
              <div className="p-1">
                <BrandIcon className="w-8 h-8" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                {BRAND.name}
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a 
                href={BRAND.dashboardUrl}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1 transition-colors duration-300">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50">How it Works</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50">Pricing</a>
            <a href={BRAND.dashboardUrl} className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950 -z-10 transition-colors duration-300" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                {BRAND.tagline}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight transition-colors duration-300">
                Online Phone Numbers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">SMS Verification</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Receive SMS online for any service verification without exposing your real number. Protect your identity with secure, non-VoIP phone numbers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href={BRAND.dashboardUrl}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none w-full sm:w-auto group"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Why Choose {BRAND.name}?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">Everything you need for seamless, secure, and instant SMS verifications across the globe.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BrandIcon, title: "Privacy & Anonymity", desc: "Keep your personal number hidden from unwanted calls, spam, or data leaks." },
                { icon: Smartphone, title: "Multiple Accounts", desc: "Create multiple social media profiles without buying extra physical SIM cards." },
                { icon: DollarSign, title: "Cost Savings", desc: "No need to maintain extra phone plans—only pay when you need an SMS code." },
                { icon: Gift, title: "Promotional Codes", desc: "Get sign-up offers from marketplaces or apps in different regions easily." },
                { icon: MapPin, title: "Geo-Flexibility", desc: "Verify accounts that require a local phone number—perfect for traveling or business." },
                { icon: Megaphone, title: "Marketing", desc: "Create dedicated numbers for ads, sales funnels, or regional offers for your agency." },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-500/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Efficient, powerful, and Easy To Use</h2>
                <p className="text-slate-400 text-lg mb-10">Get your verification code in three simple steps. No personal SIM required.</p>
                
                <div className="space-y-8">
                  {[
                    { step: "1", title: "Select Your Service", desc: "Pick from over 1,000 supported services (WhatsApp, Google, Facebook, and more) right in our dashboard." },
                    { step: "2", title: "Choose Your Country", desc: "Select the desired country for your verification, then grab your temporary number in seconds." },
                    { step: "3", title: "Receive SMS & Verify", desc: "Your verification code arrives right away. Copy, paste, and you're done." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold border border-indigo-500/30">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
                  {/* Mockup Dashboard UI */}
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-slate-400 font-mono">app.{BRAND.name.toLowerCase()}.com</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 bg-slate-700/50 rounded-lg flex items-center px-4">
                      <Globe className="w-4 h-4 text-slate-400 mr-3" />
                      <div className="h-4 w-32 bg-slate-600 rounded" />
                    </div>
                    <div className="h-10 bg-slate-700/50 rounded-lg flex items-center px-4">
                      <Smartphone className="w-4 h-4 text-slate-400 mr-3" />
                      <div className="h-4 w-48 bg-slate-600 rounded" />
                    </div>
                    <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl mt-6">
                      <div className="text-xs text-indigo-300 mb-1">Incoming SMS</div>
                      <div className="font-mono text-lg text-white">G-482910 is your Google verification code.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Features List */}
        <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 lg:p-16 bg-indigo-600 dark:bg-indigo-900/40 text-white flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-6xl font-extrabold">{BRAND.currency}{BRAND.pricePerActivation}</span>
                    <span className="text-indigo-200 dark:text-indigo-300 text-lg">/ activation</span>
                  </div>
                  <p className="text-indigo-100 dark:text-indigo-200 text-lg mb-8">
                    No monthly fees or subscriptions. Only pay for successful SMS verifications.
                  </p>
                  <a 
                    href={BRAND.dashboardUrl}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 dark:text-white bg-white dark:bg-indigo-600 rounded-xl hover:bg-slate-50 dark:hover:bg-indigo-700 transition-colors w-full sm:w-max"
                  >
                    Create Free Account
                  </a>
                </div>
                
                <div className="p-10 lg:p-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">Everything Included:</h3>
                  <ul className="space-y-5">
                    {[
                      "Valid 20 minutes per activation",
                      "Auto refunds if no SMS received",
                      "Max price, advanced filters, total flexibility",
                      "Reactivate the same phone if still available",
                      "Any service, any country, no restrictions",
                      "Non-VoIP numbers for maximum reliability",
                      "Intuitive dashboard with activation history",
                      "Fast API Integration for developers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white dark:bg-slate-900 text-center transition-colors duration-300">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Ready to Protect your Privacy?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 transition-colors duration-300">Join thousands of users who trust {BRAND.name} for secure, instant SMS verifications.</p>
            <a 
              href={BRAND.dashboardUrl}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:scale-105"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1">
                  <BrandIcon className="w-6 h-6 grayscale opacity-80" />
                </div>
                <span className="font-bold text-xl text-white">
                  {BRAND.name}
                </span>
              </div>
              <p className="text-sm max-w-xs">
                {BRAND.tagline}. Protect your identity with secure, non-VoIP phone numbers.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
                <li><a href={`mailto:${BRAND.supportEmail}`} className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>&copy; {new Date().getFullYear()} {BRAND.name.toUpperCase()}. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

