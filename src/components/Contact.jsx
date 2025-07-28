// src/components/Contact.jsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        created: Timestamp.now()
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A] relative">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-5xl font-bold mb-4 text-center text-white font-inter animate-fade-in">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-[#00CC66] font-inter mb-8 animate-slide-in">
          Let's connect! Whether you have a project idea or just want to chat, I'm all ears.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-[#1A2A2A] p-8 rounded-xl shadow-xl shadow-[#00FF99]/20 animate-slide-in"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-[#00FF99] font-semibold mb-2 font-inter">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-[#00FF99]/50 rounded-lg bg-[#0A0A0A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF99] transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-[#00FF99] font-semibold mb-2 font-inter">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-[#00FF99]/50 rounded-lg bg-[#0A0A0A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF99] transition-all duration-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-[#00FF99] font-semibold mb-2 font-inter">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-[#00FF99]/50 rounded-lg bg-[#0A0A0A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF99] transition-all duration-300"
                placeholder="Your Message"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00FF99] to-[#00CC66] text-[#0A0A0A] px-6 py-3 rounded-lg hover:from-[#00CC66] hover:to-[#009933] transition-all duration-300 font-inter font-semibold"
              >
                Send Message
              </button>

              <a
                href="Deepanshu Kashyap Final.pdf"
                download
                className="block text-center bg-gradient-to-r from-[#00FF99] to-[#00CC66] text-[#0A0A0A] px-6 py-3 rounded-lg hover:from-[#00CC66] hover:to-[#009933] transition-all duration-300 font-inter font-semibold"
              >
                Download CV
              </a>
            </div>

            {status && (
              <p className="text-sm text-center text-[#00FF99] font-inter mt-2">{status}</p>
            )}
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            {[
              {
                name: 'LinkedIn',
                icon: 'skill images/Contact/linkdin.png',
                url: 'https://www.linkedin.com/in/danny554'
              },
              {
                name: 'GitHub',
                icon: 'skill images/Contact/git.png',
                url: 'https://github.com/DeepanshuKashyap531'
              },
              {
                name: 'Instagram',
                icon: 'skill images/Contact/instagram.png',
                url: 'https://www.instagram.com/deepanshu_kashyap77'
              }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-10 h-10 rounded-full"
                />
              </a>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
