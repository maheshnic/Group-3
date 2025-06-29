// src/pages/Register.jsx
import React, { useState, useEffect, useRef } from 'react'
import { FaEye, FaEyeSlash, FaSyncAlt } from 'react-icons/fa'

const DISTRICTS = [
  'West Tripura', 'Dhalai', 'Gomati', 'North Tripura',
  'Sepahijala', 'South Tripura', 'Unakoti', 'Khowai'
]
const CATEGORIES = ['General', 'SC', 'ST', 'OBC', 'EWS']
const TITLES = ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof']

export default function Register() {
  const [form, setForm] = useState({
    isResident: '',
    prtcNumber: '',
    prtcDistrict: '',
    prtcDate: '',
    prtcFile: null,
    title: '',
    fullName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    aadhaar: '',
    mobile: '',
    email: '',
    category: '',
    username: '',
    password: '',
    confirmPassword: '',
    captchaInput: '',
  })
  const [previewUrl, setPreviewUrl] = useState(null)
  const [showPwd, setShowPwd] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [status, setStatus] = useState('')
  const [captcha, setCaptcha] = useState('')

  
  const genCaptcha = () =>
    Math.random().toString(36).slice(-6).toUpperCase()
  useEffect(() => {
    setCaptcha(genCaptcha())
  }, [])

  const handleChange = e => {
    const { name, value, files } = e.target
    if (name === 'prtcFile') {
      const file = files[0]
      setForm(f => ({ ...f, prtcFile: file }))
      if (file && file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file))
      } else {
        setPreviewUrl(null)
      }
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setStatus(' Passwords do not match')
      return
    }

    if (form.captchaInput.toUpperCase() !== captcha) {
      setStatus(' Captcha does not match')
      return
    }

    console.log('Registration data:', form)
    setStatus(' Registration successful!')

    setForm({
      isResident: '',
      prtcNumber: '',
      prtcDistrict: '',
      prtcDate: '',
      prtcFile: null,
      title: '',
      fullName: '',
      fatherName: '',
      motherName: '',
      dateOfBirth: '',
      gender: '',
      aadhaar: '',
      mobile: '',
      email: '',
      category: '',
      username: '',
      password: '',
      confirmPassword: '',
      captchaInput: '',
    })
    setPreviewUrl(null)
    setCaptcha(genCaptcha())
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-100 rounded-2xl">
      <h1 className="text-4xl font-bold text-sky-900 mb-4">User Registration</h1>
      <p className="text-gray-700 mb-8">
        Please complete all required fields marked with <span className="text-black">*</span>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 shadow-lg rounded-lg">

        {/* 1. General */}
        <section>
          <h2 className="text-2xl font-semibold text-sky-900 bg-gray-200 p-3 rounded-md mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Are you permanent resident of Tripura? *"
              name="isResident"
              value={form.isResident}
              onChange={handleChange}
              options={['Yes', 'No']}
            />
          </div>
        </section>

        {/* 1a. Tripura Residence Detail */}
        {form.isResident === 'Yes' && (
          <section>
            <h2 className="text-xl text-sky-900 font-semibold mb-3 bg-gray-200 p-3 rounded-md">
              Tripura Residence Detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <Input
                label="PRTC Number *"
                name="prtcNumber"
                value={form.prtcNumber}
                onChange={handleChange}
                placeholder="PRTC/1234/12345"
                pattern="^[A-Za-z0-9/]+$"
                maxLength="50"
                required
              />
              <Select
                label="PRTC Issuing District *"
                name="prtcDistrict"
                value={form.prtcDistrict}
                onChange={handleChange}
                options={DISTRICTS}
                required
              />
              <Input
                label="PRTC Issue Date *"
                name="prtcDate"
                type="date"
                value={form.prtcDate}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]}
                required
              />
              <div>
                <label className="block mb-1 font-semibold">
                  PRTC Certificate Document *
                </label>
                <input
                  type="file"
                  name="prtcFile"
                  accept=".jpg,.png,.pdf"
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-300 hover:border-gray-400 transition rounded-md px-3 py-2 w-full hover:cursor-pointer hover:text-blue-700"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="mt-2 h-24 border"
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* 2. Personal Information */}
        <section>
          <h2 className="text-2xl font-semibold text-sky-900 bg-gray-200 p-3 rounded-md mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Title *" name="title" value={form.title} onChange={handleChange} options={TITLES} required />
            <Input label="Full Name *" name="fullName" value={form.fullName} onChange={handleChange} maxLength="100" required />
            <Input label="Father's Name" name="fatherName" value={form.fatherName} onChange={handleChange} maxLength="100" />
            <Input label="Mother's Name" name="motherName" value={form.motherName} onChange={handleChange} maxLength="100" />
            <Input
              label="Date of Birth *"
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString().split('T')[0]}
              required
            />
            <Select label="Gender *" name="gender" value={form.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} required />
            <Input
              label="Aadhaar Number *"
              name="aadhaar"
              // type="password"
              value={form.aadhaar}
              onChange={handleChange}
              pattern="\d{12}"
              maxLength="12"
              placeholder="12‑digit Aadhaar"
              required
            />
          </div>
        </section>

        {/* 3. Contact Details */}
        <section>
          <h2 className="text-2xl font-semibold text-sky-900 bg-gray-200 p-3 rounded-md mb-4">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Mobile Number *"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              pattern="\d{10}"
              placeholder="10‑digit mobile"
              required
            />
            <Input
              label="Email ID *"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <Select label="Category *" name="category" value={form.category} onChange={handleChange} options={CATEGORIES} required />
          </div>
        </section>

        {/* 4. Account Details */}
        <section>
          <h2 className="text-2xl font-semibold text-sky-900 bg-gray-200 p-3 rounded-md mb-4">Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Username *"
              name="username"
              value={form.username}
              onChange={handleChange}
              pattern="^[A-Za-z0-9_]{3,30}$"
              placeholder="use letters, numbers or underscore only"
              required
            />
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Password * </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  minLength="8"
                  placeholder="At least 8 characters"
                  required
                  className="w-full border-2 border-gray-300 hover:border-gray-400 transition rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(p => !p)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Confirm Password * </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  minLength="8"
                  required
                  className="w-full border-2 border-gray-300 hover:border-gray-400 transition rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(c => !c)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Captcha & Submit */}
        <section className="flex gap-4 items-center justify-center">
          <div className="flex items-center justify-end mt-7 mr-10 space-x-4">
            <div className="bg-gray-200 px-4 py-2 rounded text-xl font-mono tracking-widest cursor-default select-none">
              {captcha}
            </div>
            <button
              type="button"
              onClick={() => setCaptcha(genCaptcha())}
              className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
            >
              <FaSyncAlt />
            </button>
          </div>
          <Input
            label="Enter Captcha *"
            name="captchaInput"
            value={form.captchaInput}
            onChange={handleChange}
            required
          />
        </section>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-950 text-white text-lg font-semibold px-8 py-3 rounded hover:bg-sky-800 hover:cursor-pointer transition"
          >
            Register
          </button>
        </div>
      </form>

      {status && (
        <p className={`mt-6 text-center text-2xl font-semibold ${status.includes('success') ? 'text-green-700' : 'text-red-700'}`}>{status}</p>
      )}
    </div>
  )
}


function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  pattern,
  maxLength,
  minLength,
  required = false,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        className="border-2 border-gray-300 hover:border-gray-400 transition rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  )
}

function Select({ label, name, value, onChange, options, required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-2 border-gray-300 hover:border-gray-400 rounded-md hover:cursor-pointer px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="">-- Please Select --</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
