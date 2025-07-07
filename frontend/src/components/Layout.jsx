
//This file defines the layout for the pages

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout () {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 p-6">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

