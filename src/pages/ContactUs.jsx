// src/pages/ContactUs.jsx
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Thank you! Your message has been received. Our team will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-4xl font-bold text-blue-950 mb-2">Contact Us</h1>
        <p className="text-lg text-slate-700 font-semibold">
          We'd love to hear from you. Reach out to us for queries, suggestions, or support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">Office Contact Information</h2>
          <ul className="space-y-6 text-gray-700 text-base">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-slate-700 mt-1 mr-3 text-lg" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p>National Informatics Centre (NIC)</p>
                <p>Ministry of Electronics & IT, Government of India</p>
                <p>A-Block, CGO Complex, Lodhi Road, New Delhi - 110003</p>
              </div>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-slate-700 mr-3 text-lg" />
              <a href="mailto:support@nic.in" className="text-slate-700 hover:underline">
                support@nic.in
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-slate-700 mr-3 text-lg" />
              <a href="tel:+911234567890" className="text-slate-700 hover:underline">
                +91‑12345‑67890
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition duration-150"
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
