// src/pages/ListCandidate.jsx
import React, { useState, useEffect } from 'react'

//This imports the methods used for fetching the data from the db
import * as api from '../api' 

export default function ListCandidate() {
  const [candidates, setCandidates] = useState([])
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState('')

  //This one fetches data on initial render
  useEffect(() => {
    Promise.all([
      api.getApplicants(),
      api.getJobs()
    ])
      .then(([appRes, jobRes]) => {
        setCandidates(appRes.data)
        setJobs(jobRes.data)
      })
      .catch(err => console.error('Fetch error:', err))
  }, [])

  //This one filters the candidates based on search text
  const filtered = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.postApplied.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-5xl mb-10 font-bold text-sky-900 border-b-4 rounded border-sky-900 pb-5 text-center">
        Candidate List
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search candidates..."
        className="w-full mb-4 p-2 border-2 border-gray-300 hover:border-gray-400 transition rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {/* The Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow-sm">
          <thead className="bg-sky-900 text-white">
            <tr>
              <th className="p-3 font-semibold text-left text-xl">Name</th>
              <th className="p-3 font-semibold text-left text-xl">Post Applied</th>
              <th className="p-3 font-semibold text-left text-xl">Status</th>
              <th className="p-3 font-semibold text-left text-xl">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const job = jobs.find(j => j.jobId === c.postApplied)
              const displayPost = job ? job.title : c.postApplied

              return (
                <tr key={c.id || i} className="border-2 border-gray-300 hover:bg-gray-50">
                  <td className="p-3 font-semibold">{c.name}</td>
                  <td className="p-3 font-semibold">{displayPost}</td>
                  <td className={`p-3 font-semibold ${
                    c.status === 'Shortlisted' ? 'text-green-600' :
                    c.status === 'Rejected'    ? 'text-red-600'   :
                                                  'text-yellow-600'
                  }`}>
                    {c.status}
                  </td>
                  <td className="p-3 font-semibold">{c.email}</td>
                </tr>
              )
            })}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No matching candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
