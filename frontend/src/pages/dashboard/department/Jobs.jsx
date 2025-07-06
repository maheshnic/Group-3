// src/pages/Jobs.jsx
import React, { useState, useEffect, useMemo } from 'react'
import { FaPlus, FaPencilAlt, FaTrash, FaFilter, FaUsers } from 'react-icons/fa'
import * as api from '../../../api'

export default function Jobs() {
  const tabs = ['Create Job', 'Manage Jobs', 'Applicants'];
  const [activeTab, setActiveTab] = useState(tabs[0]);


const [jobs, setJobs] = useState([]);

const [applicants, setApplicants] = useState([]);

useEffect(() => {
  api.getJobs().then(r => setJobs(r.data));
  api.getApplicants().then(r => setApplicants(r.data));
}, []);

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
                ? 'text-sky-700 bg-white border-b-6 rounded-xl'
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
    jobId: '', title: '', department: '', type: '', location: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const missing = Object.values(form).some(v=>!v);
    if (missing) {
      setStatus('Please fill all fields.');
      return;
    }
    api.createJob(form).then(r => {
      setJobs([...jobs, r.data]);
      setStatus(`Job ${r.data.jobId} created!`);
      setForm({ jobId:'', title:'', department:'', type:'', location:'' });
    });
  };

  return (
    <div className="bg-gray-200 px-3 py-6 rounded-xl">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <h3 className="text-2xl text-sky-900 bg-slate-300 rounded-lg font-semibold py-1 pl-3">Create New Job</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Job ID','jobId'],['Title','title'],
            ['Department','department'],['Type','type'],
            ['Location','location']
          ].map(([label,name]) => (
            <div key={name} className="flex flex-col">
              <label className="font-semibold mb-1">{label}</label>
              <input
                name={name}
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
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  
  const filtered = useMemo(() =>
    jobs.filter(j =>
      j.jobId.includes(search) ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase())
    )
  , [jobs, search]);

  const startEdit = job => {
    setEditingId(job.jobId);
    setEditForm({ ...job });
  };

  const saveEdit = () => {
    api.updateJob(editForm).then(r => {
      setJobs(jobs.map(j => j.jobId===r.data.jobId ? r.data : j));
      setEditingId(null);
    });
  };

  const deleteJob = id => {
    if (!window.confirm(`Delete job ${id}?`)) return;
    api.deleteJob(id).then(() => {
      setJobs(jobs.filter(j => j.jobId !== id));
    });
  };

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
              <tr key={job.jobId} className="hover:bg-slate-100 font-semibold">
                {editingId===job.jobId
                  ? ['jobId','title','department','type','location'].map(key => (
                    <td key={key} className="px-2 py-1">
                      <input
                        value={editForm[key]}
                        onChange={e=>setEditForm({...editForm,[key]:e.target.value})}
                        className="w-full border-2 border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-200"
                      />
                    </td>
                  ))
                  : ['jobId','title','department','type','location'].map(key => (
                    <td key={key} className="px-4 py-2">{job[key]}</td>
                  ))
                }

                <td className="px-4 py-2 space-x-4 space-y-2 flex">
                  {editingId === job.jobId ? (
                    <>
                      <button onClick={saveEdit}
                        className="text-green-600 pl-3 cursor-pointer hover:underline"
                      >Save</button>
                      <button onClick={()=>setEditingId(null)}
                        className="text-gray-600 pb-2 cursor-pointer hover:underline"
                      >Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={()=>startEdit(job)}
                        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center">
                        <FaPencilAlt className="mr-1"/>Edit
                      </button>
                      <button onClick={()=>deleteJob(job.jobId)}
                        className="text-red-600 hover:text-red-800 pb-2 hover:underline cursor-pointer flex items-center">
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
  const [view, setView] = useState('pending');
  const pending = applicants.filter(a => a.status==='Pending');
  const list = view==='pending' ? pending : applicants;

  const toggleStatus = (id, status) => {
    api.updateStatus(id, status).then(r => {
      setApplicants(applicants.map(a => a.id===id ? r.data : a));
    });
  };

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
              const job = jobs.find(j=>j.jobId===a.postApplied);
              return (
                <tr key={a.id} className="hover:bg-slate-100">
                  <td className="px-4 py-2 font-semibold cursor-default">{a.id}</td>
                  <td className="px-4 py-2 font-semibold cursor-default">{a.name}</td>
                  <td className="px-4 py-2 font-semibold cursor-default">{job?.title||a.postApplied}</td>
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
