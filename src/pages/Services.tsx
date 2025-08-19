import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Home as HomeIcon, 
  Utensils, 
  Shirt, 
  Layers,
  ArrowRight,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'deep-cleaning',
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Deep Cleaning & Sanitization',
      description: 'Comprehensive deep cleaning with hospital-grade sanitization for a truly spotless home.',
      features: ['Complete sanitization', 'All surfaces cleaned', 'Eco-friendly products', 'Post-cleaning inspection'],
      duration: '4-6 hours',
      rating: 4.9,
      price: 'From ₹2,999',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'regular-cleaning',
      icon: <HomeIcon className="w-12 h-12" />,
      title: 'Regular & One-Time Cleaning',
      description: 'Flexible cleaning schedules to maintain your home\'s cleanliness on your terms.',
      features: ['Flexible scheduling', 'Regular maintenance', 'One-time deep clean', 'Customizable service'],
      duration: '2-4 hours',
      rating: 4.8,
      price: 'From ₹1,499',
      image: 'deep_cleaning__sanitization.jpeg'
    },
    {
      id: 'kitchen-bathroom',
      icon: <Utensils className="w-12 h-12" />,
      title: 'Kitchen & Bathroom Cleaning',
      description: 'Specialized cleaning for high-use areas with attention to hygiene and detail.',
      features: ['Grease removal', 'Tile & grout cleaning', 'Appliance cleaning', 'Sanitization focus'],
      duration: '2-3 hours',
      rating: 4.9,
      price: 'From ₹999',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'floor-carpet',
      icon: <Layers className="w-12 h-12" />,
      title: 'Floor & Carpet Cleaning',
      description: 'Professional floor care and carpet shampooing to restore your surfaces.',
      features: ['All floor types', 'Carpet shampooing', 'Stain removal', 'Protective coating'],
      duration: '3-4 hours',
      rating: 4.7,
      price: 'From ₹1,299',
      image: 'Floor_Carpet_Cleaning.jpeg'
    },
    {
      id: 'laundry',
      icon: <Shirt className="w-12 h-12" />,
      title: 'Laundry & Ironing Services',
      description: 'Complete laundry care with pickup and delivery for your convenience.',
      features: ['Pickup & delivery', 'Professional washing', 'Expert ironing', 'Fabric care'],
      duration: '24-48 hours',
      rating: 4.8,
      price: 'From ₹199/kg',
      image: 'Laundry_Ironing_Services.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs. 
            From deep cleaning to regular maintenance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-green-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{service.price}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      View Details
                    </Link>
                    <Link
                      to="/booking"
                      className="flex-1 border-2 border-green-600 text-green-600 text-center py-3 px-6 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center justify-center"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Imperial Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service that exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We're not happy until you're completely satisfied with our service.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Book services at your convenience with our flexible timing options.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trained Professionals</h3>
              <p className="text-gray-600">Our team is thoroughly trained and background-verified for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of satisfied customers who trust Imperial Services for their cleaning needs.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Your Service Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;