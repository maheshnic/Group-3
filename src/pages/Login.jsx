// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [role, setRole] = useState('Candidate')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (role === 'Department') {
      navigate('/dashboard/department')
    } else {
      alert(`${role} dashboard not implemented yet.`)
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-2/3 bg-gradient-to-t from-blue-950 via-sky-800 to-blue-950 flex flex-col items-center justify-center text-center p-8">
        <h1 className="drop-shadow-2xl font-bold font-serif text-white text-8xl mb-4">
          Welcome
        </h1>
        <p className="drop-shadow-2xl font-sans font-medium text-white text-2xl">
          Existing users may login using their username and password. For new users, click on sign up to register.
        </p>
      </div>

      <div className="w-1/2 bg-white flex flex-col items-center justify-center relative">

        <div className="absolute top-4 left-4">
          <Link to="/" className="flex items-center text-blue-800">
            <div className="flex">
              <span className="text-3xl font-bold">‹</span>
              <span className="ml-2 mt-1 text-sm content-around pt-1 hover:underline">Go to Home page</span>
            </div>
          </Link>
        </div>


        <div className="w-2/3 max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center bg-blue-950 bg-opacity-100 text-white py-2 rounded-lg">
            User Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="role" className="block mb-1 font-medium">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={e => setRole(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Candidate</option>
                <option>Department</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="text-center text-lg">
            New user?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
