// src/pages/Login.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaSyncAlt, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Login() {
  const navigate = useNavigate()

  const [method, setMethod] = useState('username')

  const [role, setRole] = useState('Candidate')

  // Username login state
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')

  // Mobile login state
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState(null)
  const [otpSent, setOtpSent] = useState(false)
  const [timer, setTimer] = useState(0)
  const timerRef = useRef(null)

  // This function used for captcha generation
  const genCaptcha = () => Math.random().toString(36).slice(-6).toUpperCase()
  useEffect(() => setCaptcha(genCaptcha()), [])

  //timer for the otp part
  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setTimeout(() => setTimer(timer - 1), 1000)
    }
    return () => clearTimeout(timerRef.current)
  }, [timer])

  const handleUsernameLogin = e => {
    e.preventDefault()
    if (!username.match(/^[A-Za-z0-9]+$/) || username.length < 4) return
    if (password.length < 8) return
    if (captchaInput.toUpperCase() !== captcha) {
      alert('Captcha mismatch')
      return
    }
    if (role === 'Department') navigate('/dashboard/department')
    else alert(`${role} dashboard not implemented yet.`)
  }

  //This function is for simulating OTP generation
  const handleSendOtp = () => {
    if (!mobile.match(/^\d{10}$/)) {
      alert('Enter valid 10‑digit mobile')
      return
    }
    const code = ('' + Math.floor(100000 + Math.random() * 900000))
    setGeneratedOtp(code)
    setOtpSent(true)
    setTimer(60)
    alert(`(Debug) OTP sent: ${code}`)
  }

  const handleVerifyOtp = e => {
    e.preventDefault()
    if (otp !== generatedOtp) {
      alert('Invalid OTP')
      return
    }
    if (role === 'Department') navigate('/dashboard/department')
    else alert(`${role} dashboard not implemented yet.`)
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-2/3 bg-gradient-to-t from-blue-950 via-sky-800 to-blue-950 flex flex-col items-center justify-center text-center p-8">
        <h1 className="drop-shadow-2xl font-bold font-serif text-white text-8xl mb-4">
          Welcome
        </h1>
        <p className="drop-shadow-2xl font-sans font-medium text-white text-2xl">
          Please choose your login method and enter credentials below.
        </p>
      </div>

      <div className="w-1/2 bg-gradient-to-tr from-slate-400 via-sky-50 to-slate-400 flex flex-col items-center justify-center relative p-8">
        
        <div className="absolute top-4 left-4">
          <Link to="/" className="flex items-center text-blue-800 hover:cursor-pointer">
            <span className="text-3xl font-bold">‹</span>
            <span className="ml-2 mt-2 text-sm hover:underline ease-in duration-100">Go to Home page</span>
          </Link>
        </div>

        <div className=" w-lg min-h-3/4 bg-white rounded-2xl p-5">
          {/* Login type selection */}
          <div className="flex mb-6 border-4 border-gray-300 bg-gray-200 rounded-lg">
            {['username','mobile'].map(m => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`flex-1 py-2 text-xl font-bold text-center ${
                  method === m
                    ? 'border-b-6 border-blue-800 bg-white text-blue-800 rounded-r-lg rounded-l-lg shadow'
                    : 'text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'
                }`}
              >
                {m === 'username' ? 'Username Login' : 'Mobile Login'}
              </button>
            ))}
          </div>

          {/* Username Login Form */}
          {method === 'username' && (
            <form onSubmit={handleUsernameLogin} className="space-y-4">
              
              <div>
                <label className="block mb-1 font-semibold">Username</label>
                <input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 hover:border-gray-400 transition rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
              </div>

              
              <div className="relative">
                <label className="block mb-1 font-semibold">Password</label>
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 hover:border-gray-400 transition rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(v => !v)}
                  className="absolute right-3 top-10 text-xl text-gray-500 cursor-pointer hover:text-gray-800"
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </button>
                
              </div>

              
              <div className="flex items-center mt-9 space-x-4">
                <div className="bg-gray-200 px-4 py-2 ml-9 rounded font-mono tracking-widest select-none">
                  {captcha}
                </div>
                <button
                  type="button"
                  onClick={() => setCaptcha(genCaptcha())}
                  className="text-gray-600 hover:text-gray-900 mr-14 cursor-pointer transition"
                >
                  <FaSyncAlt />
                </button>
                <input
                  value={captchaInput}
                  onChange={e => setCaptchaInput(e.target.value)}
                  placeholder="Enter Captcha"
                  required
                  className="flex-1 px-3 py-2 mr-18 border-2 border-gray-300 hover:border-gray-400 transition rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <div>
                <label className="block mb-1 font-semibold">Role</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 hover:border-gray-400 transition cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Candidate</option>
                  <option>Department</option>
                  <option>Admin</option>
                </select>
              </div>

              
              <div className="flex justify-between items-center">
                <Link to="" className="text-blue-600 hover:underline transition text-sm">
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  className="bg-blue-950 min-w-59 text-white text-xl font-semibold px-6 py-2 rounded-lg hover:scale-105 ease-in-out duration-300 cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
          )}

          {/* Mobile Login Form */}
          {method === 'mobile' && (
            <form onSubmit={handleVerifyOtp} className="flex flex-col space-y-4">
              
              <div className="flex gap-2 mt-7 mb-10">
                <input
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                  placeholder="Enter 10-digit mobile"
                  required
                  className="flex-1 px-3 py-2 border-2 border-gray-300 hover:border-gray-400 transition rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={timer > 0}
                  className={`px-4 py-2 rounded-lg text-white ${
                    timer > 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-950 hover:bg-blue-800 cursor-pointer transition'
                  } transition`}
                >
                  {timer > 0 ? `Resend in ${timer}s` : 'Send OTP'}
                </button>
              </div>

              
              {otpSent && (
                <div>
                  <input
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                    className="w-full px-3 py-2 mt-1 border-2 border-gray-300 hover:border-gray-400 transition rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <small className="text-xs ml-2 text-gray-500">
                    6 digit code
                  </small>
                </div>
              )}

              
              <div className="mb-4 mt-14">
                <label className="block mb-1 font-semibold">Role</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 hover:border-gray-400 transition cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Candidate</option>
                  <option>Department</option>
                  <option>Admin</option>
                </select>
              </div>

              
              <button
                type="submit"
                disabled={!otpSent || otp.length < 4}
                className={`w-1/2 py-2 rounded-lg self-end font-semibold text-xl text-white ${
                  !otpSent ? 'bg-gray-400 cursor-not-allowed transition' : 'bg-blue-950 cursor-pointer hover:scale-105 duration-300 ease-in-out'
                } transition`}
              >
                Verify & Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
