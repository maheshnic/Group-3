// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  // links to the pages
  const links = [
    { text: 'Privacy Policy', to: '/terms' },
    { text: 'Terms of Use',    to: '/terms' },
    { text: 'Contact',         to: '/contact' },
  ]

  return (
    <footer className="bg-blue-950 text-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} National Informatics Centre. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          {links.map(({ text, to }) => (
            <Link
              key={text}
              to={to}
              className="hover:underline"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
