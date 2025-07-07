// src/pages/ContactUs.jsx
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa'

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('✅ Your message has been sent successfully. We’ll respond soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-gray-100 rounded-xl min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-sky-900 mb-2">Contact Us</h1>
        <p className="text-lg text-slate-700 font-medium">
          Have a question or need assistance? We’re here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Office info section on the left side */}
        <div className="bg-white rounded-lg p-8 shadow border border-gray-200">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">Office Contact Information</h2>
          <ul className="space-y-6 text-gray-700 text-base">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-slate-700 mt-1 mr-3 text-lg" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p>National Informatics Centre (NIC)</p>
                <p>Ministry of Electronics & IT, Government of India</p>
                <p>A‑Block, CGO Complex, Lodhi Road, New Delhi ‑ 110003</p>
              </div>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-slate-700 mr-3 text-lg" />
              <a
                href="mailto:support@nic.in"
                className="text-slate-700 hover:underline"
              >
                support@nic.in
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-slate-700 mr-3 text-lg" />
              <a
                href="tel:+911234567890"
                className="text-slate-700 hover:underline"
              >
                +91-12345-67890
              </a>
            </li>
            <li className="flex items-center">
              <FaClock className="text-slate-700 mr-3 text-lg" />
              <div>
                <p className="font-semibold">Office Hours</p>
                <p>Monday to Friday: 9:30 AM - 6:00 PM IST</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form on the right side */}
        <div className="bg-white rounded-lg p-8 shadow border border-gray-200">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name part */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full border-2 border-gray-300 hover:border-gray-400 transition ease-in-out rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email part */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border-2 border-gray-300 hover:border-gray-400 transition ease-in-out rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Message part */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full border-2 border-gray-300 hover:border-gray-400 transition ease-in-out rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-xs text-gray-500 mt-1 text-right">{form.message.length}/500</p>
            </div>

            {/* Submit part */}
            <button
              type="submit"
              className="w-full bg-sky-950 text-white text-lg cursor-pointer font-semibold py-3 rounded-lg hover:bg-sky-900 transition"
            >
              Submit
            </button>

            {status && (
              <p className="mt-4 text-green-600 text-sm font-medium text-center">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
