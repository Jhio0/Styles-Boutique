"use client"
import { Box } from '@/app/components/header';
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;

    if (showNotification) {
      interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - (100 / 40), 0)); // Assuming 40 intervals for 4 seconds
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showNotification]);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm("service_01oqyuc", "template_u4kl89l", form.current, "429Fupg4D2LMUBT1p");
      console.log("Message sent successfully");
      setShowNotification(true);

      // Hide notification after 4 seconds
      setTimeout(() => {
        setShowNotification(false);
        setProgress(100); // Reset progress when hiding
      }, 4000);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
        <Box/>
      {showNotification && (
        <div className="fixed top-4 right-4 m-4 p-4 bg-green-500 text-white rounded-md">
          Message sent successfully!
          <div className="h-2 bg-blue-400 mt-2 rounded-md" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
        </div>
      )}
      <div className='flex flex-col items-center justify-center'>

      <div className="max-w-md m-[80px] w-full p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get Help</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Customer Support</h3>
          <p className="text-gray-600">Email: support@yourbrand.com</p>
          <p className="text-gray-600">Phone: 1-800-123-4567</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Headquarters</h3>
          <p className="text-gray-600">123 Main Street</p>
          <p className="text-gray-600">City, State, Zip</p>
        </div>

        <form className="mt-8" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />

          <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            value="Send"
            className="mt-6 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;