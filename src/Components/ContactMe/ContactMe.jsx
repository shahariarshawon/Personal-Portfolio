import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaGithub,
} from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const ContactSection = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();

    toast("Thank you! You message has been sent Successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    e.target.reset();
  };

  return (
    <section className="mb-10 text-center px-4">
      <div className="max-w-md mx-auto bg-violet-100 text-black rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">Let's Get in Touch</h2>

        {/* Contact Form */}
        <form onSubmit={handleSendEmail}>
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
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Send Message
            </span>
            <span class="relative invisible">Send Message</span>
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
