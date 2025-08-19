import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Mehta',
      location: 'Bandra, Mumbai',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Imperial Services has been a game-changer for our family. Their deep cleaning service is absolutely thorough, and the team is so professional. I can finally relax knowing my home is in expert hands.',
      service: 'Deep Cleaning',
      date: '2 weeks ago'
    },
    {
      name: 'Rajesh Gupta',
      location: 'Koramangala, Bangalore',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'I\'ve been using their weekly cleaning service for 6 months now. The consistency and quality are outstanding. They use eco-friendly products which is perfect for my family with young children.',
      service: 'Weekly Cleaning',
      date: '1 month ago'
    },
    {
      name: 'Sunita Sharma',
      location: 'Gurgaon, Delhi NCR',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The kitchen and bathroom cleaning service exceeded my expectations. They cleaned areas I didn\'t even think about! The attention to detail is remarkable. Highly recommend Imperial Services.',
      service: 'Kitchen & Bathroom',
      date: '3 weeks ago'
    },
    {
      name: 'Amit Patel',
      location: 'Andheri, Mumbai',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Their carpet cleaning service brought my old carpets back to life! The team was punctual, professional, and the results were amazing. Worth every penny.',
      service: 'Carpet Cleaning',
      date: '1 week ago'
    },
    {
      name: 'Kavya Reddy',
      location: 'Whitefield, Bangalore',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'I was skeptical about hiring a cleaning service, but Imperial Services proved me wrong. They\'re trustworthy, efficient, and my house has never looked better. The booking process was so easy too!',
      service: 'Regular Cleaning',
      date: '2 months ago'
    },
    {
      name: 'Vikram Singh',
      location: 'Powai, Mumbai',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Their laundry service is a lifesaver! Perfect washing, ironing, and they even organize everything neatly. The pickup and delivery service makes it so convenient for my busy schedule.',
      service: 'Laundry & Ironing',
      date: '1 month ago'
    }
  ];

  const videoTestimonials = [
    {
      name: 'Neha Agarwal',
      location: 'Juhu, Mumbai',
      thumbnail: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '2:15',
      title: 'Why I chose Imperial Services for my home'
    },
    {
      name: 'Rohit Kumar',
      location: 'HSR Layout, Bangalore',
      thumbnail: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '1:45',
      title: 'Deep cleaning transformation of my apartment'
    },
    {
      name: 'Anjali Desai',
      location: 'Banjara Hills, Hyderabad',
      thumbnail: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '3:20',
      title: 'Monthly cleaning service review'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '2,500+', label: 'Reviews' },
    { number: '98%', label: 'Recommend Us' },
    { number: '10,000+', label: 'Happy Customers' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Real reviews from real customers who trust Imperial Services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Customer Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our satisfied customers
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-green-600 opacity-20 absolute top-6 left-6" />
            
            <div className="text-center mb-8">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].location}
              </div>
              <div className="text-sm text-green-600 font-medium mt-2">
                {testimonials[currentTestimonial].service} • {testimonials[currentTestimonial].date}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Customer Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Browse through all our customer feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-600 font-medium">{testimonial.service}</span>
                  <span className="text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our customers share their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-green-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">{video.name}</div>
                    <div>{video.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Had a great experience with Imperial Services? We'd love to hear from you!
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Write a Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;