// src/pages/ContactUs.jsx
import React, { useState } from 'react'

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
    setStatus('Thank you for reaching out. We will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-blue-900 underline mb-6">Contact Us</h1>

      <section className="text-lg space-y-4">
        <p>
          <strong>National Informatics Centre (NIC)</strong><br />
          Ministry of Electronics and Information Technology, Government of India<br />
          A-Block, CGO Complex, Lodhi Road, New Delhi - 110003
        </p>
        <p>
          <strong>Email:</strong> support@nic.in
        </p>
        <p>
          <strong>Phone:</strong> +91-1234567890
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-md shadow-md max-w-2xl">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold px-6 py-2 rounded hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
      </section>
    </div>
  )
}
