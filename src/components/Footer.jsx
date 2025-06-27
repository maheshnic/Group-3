import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} National Informatics Centre. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          {['Privacy Policy','Terms of Use','Contact'].map((text) => (
            <a
              key={text}
              href="#"
              className="hover:underline"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
