
import React, { useState } from 'react'

export default function Jobs() {
  const tabs = ['Create Job', 'Edit Job', 'Applicants']
  const [activeTab, setActiveTab] = useState(tabs[0])

  const [jobFilter, setJobFilter] = useState({ id: '', type: '', designation: '' })
  const [jobs, setJobs] = useState([
    { id: 'J001', type: 'Full-Time', designation: 'Developer' },
    { id: 'J002', type: 'Part-Time', designation: 'Analyst' },
  ])
  const [filteredJobs, setFilteredJobs] = useState([])

  const initialApplicants = [
    { id: 'C001', name: 'Alice', job: 'Developer', status: 'Pending' },
    { id: 'C002', name: 'Bob',   job: 'Analyst',   status: 'Pending' },
  ]
  const [showApplicants, setShowApplicants] = useState(false)
  const [applicants, setApplicants] = useState(initialApplicants)

  const handleShowJobs = () => {
    setFilteredJobs(
      jobs.filter(j =>
        (!jobFilter.id || j.id === jobFilter.id) &&
        (!jobFilter.type || j.type === jobFilter.type) &&
        (!jobFilter.designation || j.designation === jobFilter.designation)
      )
    )
  }

  const handleStatusChange = (id, newStatus) => {
    setApplicants(prev =>
      prev.map(a => a.id === id ? { ...a, status: newStatus } : a)
    )
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b-2 border-gray-300 pb-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              if (tab === 'Applicants') setShowApplicants(false)
            }}
            className={`flex-1 py-2 rounded-lg text-center font-semibold text-lg 
              ${activeTab === tab 
                ? 'bg-blue-950 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'Create Job' && <CreateJobForm />}

      {activeTab === 'Edit Job' && <EditJobSection
        jobFilter={jobFilter}
        setJobFilter={setJobFilter}
        handleShowJobs={handleShowJobs}
        filteredJobs={filteredJobs}
      />}

      {activeTab === 'Applicants' && (
        <div className="space-y-4">
          <button
            onClick={() => setShowApplicants(s => !s)}
            className="bg-blue-950 text-white px-4 py-2 rounded hover:scale-105 ease-in-out duration-100"
          >
            {showApplicants ? 'Hide Applicants' : 'Show Applicants'}
          </button>

          {showApplicants && (
            <table className="w-full table-auto border-collapse mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Candidate ID</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Job Applied</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map(a => (
                  <tr key={a.id}>
                    <td className="border px-4 py-2">{a.id}</td>
                    <td className="border px-4 py-2">{a.name}</td>
                    <td className="border px-4 py-2">{a.job}</td>
                    <td className="border px-4 py-2">
                      <select
                        value={a.status}
                        onChange={e => handleStatusChange(a.id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option>Pending</option>
                        <option>Shortlisted</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}

function CreateJobForm() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    department: '',
    designation: '',
    location: '',
    deadline: '',
    type: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = e =>
    setJob({ ...job, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('New Job:', job)
    setStatus('Job created successfully!')
    setJob({
      title: '', description: '', department: '',
      designation: '', location: '', deadline: '', type: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Job Title"    name="title"    value={job.title}    onChange={handleChange} />
        <Input label="Department"   name="department"value={job.department}onChange={handleChange} />
        <Input label="Designation"  name="designation"value={job.designation}onChange={handleChange} />
        <Input label="Location"     name="location"   value={job.location}   onChange={handleChange} />
        <Input label="Deadline"     name="deadline"   type="date"           value={job.deadline}   onChange={handleChange} />
        <Select
          label="Job Type"
          name="type"
          value={job.type}
          onChange={handleChange}
          options={['Full-Time','Part-Time','Contract']}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-950 text-white px-6 py-2 rounded hover:scale-105 ease-in-out duration-100"
      >
        Create Job
      </button>
      {status && <p className="text-green-600">{status}</p>}
    </form>
  )
}

function EditJobSection({ jobFilter, setJobFilter, handleShowJobs, filteredJobs }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          placeholder="Job ID"
          value={jobFilter.id}
          onChange={e => setJobFilter({ ...jobFilter, id: e.target.value })}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="Job Type"
          value={jobFilter.type}
          onChange={e => setJobFilter({ ...jobFilter, type: e.target.value })}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="Designation"
          value={jobFilter.designation}
          onChange={e => setJobFilter({ ...jobFilter, designation: e.target.value })}
          className="border rounded px-3 py-2"
        />
      </div>
      <button
        onClick={handleShowJobs}
        className="bg-blue-950 text-white px-4 py-2 rounded hover:scale-105 ease-in-out duration-100"
      >
        Show
      </button>

      {filteredJobs.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Job ID</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map(job => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.type}</td>
                <td className="border px-4 py-2">{job.designation}</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p></p>
      )}
    </div>
  )
}

function Input({ label, name, value, onChange, type = 'text' }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2"
        required
      />
    </div>
  )
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2"
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
