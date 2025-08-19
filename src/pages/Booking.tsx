import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle, Plus, Minus } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [address, setAddress] = useState('');
  const [addOns, setAddOns] = useState<{ [key: string]: number }>({});
  const [step, setStep] = useState(1);

  const services = [
    { id: 'deep-cleaning', name: 'Deep Cleaning & Sanitization', price: 2999 },
    { id: 'regular-cleaning', name: 'Regular Cleaning', price: 1499 },
    { id: 'kitchen-bathroom', name: 'Kitchen & Bathroom Cleaning', price: 999 },
    { id: 'floor-carpet', name: 'Floor & Carpet Cleaning', price: 1299 },
    { id: 'laundry', name: 'Laundry & Ironing', price: 199 }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const addOnServices = [
    { id: 'extra-room', name: 'Extra Room Cleaning', price: 500 },
    { id: 'balcony', name: 'Balcony Cleaning', price: 300 },
    { id: 'sofa', name: 'Sofa Shampooing', price: 800 },
    { id: 'fridge', name: 'Refrigerator Cleaning', price: 400 },
    { id: 'oven', name: 'Oven Deep Clean', price: 600 }
  ];

  const handleAddOnChange = (id: string, increment: boolean) => {
    setAddOns(prev => ({
      ...prev,
      [id]: increment 
        ? (prev[id] || 0) + 1 
        : Math.max(0, (prev[id] || 0) - 1)
    }));
  };

  const calculateTotal = () => {
    const servicePrice = services.find(s => s.id === selectedService)?.price || 0;
    const addOnTotal = Object.entries(addOns).reduce((total, [id, quantity]) => {
      const addOn = addOnServices.find(a => a.id === id);
      return total + (addOn ? addOn.price * quantity : 0);
    }, 0);
    return servicePrice + addOnTotal;
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="w-6 h-6" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-full h-1 mx-4 ${
                      step > stepNumber ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Date & Time</span>
            <span>Details</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-2xl font-bold text-green-600 mt-2">₹{service.price}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedService === service.id
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedService === service.id && (
                          <CheckCircle className="w-full h-full text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
              
              {/* Date Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Time Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Clock className="w-5 h-5 inline mr-2" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 border rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Service Frequency
                </label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {[
                    { id: 'one-time', label: 'One-time', discount: 0 },
                    { id: 'weekly', label: 'Weekly', discount: 10 },
                    { id: 'bi-weekly', label: 'Bi-weekly', discount: 5 },
                    { id: 'monthly', label: 'Monthly', discount: 15 }
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFrequency(freq.id)}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        frequency === freq.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="font-semibold">{freq.label}</div>
                      {freq.discount > 0 && (
                        <div className="text-sm text-green-600">Save {freq.discount}%</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Address & Add-ons */}
          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
              
              {/* Address */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <MapPin className="w-5 h-5 inline mr-2" />
                  Service Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your complete address..."
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">
                  📍 Use Current Location
                </button>
              </div>

              {/* Add-ons */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add-on Services</h3>
                <div className="space-y-4">
                  {addOnServices.map((addOn) => (
                    <div key={addOn.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                        <p className="text-green-600 font-semibold">₹{addOn.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleAddOnChange(addOn.id, false)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {addOns[addOn.id] || 0}
                        </span>
                        <button
                          onClick={() => handleAddOnChange(addOn.id, true)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!address}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment & Confirmation</h2>
              
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-semibold">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="font-semibold">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frequency:</span>
                    <span className="font-semibold capitalize">{frequency.replace('-', ' ')}</span>
                  </div>
                  {Object.entries(addOns).map(([id, quantity]) => {
                    if (quantity === 0) return null;
                    const addOn = addOnServices.find(a => a.id === id);
                    return (
                      <div key={id} className="flex justify-between">
                        <span>{addOn?.name} (x{quantity}):</span>
                        <span className="font-semibold">₹{(addOn?.price || 0) * quantity}</span>
                      </div>
                    );
                  })}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <CreditCard className="w-5 h-5 inline mr-2" />
                  Payment Method
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Credit/Debit Card', 'UPI Payment', 'Net Banking'].map((method) => (
                    <button
                      key={method}
                      className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors text-center"
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Confirm & Pay ₹{calculateTotal()}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;