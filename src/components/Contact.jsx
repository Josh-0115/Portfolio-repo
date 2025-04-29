import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setNotification('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setNotification(null), 3000);
  };

  const socialLinks = [
    { href: 'https://github.com/', icon: 'ri-github-fill' },
    { href: 'https://linkedin.com/', icon: 'ri-linkedin-fill' },
    { href: 'https://instagram.com/', icon: 'ri-instagram-fill' },
    { href: 'https://dribbble.com/', icon: 'ri-dribbble-fill' },
    { href: 'https://behance.net/', icon: 'ri-behance-fill' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Let's discuss your next project</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-button whitespace-nowrap hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-4">
                      <i className="ri-mail-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">john.anderson@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-4">
                      <i className="ri-phone-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-4">
                      <i className="ri-map-pin-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ href, icon }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg hover:bg-primary/20"
                    >
                      <i className={`${icon} text-xl text-primary`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </section>
  );
}

export default Contact;