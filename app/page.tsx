'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Users, Globe, Award, Star, Phone, Mail, MapPin, Menu, X, Building2, Heart, Hop as Home, Wrench, UserCheck, Factory, FileText, Target, Eye, Shield } from 'lucide-react';

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
              <h1 className="text-2xl font-bold text-navy-900">GlobalTalent</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'mission', label: 'Our Mission' },
                  { id: 'mission', label: 'Our Mission' },
                  { id: 'services', label: 'Services' },
                  { id: 'testimonials', label: 'Success Stories' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600'
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
                className="text-gray-700 hover:text-green-600 transition-colors"
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
                { id: 'mission', label: 'Our Mission' },
                { id: 'mission', label: 'Our Mission' },
                { id: 'services', label: 'Services' },
                { id: 'testimonials', label: 'Success Stories' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.9) 50%, rgba(21, 128, 61, 0.9) 100%), url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="block">THE GAZIPUR AIR</span>
            <span className="block bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
              INTERNATIONAL
            </span>
            <span className="block text-3xl md:text-4xl mt-4 font-medium">
              Skilled Workforce Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-300">
            Training exceptional professionals and connecting them with global opportunities since 2002
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600 mr-4"
          >
            Get Started Today 🚀
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="border-2 border-green-300 text-green-100 hover:bg-green-600 hover:border-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 animate-fade-in-up animation-delay-600"
          >
            Learn More 📖
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="text-4xl font-bold text-green-200 mb-2">20+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="text-4xl font-bold text-green-200 mb-2">7</div>
              <div className="text-gray-200">Specialized Sectors</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-900">
              <div className="text-4xl font-bold text-green-200 mb-2">1000+</div>
              <div className="text-gray-200">Successful Placements</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                About THE GAZIPUR AIR INTERNATIONAL
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                THE GAZIPUR AIR INTERNATIONAL is a trusted provider of skilled and unskilled 
                workforce solutions, operating since 2002. We have established a comprehensive 
                training institute in Bangladesh to skill people and ensure they meet international 
                standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Our Expertise</h3>
                    <p className="text-gray-700">Specializing in IT, Health, Housekeeping, Construction, Elder Care, Production, and Administration sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Quality Assurance</h3>
                    <p className="text-gray-700">Each candidate is thoroughly vetted and qualified to meet your specific requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Flexible Solutions</h3>
                    <p className="text-gray-700">Whether you need temporary staff, long-term placements, or specialized talent, we deliver.</p>
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

      {/* Mission, Vision, Values Sections */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To bridge the gap between skilled professionals and global opportunities by providing 
                comprehensive training and workforce solutions. We are committed to empowering individuals 
                with the skills and knowledge needed to succeed in international markets while helping 
                organizations find the perfect talent to meet their specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Excellence in training and development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Global workforce solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainable career development</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Welding professional at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Vision Section - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Healthcare professional"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="animate-fade-in-right order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the world's most trusted and innovative workforce solutions provider, 
                recognized for transforming lives through quality training and international job 
                placement. We envision a future where skilled professionals from Bangladesh contribute 
                significantly to global industries while achieving their career aspirations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Global recognition and trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Innovation in workforce solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Transforming lives worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Values
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our core values guide everything we do, from training our candidates to serving our 
                clients. These principles ensure we maintain the highest standards of integrity, 
                excellence, and commitment in all our workforce solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🎯 Excellence</h4>
                  <p className="text-sm text-gray-700">Striving for the highest quality in training and service delivery</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🤝 Integrity</h4>
                  <p className="text-sm text-gray-700">Honest, transparent, and ethical business practices</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">💪 Commitment</h4>
                  <p className="text-sm text-gray-700">Dedicated to our candidates' and clients' success</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🌍 Innovation</h4>
                  <p className="text-sm text-gray-700">Continuously improving our methods and services</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction worker"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Sections */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To bridge the gap between skilled professionals and global opportunities by providing 
                comprehensive training and workforce solutions. We are committed to empowering individuals 
                with the skills and knowledge needed to succeed in international markets while helping 
                organizations find the perfect talent to meet their specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Excellence in training and development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Global workforce solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainable career development</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Welding professional at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Vision Section - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Healthcare professional"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="animate-fade-in-right order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the world's most trusted and innovative workforce solutions provider, 
                recognized for transforming lives through quality training and international job 
                placement. We envision a future where skilled professionals from Bangladesh contribute 
                significantly to global industries while achieving their career aspirations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Global recognition and trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Innovation in workforce solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Transforming lives worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Our Values
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our core values guide everything we do, from training our candidates to serving our 
                clients. These principles ensure we maintain the highest standards of integrity, 
                excellence, and commitment in all our workforce solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🎯 Excellence</h4>
                  <p className="text-sm text-gray-700">Striving for the highest quality in training and service delivery</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🤝 Integrity</h4>
                  <p className="text-sm text-gray-700">Honest, transparent, and ethical business practices</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">💪 Commitment</h4>
                  <p className="text-sm text-gray-700">Dedicated to our candidates' and clients' success</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">🌍 Innovation</h4>
                  <p className="text-sm text-gray-700">Continuously improving our methods and services</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction worker"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 animate-fade-in-up">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Comprehensive solutions to prepare you for international career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Training Programs</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive skill development programs tailored to international standards. 
                We provide technical training, language courses, and cultural orientation to 
                ensure your success abroad.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">International Job Placement</h3>
              <p className="text-gray-700 leading-relaxed">
                Access to exclusive job opportunities across multiple countries. Our extensive 
                network of international partners ensures we find the perfect match for your 
                skills and career aspirations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Career Counseling</h3>
              <p className="text-gray-700 leading-relaxed">
                Personalized guidance from industry experts to help you make informed career 
                decisions. We provide ongoing support throughout your international career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Hear from our candidates who have achieved their dreams of working internationally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "THE GAZIPUR AIR INTERNATIONAL transformed my career completely. Their training 
                program prepared me perfectly for my IT role in Germany. The support throughout 
                the process was exceptional."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Rahman Ahmed"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Rahman Ahmed</h4>
                  <p className="text-gray-600 text-sm">Software Engineer, Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Thanks to THE GAZIPUR AIR INTERNATIONAL, I'm now working as a nurse in Canada. 
                The cultural orientation and language training made my transition smooth and successful."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Fatima Khatun"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Fatima Khatun</h4>
                  <p className="text-gray-600 text-sm">Registered Nurse, Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The team at THE GAZIPUR AIR INTERNATIONAL went above and beyond to help me secure 
                my dream job in Australia. Their expertise in international recruitment is unmatched."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Karim Hassan"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Karim Hassan</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Ready to start your international career journey? Contact us today for a consultation.
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="+880 1234-567890"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your workforce needs or career goals..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message 📧
                </button>
              </form>
            </div>

            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Phone / WhatsApp</h3>
                    <p className="text-gray-700">+8801819251370 (Md. Atikullah Mithu)</p>
                    <p className="text-gray-700">+880 1990-423908 (Md. Liton)</p>
                    <p className="text-gray-700">+393428202845 (Marziano Palli - Europe)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                    <p className="text-gray-700">mithu@gajipurgroup.com</p>
                    <p className="text-gray-700">liton@gajipurgroup.com</p>
                    <p className="text-gray-700">palli@gajpurgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      House#183, Road#02<br />
                      Baridhara DOHS<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Interview Options 🎯</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Online interviews available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Face-to-face interviews at our institute</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Flexible scheduling available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GlobalTalent</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering talent and delivering success worldwide through comprehensive 
                training and international job placement services.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                >
                  Our Mission
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
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
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
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
              © 2024 THE GAZIPUR AIR INTERNATIONAL. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}