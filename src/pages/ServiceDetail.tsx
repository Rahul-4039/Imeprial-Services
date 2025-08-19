import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Star, 
  Shield, 
  Users,
  Calendar,
  Phone
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: { [key: string]: any } = {
    'deep-cleaning': {
      title: 'Deep Cleaning & Sanitization',
      description: 'Our comprehensive deep cleaning service transforms your home into a spotless sanctuary. Using hospital-grade sanitization methods and eco-friendly products, we ensure every corner of your home is thoroughly cleaned and disinfected.',
      image: '/deep_cleaning__sanitization.jpeg',
      duration: '4-6 hours',
      rating: 4.9,
      reviews: 1247,
      features: [
        'Complete sanitization of all surfaces',
        'Deep cleaning of all rooms',
        'Kitchen appliance cleaning',
        'Bathroom deep scrubbing',
        'Floor mopping and polishing',
        'Window and mirror cleaning',
        'Dusting of all furniture',
        'Eco-friendly cleaning products'
      ],
      process: [
        'Initial assessment and planning',
        'Pre-cleaning preparation',
        'Room-by-room deep cleaning',
        'Sanitization process',
        'Quality inspection',
        'Final walkthrough with client'
      ],
      pricing: [
        { type: '1 BHK', price: '₹2,999', popular: false },
        { type: '2 BHK', price: '₹4,499', popular: true },
        { type: '3 BHK', price: '₹5,999', popular: false },
        { type: '4+ BHK', price: '₹7,499', popular: false }
      ]
    },
    'regular-cleaning': {
      title: 'Regular & One-Time Cleaning',
      description: 'Maintain your home\'s cleanliness with our flexible regular cleaning service. Whether you need weekly, bi-weekly, or monthly cleaning, we adapt to your schedule and preferences.',
      image: '/Regular_OneTime_Cleaning.jpeg',
      duration: '2-4 hours',
      rating: 4.8,
      reviews: 2156,
      features: [
        'Flexible scheduling options',
        'Customizable cleaning checklist',
        'Regular maintenance cleaning',
        'One-time cleaning available',
        'Consistent cleaning team',
        'Quality assurance checks',
        'Eco-friendly products',
        'Post-cleaning report'
      ],
      process: [
        'Schedule consultation',
        'Custom cleaning plan creation',
        'Regular service execution',
        'Quality monitoring',
        'Feedback collection',
        'Service optimization'
      ],
      pricing: [
        { type: 'Weekly', price: '₹1,499/visit', popular: true },
        { type: 'Bi-weekly', price: '₹1,799/visit', popular: false },
        { type: 'Monthly', price: '₹2,299/visit', popular: false },
        { type: 'One-time', price: '₹2,499', popular: false }
      ]
    }
  };

  const service = serviceData[serviceId || ''] || serviceData['deep-cleaning'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-gray-300">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{service.duration}</span>
                </div>
              </div>
              <p className="text-lg opacity-90">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.pricing.map((plan: any, index: number) => (
                  <div
                    key={index}
                    className={`relative border-2 rounded-xl p-6 ${
                      plan.popular
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {plan.type}
                      </h3>
                      <div className="text-2xl font-bold text-green-600 mb-4">
                        {plan.price}
                      </div>
                      <Link
                        to="/booking"
                        className={`block w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                          plan.popular
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Select Plan
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book This Service</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Starting from</span>
                  <span className="text-2xl font-bold text-green-600">₹1,499</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{service.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/booking"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
                <a
                  href="tel:+919876543210"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Trust Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">100% Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">Trained & Verified Staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Book your {service.title.toLowerCase()} service today and experience the Imperial Services difference.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Your Service Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;