"use client"
import React from 'react';
import { Box } from '@/app/components/header';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Box/>
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

        <form className="mt-8">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-black mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
            className="mt-6 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;