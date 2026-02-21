import React, { useState } from 'react';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white min-h-screen bg-[#0f0f0f] px-8 py-20 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-5xl font-medium mb-10">Contact</h1>

      <div className="flex flex-wrap w-full max-w-6xl justify-between items-start mt-12">
        {/* Left */}
        <div className="text-left max-w-sm mb-10">
          <p className="text-4xl mb-6 leading-snug">Start by just saying hi!</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://www.linkedin.com/in/shanmugapriya-rajachandramohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rajachandramohan.m@gmail.com"
            >
              <img
                src={emailIcon}
                alt="Email"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/"  // Replace with your actual email or secret key
          method="POST"
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-md p-6 w-full max-w-sm space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center mb-3 text-white">Contact Me</h2>

          {/* Hidden settings */}
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you soon." />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#E75151] text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
