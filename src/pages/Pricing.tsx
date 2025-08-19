import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic Clean',
      price: '₹1,499',
      duration: '2-3 hours',
      popular: false,
      features: [
        'General cleaning of all rooms',
        'Dusting and vacuuming',
        'Kitchen surface cleaning',
        'Bathroom basic cleaning',
        'Floor mopping',
        'Trash removal'
      ],
      ideal: 'Perfect for regular maintenance'
    },
    {
      name: 'Deep Clean',
      price: '₹2,999',
      duration: '4-6 hours',
      popular: true,
      features: [
        'Everything in Basic Clean',
        'Deep sanitization',
        'Inside appliance cleaning',
        'Detailed bathroom scrubbing',
        'Window and mirror cleaning',
        'Furniture deep dusting',
        'Carpet spot cleaning',
        'Post-cleaning inspection'
      ],
      ideal: 'Best for thorough cleaning'
    },
    {
      name: 'Premium Clean',
      price: '₹4,999',
      duration: '6-8 hours',
      popular: false,
      features: [
        'Everything in Deep Clean',
        'Carpet shampooing',
        'Sofa cleaning',
        'Balcony cleaning',
        'Inside refrigerator cleaning',
        'Oven deep cleaning',
        'Wardrobe organization',
        'Premium eco-friendly products'
      ],
      ideal: 'Ultimate cleaning experience'
    }
  ];

  const subscriptionPlans = [
    {
      frequency: 'Weekly',
      discount: '15%',
      price: '₹1,274',
      originalPrice: '₹1,499',
      savings: '₹225'
    },
    {
      frequency: 'Bi-Weekly',
      discount: '10%',
      price: '₹1,349',
      originalPrice: '₹1,499',
      savings: '₹150'
    },
    {
      frequency: 'Monthly',
      discount: '20%',
      price: '₹1,199',
      originalPrice: '₹1,499',
      savings: '₹300'
    }
  ];

  const addOnServices = [
    { name: 'Extra Room Cleaning', price: '₹500' },
    { name: 'Balcony Cleaning', price: '₹300' },
    { name: 'Sofa Shampooing', price: '₹800' },
    { name: 'Refrigerator Deep Clean', price: '₹400' },
    { name: 'Oven Deep Clean', price: '₹600' },
    { name: 'Carpet Shampooing', price: '₹1,200' },
    { name: 'Wardrobe Organization', price: '₹700' },
    { name: 'Window Cleaning (External)', price: '₹500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Choose the perfect cleaning plan for your home. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Cleaning Plan
            </h2>
            <p className="text-xl text-gray-600">
              All plans include professional cleaning supplies and equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600">{plan.duration}</p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      {plan.ideal}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Save with Subscription Plans
            </h2>
            <p className="text-xl text-gray-600">
              Regular cleaning schedules with significant savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.frequency} Cleaning
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Save {plan.discount} • {plan.savings} off
                  </div>
                  <Link
                    to="/booking"
                    className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600">
              Customize your cleaning with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <div className="text-2xl font-bold text-green-600">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the base price?
              </h3>
              <p className="text-gray-600">
                All our prices include professional cleaning supplies, equipment, and the service of trained cleaning professionals. No hidden costs for basic cleaning materials.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How is pricing determined?
              </h3>
              <p className="text-gray-600">
                Pricing is based on the size of your home, type of service, and any additional add-ons you choose. We provide transparent, upfront pricing with no surprises.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time with 24 hours notice. No cancellation fees or long-term commitments required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer discounts for first-time customers?
              </h3>
              <p className="text-gray-600">
                Yes! First-time customers get 20% off their first cleaning service. Additional discounts available for subscription plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Choose your plan and book your first cleaning service today. 
            Experience the Imperial Services difference.
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

export default Pricing;