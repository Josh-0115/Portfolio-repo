import { useState, useEffect } from 'react';
import client1Image from '../assets/images/client1.jpg'
import client2Image from '../assets/images/client2.jpg'
import client3Image from '../assets/images/client3.jpg'

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO at TechCorp',
      image: client1Image,
      quote:
        "John's expertise in UI/UX design transformed our product. His attention to detail and user-centered approach resulted in a significant increase in user engagement and satisfaction.",
    },
    {
      name: 'Michael Chen',
      title: 'Founder at StartupX',
      image: client2Image,
      quote:
        "Working with John was a game-changer for our startup. His innovative design solutions and strategic thinking helped us launch a product that our users love.",
    },
    {
      name: 'Emily Rodriguez',
      title: 'Product Manager at InnovateCo',
      image: client3Image,
      quote:
        "John's ability to understand complex requirements and translate them into intuitive designs is remarkable. He's a valuable asset to any product team.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600">What people say about my work</p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="testimonial-slider flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;