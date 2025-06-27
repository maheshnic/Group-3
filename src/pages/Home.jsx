// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react'

const carouselImages = [
  '/images/home1.jpg',
  '/images/home2.png',
  '/images/home3.jpg',
]

const whatsNew = [
  { text: 'NIC releases new guidelines', href: '#' },
  { text: 'Scheduled maintenance on June 30', href: '#' },
  { text: 'New e-governance portal launched', href: '#' },
  { text: 'Annual report 2024 now available', href: '#' },
  { text: 'Data centre upgrade completed', href: '#' },
  { text: 'Cyber security workshop on July 5', href: '#' },
  { text: 'New API for public data released', href: '#' },
  { text: 'NICNET expansion to 100+ cities', href: '#' },
  { text: 'User feedback survey open until Aug 1', href: '#' },
  { text: 'Mobile app version 2.0 launched', href: '#' },
  { text: 'NIC releases new guidelines', href: '#' },
  { text: 'Scheduled maintenance on June 30', href: '#' },
  { text: 'New e-governance portal launched', href: '#' },
  { text: 'Annual report 2024 now available', href: '#' },
  { text: 'Data centre upgrade completed', href: '#' },
  { text: 'Cyber security workshop on July 5', href: '#' },
  { text: 'New API for public data released', href: '#' },
  { text: 'NICNET expansion to 100+ cities', href: '#' },
  { text: 'User feedback survey open until Aug 1', href: '#' },
  { text: 'Mobile app version 2.0 launched', href: '#' },
]

export default function Home() {
  const [idx, setIdx] = useState(0)
  const slideInterval = useRef()

  
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setIdx(i => (i + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(slideInterval.current)
  }, [])

  const prev = () => {
    clearInterval(slideInterval.current)
    setIdx(i => (i - 1 + carouselImages.length) % carouselImages.length)
  }
  const next = () => {
    clearInterval(slideInterval.current)
    setIdx(i => (i + 1) % carouselImages.length)
  }



  return (
    <div className="space-y-12">
      <h1 className="text-6xl font-bold text-blue-950">Welcome to the Website</h1>
      <div className="flex space-x-10">
        {/* —— Carousel —— */}
        <div className="relative overflow-hidden rounded-lg shadow-lg w-3/4">
          <img
            src={carouselImages[idx]}
            alt={`Slide ${idx+1}`}
            className="w-full h-120"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-800 ease-in-out duration-75 bg-opacity-50 text-white text-4xl px-1 pb-1 rounded-full"
          >‹</button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-800 ease-in-out duration-75 bg-opacity-50 text-white text-4xl px-1 pb-1 rounded-full"
          >›</button>
        </div>

        {/* —— What's New —— */}
        <div className="mt-6 md:mt-0 w-full md:w-1/4">
          <div className="bg-slate-800 py-2 font-semibold pl-3 mb-3 rounded-lg">
            <h2 className="text-3xl text-white">What’s New</h2>
          </div>
          <div className="h-100 overflow-y-auto border rounded p-4 bg-slate-700">
            <ul className="space-y-5">
              {whatsNew.map((item, i) => (
                <div className="bg-slate-100 mx-2 text-black hover:text-blue-700 hover:underline hover:scale-105 ease-in-out duration-150 rounded-md py-1 pl-1">
                  <li key={i}>
                    <a
                      href={item.href}
                      className="p-1 rounded-md"
                    >
                      {item.text}
                  </a>
                </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* —— Company Description —— */}
      <section className="prose max-w-full">
        <h2 className="text-2xl font-semibold">About NIC</h2>
        <p>
          The National Informatics Centre (NIC) is an Indian government department under the Ministry of Electronics and Information Technology (MeitY).

It provides infrastructure, IT Consultancy, IT Services including but not limited to architecture, design, development and implementation of IT Systems to Central Government Departments and State Governments, helping in implementing the digitization initiatives of Digital India.

The organisation also carries out research in the IT domain and recruits various scientists and Scientific/Technical Assistants. The organisation's primary function is to cater to ICT needs at all levels of governance and facilitate digital access to government services for citizens. 
        </p>
        <p>
          The National Informatics Centre (NIC) was established in 1976 by Narasimaiah Seshagiri under the Electronics Commission of India and later moved under the Planning Commission of India before coming under the Ministry of Electronics and Information Technology. Additional Secretary Narasimaiah Seshagiri was the first to introduce a network system in India called NICNET. The organisation designs and develops IT systems for various government bodies, helping in the modernization of management and administration processes of these government bodies as the country underwent Globalisation. The organisation provides digital access to various government services to the citizens.

It had an annual budget of ₹11.5 billion (US$140 million) for the year 2018–19. Most of this is spent in providing free services to various Government Departments. 
        </p>
      </section>
    </div>
  )
}
