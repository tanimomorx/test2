'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Users, Globe, Award, Star, Phone, Mail, MapPin, Menu, X, Building2, Heart, Home, Wrench, UserCheck, Factory, FileText } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-900">THE GAZIPUR AIR INTERNATIONAL</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'testimonials', label: 'Success Stories' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'testimonials', label: 'Success Stories' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-8">
              <Globe className="w-5 h-5 mr-2 text-emerald-400" />
              <span className="text-emerald-300 font-medium">Trusted Since 2002 🌍</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up leading-tight">
            <span className="block text-white mb-2">THE GAZIPUR AIR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">INTERNATIONAL</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">Workforce Solutions Excellence ✨</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            🎯 Specialized workforce solutions across <span className="text-emerald-400 font-semibold">7 key sectors</span> • 
            💼 Skilled & unskilled talent • 🏆 Over 20 years of excellence • 
            🌐 Global placements with local expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              🚀 Start Your Journey
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📋 View Services
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-900">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">20+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">7</div>
              <div className="text-sm text-gray-400">Key Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-sm text-gray-400">Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">Global</div>
              <div className="text-sm text-gray-400">Reach</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About THE GAZIPUR AIR INTERNATIONAL
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                🏢 THE GAZIPUR AIR INTERNATIONAL is a trusted provider of skilled and unskilled workforce solutions, 
                operating since <span className="font-semibold text-emerald-600">2002</span>. We have established a comprehensive 
                training institute in Bangladesh to skill people across multiple sectors including IT, Health, 
                Housekeeping, Construction, Elder Care, Production, and Administration.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                💼 We specialize in supplying top-tier workforce for a wide range of industries. Whether your 
                organization requires temporary staff, long-term placements, or specialized talent, we ensure 
                that each candidate is thoroughly vetted and qualified to meet your specific requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">🎯 Our Mission</h3>
                    <p className="text-gray-700">To be your best choice in providing the best candidates to meet your requirements through comprehensive training and personalized placement services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">🌟 Our Vision</h3>
                    <p className="text-gray-700">To be the world's leading workforce solutions provider, known for excellence in training and international job placement across all sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">💎 Our Values</h3>
                    <p className="text-gray-700">Integrity, excellence, and commitment to transforming lives through meaningful career opportunities with over 20 years of trusted service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Training session"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-in-up">
              🔧 Our Specialized Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Comprehensive workforce solutions across 7 key sectors with expert training and placement services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">💻 IT Sector</h3>
              <p className="text-gray-700 leading-relaxed">
                Skilled IT professionals including software developers, system administrators, 
                network engineers, and technical support specialists trained to international standards.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">🏥 Health Sector</h3>
              <p className="text-gray-700 leading-relaxed">
                Qualified healthcare professionals including nurses, medical technicians, 
                caregivers, and healthcare assistants with proper certifications and training.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">🧹 Housekeeping</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional housekeeping staff trained in modern cleaning techniques, 
                hospitality standards, and customer service excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-900">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">🏗️ Construction</h3>
              <p className="text-gray-700 leading-relaxed">
                Skilled construction workers, engineers, project managers, and technicians 
                with safety certifications and international construction standards knowledge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">👴 Elder Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Compassionate elder care specialists trained in patient care, medical assistance, 
                and providing dignified support for elderly individuals.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">🏭 Production</h3>
              <p className="text-gray-700 leading-relaxed">
                Experienced production workers, quality control specialists, machine operators, 
                and manufacturing technicians for various industries.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">📊 Administration</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional administrative staff including office managers, data entry specialists, 
                customer service representatives, and executive assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              🌟 Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Real stories from candidates who achieved their international career dreams through our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emerald-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "THE GAZIPUR AIR INTERNATIONAL transformed my career completely. Their IT training program 
                prepared me perfectly for my software developer role in Germany. The support throughout 
                the process was exceptional! 🚀"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Ahmed Rahman"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">Ahmed Rahman</h4>
                  <p className="text-gray-600 text-sm">Software Engineer, Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emerald-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Thanks to THE GAZIPUR AIR INTERNATIONAL, I'm now working as a registered nurse in Canada. 
                The healthcare training and cultural orientation made my transition smooth and successful. 
                Highly recommended! 🏥✨"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Fatima Khatun"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">Fatima Khatun</h4>
                  <p className="text-gray-600 text-sm">Registered Nurse, Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emerald-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The team at THE GAZIPUR AIR INTERNATIONAL went above and beyond to help me secure 
                my dream construction project manager job in Australia. Their expertise in international 
                recruitment is unmatched! 🏗️🌏"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Mohammad Hasan"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">Mohammad Hasan</h4>
                  <p className="text-gray-600 text-sm">Project Manager, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-in-up">
              📞 Get In Touch
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Ready to start your international career journey? Contact our directors for a consultation. 
              We offer online and face-to-face interviews at our institute! 🎯
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your career goals and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  🚀 Send Message
                </button>
              </form>
            </div>

            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">📱 Directors Contact</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-700 font-medium">Md. Atikullah Mithu (Owner)</p>
                        <p className="text-gray-600">+8801819251370</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Md. Liton (Owner)</p>
                        <p className="text-gray-600">+880 1990-423908</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Marziano Palli (Europe Rep.)</p>
                        <p className="text-gray-600">+393428202845</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">📧 Email Addresses</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">mithu@gajipurgroup.com</p>
                      <p className="text-gray-700">liton@gajipurgroup.com</p>
                      <p className="text-gray-700">palli@gajpurgroup.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">🏢 Office Address</h3>
                    <p className="text-gray-700">
                      House#183, Road#02<br />
                      Baridhara DOHS<br />
                      Dhaka, Bangladesh 🇧🇩
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">🕒 Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    💡 <strong>Special Note:</strong> We offer online and face-to-face interviews at our institute in Bangladesh!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">THE GAZIPUR AIR INTERNATIONAL</h3>
              <p className="text-gray-300 leading-relaxed">
                🌍 Trusted workforce solutions provider since 2002. Empowering talent and delivering 
                success worldwide through comprehensive training and international job placement services 
                across 7 specialized sectors.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 THE GAZIPUR AIR INTERNATIONAL. All rights reserved. | Trusted Since 2002 🇧🇩
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}