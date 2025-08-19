import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Home as HomeIcon, 
  Utensils, 
  Shirt, 
  Layers,
  Star,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'image_1.jpeg',
    'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Deep Cleaning & Sanitization',
      description: 'Thorough cleaning with hospital-grade sanitization',
      link: '/services/deep-cleaning'
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Regular & One-Time Cleaning',
      description: 'Flexible cleaning schedules to fit your needs',
      link: '/services/regular-cleaning'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Kitchen & Bathroom Cleaning',
      description: 'Specialized cleaning for high-use areas',
      link: '/services/kitchen-bathroom'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Floor & Carpet Cleaning',
      description: 'Professional floor care and carpet shampooing',
      link: '/services/floor-carpet'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Laundry & Ironing Services',
      description: 'Complete laundry care with pickup & delivery',
      link: '/services/laundry'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Happy Customers' },
    { icon: <Clock className="w-8 h-8" />, number: '50,000+', label: 'Hours Served' },
    { icon: <Shield className="w-8 h-8" />, number: '100%', label: 'Satisfaction Rate' },
    { icon: <Star className="w-8 h-8" />, number: '4.9/5', label: 'Average Rating' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Problem,{' '}
                  <span className="text-green-600">Our Solution</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  A Clean Home is a Happy Home!
                </p>
                <p className="text-lg text-gray-600">
                  Professional housekeeping services that transform your space into a spotless sanctuary. 
                  Trusted by thousands of families across the city.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Cleaning Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Professional cleaning service ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From deep cleaning to regular maintenance, we offer comprehensive solutions 
              for all your housekeeping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="flex space-x-3">
                  <Link
                    to={service.link}
                    className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/booking"
                    className="flex-1 text-center px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium"
                  >
                    Book Now
                  </Link>
                </div>
                
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Available 24/7</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl opacity-90">
              Our numbers speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your cleaning service today and experience the Imperial Services difference. 
            Professional, reliable, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Book Your Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;