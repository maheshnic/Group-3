import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

//This defines the navigation links
const links = [
    {to: '/' , label: 'Home'},
    {to: '/about', label: 'About Us'},
    {to: '/contact', label: 'Contact Us'},
    {to: '/list-candidate', label: 'List Candidate'},
    {to: '/faqs', label: 'FAQs'},
    {to: '/terms', label: 'Terms'},
    {to: '/register', label: 'Register'},
    {to: '/login', label: 'Login'},
]


export default function Navbar () {
  return (
    <div className="flex flex-col">
        <div className="flex h-24 items-center justify-between bg-slate-50">
            <div className="flex items-center">
                {/*Logo */}
                <div className="">
                    <Link to="/">
                        <img src='/images/nic_logo.png' className="h-24 w-50 -ml-4"  />
                    </Link>
                </div>
            

                <h1 className="text-6xl font-bold font-serif -ml-6 cursor-default">
                    National Informatics Centre
                </h1>
            </div>

            {/* Social Media Icons */}
            <div className="flex h-24 items-center min-w-1/3 space-x-8 justify-end pr-10 ">
                <a className="bg-black text-white rounded-md p-0.5 text-3xl cursor-pointer hover:text-blue-800 hover:bg-white hover:scale-125 ease-in-out duration-200"
                    href='https://www.linkedin.com'
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaLinkedin/>
                </a>
                <a className="p-0.5 border-3 text-2xl rounded-md hover:text-sky-700 hover:border-0 hover:scale-110 hover:text-3xl cursor-pointer max-w-8 ease-in-out duration-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href='https://twitter.com'
                >
                    <FaTwitter/>
                </a>
                <a className="text-3xl text-white bg-black rounded-2xl p-0.5 hover:text-blue-600 hover:bg-white hover:scale-125 transition ease-in-out cursor-pointer duration-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href='https://www.facebook.com'
                >
                    <FaFacebook/>
                </a>
                <a className="text-4xl text-black p-0.5 cursor-pointer hover:text-fuchsia-700 hover:scale-110 ease-in-out transition"
                    rel="noopener noreferrer"
                    target="_blank"
                    href='https://www.instagram.com'
                >
                    <FaInstagram/>
                </a>
                <a className="text-3xl border-2 px-0.5 rounded-lg cursor-pointer hover:text-red-600 hover:border-0 hover:scale-125 w-10 hover:text-4xl ease-in-out transition"
                    rel="noopener noreferrer"
                    target="_blank"
                    href='https://www.youtube.com'
                >
                    <FaYoutube/>
                </a>
            </div>
        </div>
        <nav className="bg-blue-950 text-white flex justify-center items-center px-6 h-16">


            {/* Links for the different pages */}
            <div className="flex">
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({isActive}) =>
                            isActive ? 'text-lg font-semibold bg-blue-900' : 'text-lg font-semibold'
                        }
                    >
                        <div className="border-x-1 py-4 px-13 hover:bg-blue-900 border-gray-700">
                            {label}
                        </div>
                    </NavLink>
                ))}
            </div>
        </nav>
    </div>
  )
}

