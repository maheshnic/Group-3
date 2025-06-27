import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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
    <nav className="bg-blue-950 text-white flex items-center px-6 h-16">

        {/*Logo */}
        <div className="">
            <Link to="/">
                <img src='/images/nic_logo.png' className="h-15 w-30"  />
            </Link>
        </div>
        

        {/*Links*/}
        <div className="flex">
            {links.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({isActive}) =>
                        isActive ? 'hover:underline text-lg font-semibold bg-blue-900' : 'hover:underline text-lg font-semibold'
                    }
                >
                    <div className="border-x-1 py-4 px-13 hover:bg-blue-900 border-gray-700">
                        {label}
                    </div>
                </NavLink>
            ))}
        </div>
    </nav>
  )
}



// border-x-1 py-4 px-2 border-gray-700