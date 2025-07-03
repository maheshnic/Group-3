// src/pages/Jobs.jsx
import React, { useState, useMemo } from 'react'
import { FaPlus, FaPencilAlt, FaTrash, FaFilter, FaUsers } from 'react-icons/fa'

export default function Jobs() {
  const tabs = ['Create Job', 'Manage Jobs', 'Applicants']
  const [activeTab, setActiveTab] = useState(tabs[0])


const [jobs, setJobs] = useState([
  { id: 'J001', title: 'Software Engineer', department: 'IT', type: 'Full-Time', location: 'Agartala' },
  { id: 'J002', title: 'Business Analyst', department: 'Finance', type: 'Part-Time', location: 'Agartala' },
  { id: 'J003', title: 'System Admin', department: 'IT', type: 'Full-Time', location: 'Kumarghat' },
  { id: 'J004', title: 'Data Scientist', department: 'Planning', type: 'Contract', location: 'Agartala' },
  { id: 'J005', title: 'Support Executive', department: 'Public Grievance', type: 'Part-Time', location: 'Udaipur' },
  { id: 'J006', title: 'Cybersecurity Officer', department: 'IT', type: 'Full-Time', location: 'Agartala' },
  { id: 'J007', title: 'Civil Engineer', department: 'PWD', type: 'Contract', location: 'Dharmanagar' },
  { id: 'J008', title: 'Network Technician', department: 'IT', type: 'Full-Time', location: 'Teliamura' },
  { id: 'J009', title: 'Accounts Officer', department: 'Finance', type: 'Full-Time', location: 'Agartala' },
  { id: 'J010', title: 'GIS Analyst', department: 'Urban Development', type: 'Part-Time', location: 'Agartala' },
])

const [applicants, setApplicants] = useState([
  { id: 'C001', name: 'Alice Sen', jobId: 'J001', status: 'Pending' },
  { id: 'C002', name: 'Bob Das', jobId: 'J002', status: 'Pending' },
  { id: 'C003', name: 'Chitra Roy', jobId: 'J003', status: 'Shortlisted' },
  { id: 'C004', name: 'Deepak Nath', jobId: 'J004', status: 'Rejected' },
  { id: 'C005', name: 'Elina Paul', jobId: 'J005', status: 'Pending' },
  { id: 'C006', name: 'Farhan Ali', jobId: 'J006', status: 'Pending' },
  { id: 'C007', name: 'Gita Saha', jobId: 'J007', status: 'Shortlisted' },
  { id: 'C008', name: 'Harshit Roy', jobId: 'J008', status: 'Pending' },
  { id: 'C009', name: 'Ishika Dey', jobId: 'J009', status: 'Rejected' },
  { id: 'C010', name: 'Jiten Sarkar', jobId: 'J010', status: 'Pending' },
  { id: 'C011', name: 'Kritika Laskar', jobId: 'J002', status: 'Pending' },
  { id: 'C012', name: 'Lalit Majumdar', jobId: 'J006', status: 'Shortlisted' },
])

  return (
    <div className="space-y-8">
      {/* Sub page selection */}
      <div className="flex border-4 border-gray-400 py-1 bg-gray-200 rounded-lg overflow-hidden">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1 text-4xl text-center font-semibold cursor-pointer transition ease-in-out duration-300
              ${activeTab === tab
                ? 'text-blue-800 bg-white border-b-6 rounded-xl'
                : 'text-slate-700 hover:underline border-x-1 border-gray-100'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* sub page content */}
      {activeTab === 'Create Job' && (
        <CreateJobPanel jobs={jobs} setJobs={setJobs} />
      )}
      {activeTab === 'Manage Jobs' && (
        <ManageJobsPanel jobs={jobs} setJobs={setJobs} />
      )}
      {activeTab === 'Applicants' && (
        <ApplicantsPanel applicants={applicants} setApplicants={setApplicants} jobs={jobs} />
      )}
    </div>
  )
}


// Create Job
function CreateJobPanel({ jobs, setJobs }) {
  const [form, setForm] = useState({
    id: '', title: '', department: '', type: '', location: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const missing = Object.entries(form).filter(([,v]) => !v)
    if (missing.length) {
      setStatus('Please fill all fields.')
      return
    }
    setJobs([...jobs, form])
    setStatus(`Job ${form.id} created!`)
    setForm({ id:'',title:'',department:'',type:'',location:'' })
  }

  return (
    <div className="bg-gray-200 px-3 py-6 rounded-xl">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <h3 className="text-2xl text-sky-900 bg-slate-300 rounded-lg font-semibold py-1 pl-3">Create New Job</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Job ID','id','text'],
            ['Title','title','text'],
            ['Department','department','text'],
            ['Type','type','text'],
            ['Location','location','text'],
          ].map(([label,name,type]) => (
            <div key={name} className="flex flex-col">
              <label className="font-semibold mb-1">{label}</label>
              <input
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                className="border-2 border-gray-300 hover:border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          ))}
        </div>
        <button type="submit"
          className="inline-flex items-center bg-sky-900 text-white text-lg font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-sky-800 hover:scale-105 ease-in-out transition"
        >
          <FaPlus className="mr-2" /> Create Job
        </button>
        {status && <p className="text-green-600">{status}</p>}
      </form>
    </div>
  )
}


// Manage Jobs
function ManageJobsPanel({ jobs, setJobs }) {
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  
  const filtered = useMemo(() =>
    jobs.filter(j =>
      j.id.includes(search) ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase())
    )
  , [jobs, search])

  const startEdit = job => {
    setEditingId(job.id)
    setEditForm({ ...job })
  }
  const saveEdit = () => {
    setJobs(jobs.map(j => j.id === editingId ? editForm : j))
    setEditingId(null)
  }
  const deleteJob = id => {
    if (!window.confirm(`Delete job ${id}?`)) return
    setJobs(jobs.filter(j => j.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaFilter className="text-blue-800 cursor-pointer" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by ID, title or dept..."
          className="flex-1 border-2 border-gray-300 hover:border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="overflow-auto bg-white rounded-lg shadow border-2 border-gray-200">
        <table className="w-full text-sm overflow-scroll">
          <thead className="bg-slate-300 text-lg">
            <tr>
              {['ID','Title','Dept','Type','Location','Actions'].map(h => (
                <th key={h} className="px-4 py-2 text-left text-sky-800">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {filtered.map(job => (
              <tr key={job.id} className="hover:bg-slate-100 font-semibold">
                {editingId === job.id ? (
                  
                  ['id','title','department','type','location'].map(key => (
                    <td key={key} className="px-2 py-1">
                      <input
                        value={editForm[key]}
                        onChange={e => setEditForm({ ...editForm, [key]: e.target.value })}
                        className="w-full border-2 border-gray-300 hover:border-gray-400 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-200"
                      />
                    </td>
                  ))
                ) : (
                  ['id','title','department','type','location'].map(key => (
                    <td key={key} className="px-4 py-2">{job[key]}</td>
                  ))
                )}

                <td className="px-4 py-2 space-x-2">
                  {editingId === job.id ? (
                    <>
                      <button onClick={saveEdit}
                        className="text-green-600 cursor-pointer hover:underline"
                      >Save</button>
                      <button onClick={()=>setEditingId(null)}
                        className="text-gray-600 cursor-pointer hover:underline"
                      >Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={()=>startEdit(job)}
                        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center">
                        <FaPencilAlt className="mr-1"/>Edit
                      </button>
                      <button onClick={()=>deleteJob(job.id)}
                        className="text-red-600 hover:text-red-800 hover:underline cursor-pointer flex items-center">
                        <FaTrash className="mr-1"/>Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length===0 && (
          <p className="p-4 text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  )
}


// Applicants
function ApplicantsPanel({ applicants, setApplicants, jobs }) {
  const [view, setView] = useState('pending')
  const pending = applicants.filter(a => a.status==='Pending')
  const list = view==='pending' ? pending : applicants

  const toggleStatus = (id, status) =>
    setApplicants(applicants.map(a => a.id===id ? {...a, status} : a))

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        {['pending','all'].map(v => (
          <button key={v}
            onClick={()=>setView(v)}
            className={`flex-1 py-1 text-center rounded-xl text-2xl cursor-pointer transition ease-in-out font-semibold
              ${view===v
                ? 'bg-sky-900 hover:bg-sky-800 text-white'
                : 'text-gray-700 border-gray-400 border-2 hover:bg-gray-200'}`}
          >
            {v==='pending' ? 'Pending Applicants' : 'All Applicants'}
          </button>
        ))}
      </div>

      <div className="overflow-auto bg-white rounded-lg border-2 border-gray-200 shadow">
        <table className="w-full text-sm">
          <thead className="bg-slate-200">
            <tr>
              {['ID','Name','Post Applied','Status','Action'].map(h => (
                <th key={h} className="px-4 py-2 text-lg font-semibold text-left text-sky-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map(a => {
              const job = jobs.find(j=>j.id===a.jobId)
              return (
                <tr key={a.id} className="hover:bg-slate-100">
                  <td className="px-4 py-2 font-semibold cursor-default">{a.id}</td>
                  <td className="px-4 py-2 font-semibold cursor-default">{a.name}</td>
                  <td className="px-4 py-2 font-semibold cursor-default">{job?.title||a.jobId}</td>
                  <td className="px-4 py-2 font-semibold cursor-default">
                    <span className={`
                      inline-block px-2 py-1 text-sm rounded-full 
                      ${a.status==='Shortlisted' 
                        ? 'bg-green-200 text-green-800' 
                        : a.status==='Rejected'
                          ? 'bg-red-200 text-red-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button onClick={()=>toggleStatus(a.id,'Shortlisted')}
                      className="text-green-600 cursor-pointer hover:underline"
                      disabled={a.status!=='Pending'}>
                      Shortlist
                    </button>
                    <button onClick={()=>toggleStatus(a.id,'Rejected')}
                      className="text-red-600 cursor-pointer hover:underline"
                      disabled={a.status!=='Pending'}>
                      Reject
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {list.length===0 && (
          <p className="p-4 text-gray-500">No applicants to show.</p>
        )}
      </div>
    </div>
  )
}
