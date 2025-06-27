// src/pages/Register.jsx
import React, { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    dateOfBirth: '',
    aadhaar: '',
    department: '',
    designation: '',
    employeeId: '',
    address: '',
    district: '',
    state: '',
    pinCode: '',
    password: '',
    confirmPassword: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      setStatus('Passwords do not match')
      return
    }

    console.log('Submitted Data:', form)
    setStatus('Registration successful')
    setForm({
      fullName: '',
      email: '',
      mobile: '',
      gender: '',
      dateOfBirth: '',
      aadhaar: '',
      department: '',
      designation: '',
      employeeId: '',
      address: '',
      district: '',
      state: '',
      pinCode: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-950 underline mb-8">User Registration</h1>
      <p className="mb-10 text-lg">For new registration, please fill out the given form:</p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto"
      >
        <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
        <Input label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
        <Input label="Mobile Number" name="mobile" type="tel" value={form.mobile} onChange={handleChange} />
        <Select label="Gender" name="gender" value={form.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} />
        <Input label="Date of Birth" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} />
        <Input label="Aadhaar Number" name="aadhaar" value={form.aadhaar} onChange={handleChange} />
        <Input label="Department" name="department" value={form.department} onChange={handleChange} />
        <Input label="Designation" name="designation" value={form.designation} onChange={handleChange} />
        <Input label="Employee ID" name="employeeId" value={form.employeeId} onChange={handleChange} />
        <Input label="District" name="district" value={form.district} onChange={handleChange} />
        <Input label="State" name="state" value={form.state} onChange={handleChange} />
        <Input label="PIN Code" name="pinCode" value={form.pinCode} onChange={handleChange} />
        <Input label="Address" name="address" value={form.address} onChange={handleChange} fullWidth />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
        <Input label="Confirm Password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold px-6 py-2 rounded hover:bg-blue-900"
          >
            Register
          </button>
        </div>
      </form>

      {status && (
        <p className="text-center mt-6 text-green-700 font-semibold">{status}</p>
      )}
    </div>
  )
}

function Input({ label, name, value, onChange, type = 'text', fullWidth = false }) {
  return (
    <div className={`flex flex-col ${fullWidth ? 'md:col-span-2' : ''}`}>
      <label htmlFor={name} className="font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded px-3 py-2"
        required
      />
    </div>
  )
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded px-3 py-2"
        required
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
