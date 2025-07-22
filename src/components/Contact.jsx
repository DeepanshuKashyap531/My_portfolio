import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const socials = [
    { name: 'LinkedIn', icon: '/skill images/Contact/linkdin.png', url: 'https://www.linkedin.com/in/danny554' },
    { name: 'GitHub', icon: '/skill images/Contact/git.png', url: 'https://github.com/DeepanshuKashyap531' },
    { name: 'Instagram', icon: '/skill images/Contact/instagram.png', url: 'https://www.instagram.com/deepanshu_kashyap77' },
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        created: Timestamp.now()
      });
      setSuccess('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setSuccess('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gradient-to-br from-[#1E2A44] to-[#2A3B66]">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-4 text-center text-white font-inter animate-fade-in">Get in Touch</h2>
        <p className="text-lg text-center text-cyan-300 font-inter mb-8 animate-slide-in">
          Let's connect! Whether you have a project idea or just want to chat, I'm all ears.
        </p>
        <div className="max-w-lg mx-auto bg-[#2A3B66] p-8 rounded-xl shadow-xl shadow-cyan-500/20 animate-slide-in">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-cyan-400 font-semibold mb-2 font-inter">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-cyan-500/50 rounded-lg bg-[#1E2A44] text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-cyan-400 font-semibold mb-2 font-inter">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-cyan-500/50 rounded-lg bg-[#1E2A44] text-white"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-cyan-400 font-semibold mb-2 font-inter">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-cyan-500/50 rounded-lg bg-[#1E2A44] text-white"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            {success && <p className="text-center text-cyan-300">{success}</p>}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-[#1E2A44] px-6 py-3 rounded-lg font-inter font-semibold"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <a
                href="/path/to/your-cv.pdf"
                download
                className="bg-gradient-to-r from-cyan-400 to-pink-400 text-[#1E2A44] px-6 py-3 rounded-lg font-inter font-semibold text-center"
              >
                Download CV
              </a>
            </div>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                <img src={social.icon} alt={social.name} className="w-10 h-10 rounded-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
