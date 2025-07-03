import React from 'react';
import emailjs from 'emailjs-com';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaGithub,
} from 'react-icons/fa';

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',     // replace with actual
        'your_template_id',    // replace with actual
        e.target,
        'your_public_key'      // replace with actual
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
        },
        (error) => {
          console.error(error.text);
          alert('❌ Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section className="mb-10 text-center px-4">
      <div className="max-w-md mx-auto bg-violet-100 text-black rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">Let's Get in Touch</h2>

        {/* Contact Form */}
        <form onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 mb-4 border bg-gray-100 text-black border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 mb-4 border bg-gray-100 text-black border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
          <a
            href="https://www.facebook.com/shahariar.arafat.497656/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/shahariar_shawon_?igsh=MXVlc2M2M2tkZ3lzMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/8801766566796"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/al-shahariar-arafat-shawon-a02396259/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/Shahariarshaw11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.reddit.com/user/noobman_15025/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
          >
            <FaRedditAlien />
          </a>
          <a
            href="https://github.com/shahariarshawon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
