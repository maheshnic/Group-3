// src/pages/AboutUs.jsx
import React from 'react'

export default function AboutUs() {
  return (
    <div className="px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-blue-900 underline mb-4">
        About Us
      </h1>

      <section className="space-y-4">
        <p className="text-lg">
          The National Informatics Centre (NIC) has been at the forefront of driving digital governance in India. Under the Ministry of Electronics and Information Technology (MeitY), NIC plays a key role in implementing e-Governance initiatives across central and state governments.
        </p>
        <p className="text-lg">
          This portal is developed to streamline government recruitment processes and department-level coordination using modern web technologies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-800">Our Mission</h2>
        <p className="text-lg">
          To provide robust digital solutions to government entities, ensuring transparency, efficiency, and accessibility to every citizen of India.
        </p>
        <h2 className="text-2xl font-semibold text-blue-800 mt-6">Our Vision</h2>
        <p className="text-lg">
          To empower governance with cutting-edge technology and create a fully digitized public administrative ecosystem.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">Departments We Serve</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Technology and Research</li>
          <li>Internet and Cybersecurity</li>
          <li>Urban Development and Housing</li>
          <li>Health and Family Welfare</li>
          <li>Finance and Revenue</li>
        </ul>
      </section>

      <div className="mt-10 p-4 border-t border-b">
        <p className="text-center text-gray-600">
          Want to get in touch? Visit our <a href="/contact" className="text-blue-700 font-medium hover:underline">Contact Us</a> page.
        </p>
      </div>
    </div>
  )
}
