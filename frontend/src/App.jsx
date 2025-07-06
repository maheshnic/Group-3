import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import ListCandidate from "./pages/ListCandidate"
import FAQs from "./pages/FAQs"
import Terms from "./pages/Terms"
import DepartmentDashboard from "./pages/dashboard/department/DepartmentDashboard"
import Profile from "./pages/dashboard/department/Profile"
import Jobs from "./pages/dashboard/department/Jobs"
import Settings from "./pages/dashboard/department/Settings"


export default function App() {

  return (
    <Routes>

      <Route element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="list-candidate" element={<ListCandidate/>} />
        <Route path="faqs" element={<FAQs/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="register" element={<Register/>} />


        <Route path="dashboard/department" element={<DepartmentDashboard/>}>
          <Route index element={<Profile/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="jobs" element={<Jobs/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Route>

      <Route path="login" element={<Login/>} />

      <Route path="*" element={<p className="p-6">Page not found</p>} />

    </Routes>
  )
}


