import React from 'react';
import { Shield, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Reliability',
      description: 'All our staff are background-verified and trained professionals you can trust in your home.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of cleaning with premium eco-friendly products.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Punctuality',
      description: 'We respect your time and always arrive on schedule, ready to deliver exceptional service.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'With 15+ years in the service industry, Rajesh founded Imperial Services to bring professional cleaning standards to every home.'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Priya ensures our operations run smoothly and our customers receive consistent, high-quality service.'
    },
    {
      name: 'Amit Patel',
      role: 'Training Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Amit leads our comprehensive training programs, ensuring every team member meets our exacting standards.'
    },
    {
      name: 'Sunita Reddy',
      role: 'Quality Assurance',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Sunita oversees quality control and customer satisfaction, maintaining our reputation for excellence.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Green Cleaning Certification',
    'Professional Cleaning Association Member',
    'Insured & Bonded Services',
    'Background Verified Staff',
    'Eco-Friendly Product Certification'
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50,000+', label: 'Cleaning Hours' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '99%', label: 'Customer Retention' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Imperial Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your Trusted Cleaning Partner Since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Imperial Services was born from a simple belief: every home deserves to be a clean,
                  comfortable sanctuary. Founded in 2015 by Rajesh Kumar, we started as a small local
                  business with a big vision.
                </p>
                <p>
                  What began with just three team members and a commitment to excellence has grown into
                  the city's most trusted cleaning service. We've served over 10,000 families,
                  completing more than 50,000 cleaning sessions with an unwavering focus on quality.
                </p>
                <p>
                  Today, Imperial Services stands as a testament to what happens when passion meets
                  professionalism. We're not just cleaning homes; we're creating healthier, happier
                  living spaces for families across the city.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional cleaning service"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-green-600">9+ Years</div>
                <div className="text-gray-600">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To deliver top-quality, eco-friendly cleaning and maintenance solutions that promote healthier,
                happier, and more beautiful living and working spaces. We specialize in home deep cleaning services,
                residential deep cleaning, and sanitation services, while also offering reliable support for car cleaning,
                painting services, pest control services, interior works, and carpentry services. Whether you're searching for
                the cheapest AC service nearby or need trusted packers & movers or catering services, our mission is to provide hassle-free,
                professional solutions tailored to your needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be recognized as the most trusted provider of home deep cleaning services and residential deep cleaning,
                delivering excellence with professionalism, integrity, and customer-first service. We envision becoming the go-to brand
                for a wide range of solutions including sanitation services, painting services, interior works, pest control services, carpentry services,
                and car cleaning service. Whether you’re looking for the cheapest AC service nearby, reliable packers & movers, or seamless catering service,
                our goal is to serve every household and workspace with quality, convenience, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate professionals behind Imperial Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90">
              Trusted by thousands, proven by results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
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

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600">
              Fully certified and compliant with industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Promise to You
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-12 h-12 text-yellow-400 fill-current" />
            </div>
            <p className="text-xl text-gray-600 mb-6">
              "We promise to treat your home with the same care and respect we would our own.
              Every service is backed by our 100% satisfaction guarantee because your happiness
              is our success."
            </p>
            <div className="text-lg font-semibold text-gray-900">
              - Rajesh Kumar, Founder & CEO
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;