import React, { useState } from 'react';

export default function Settings() {
  const [department, setDepartment] = useState({
    name: 'Department of IT',
    hod: 'Supratik Datta',
    email: 'dit-tripura@gov.in',
    phone: '+91-381-2345678',
    location: 'Secretariat, Agartala'
  });

  const [overview, setOverview] = useState({
    strength: 45,
    assets: 300,
    capital: 12000000,
    projects: 12
  });

  const [editDept, setEditDept] = useState(false);
  const [formData, setFormData] = useState({ ...department });
  const [editOverview, setEditOverview] = useState(false);
  const [overviewForm, setOverviewForm] = useState({ ...overview });

  const [projects, setProjects] = useState([
    { name: 'Digital Village', status: 'In Progress', completion: 60 },
    { name: 'e-Governance', status: 'Ongoing', completion: 45 }
  ]);
  const [newProject, setNewProject] = useState({ name: '', status: '', completion: 0 });
  const [editIdx, setEditIdx] = useState(null);

  const saveDept = () => {
    setDepartment({ ...formData });
    setEditDept(false);
  };

  const saveOverview = () => {
    setOverview({ ...overviewForm });
    setEditOverview(false);
  };

  const saveProject = () => {
    const updated = [...projects];
    updated[editIdx] = newProject;
    setProjects(updated);
    setNewProject({ name: '', status: '', completion: 0 });
    setEditIdx(null);
  };

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: '', status: '', completion: 0 });
  };

  return (
    <div className="max-w-6xl bg-gray-100 rounded-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl w-1/3 text-center font-semibold text-sky-800 bg-slate-300 p-1 rounded-lg">Department Settings</h1>
      {/* Department Info */}
      <section className="border-2 border-blue-400 bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-xl text-blue-700 mb-2">Department Info</h2>
        {editDept ? (
          <>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(formData).map(([k, v]) => (
                <input key={k} value={v} onChange={(e) => setFormData({ ...formData, [k]: e.target.value })} className="border-2 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 p-1 rounded" />
              ))}
            </div>
            <div className="mt-2 space-x-2">
              <button onClick={saveDept} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">Save</button>
              <button onClick={() => setEditDept(false)} className="bg-gray-400 text-white cursor-pointer px-3 py-1 rounded">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-1 text-gray-700">
              {Object.entries(department).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> {v}</li>
              ))}
            </ul>
            <button onClick={() => setEditDept(true)} className="mt-2 bg-blue-600 text-white cursor-pointer px-3 py-1 rounded">Edit</button>
          </>
        )}
      </section>

      {/* Department Overview */}
      <section className="border-2 border-blue-400 bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-xl text-blue-700 mb-2">Department Overview</h2>
        {editOverview ? (
          <>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(overviewForm).map(([k, v]) => (
                <input key={k} type="number" value={v} onChange={(e) => setOverviewForm({ ...overviewForm, [k]: Number(e.target.value) })} className="border-2 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 p-1 rounded" placeholder={k} />
              ))}
            </div>
            <div className="mt-2 space-x-2">
              <button onClick={saveOverview} className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded">Save</button>
              <button onClick={() => setEditOverview(false)} className="bg-gray-400 text-white cursor-pointer px-3 py-1 rounded">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-1 text-gray-700">
              {Object.entries(overview).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> { k === 'capital' ? `₹${v.toLocaleString()}` : v }</li>
              ))}
            </ul>
            <button onClick={() => setEditOverview(true)} className="mt-2 bg-blue-600 text-white cursor-pointer px-3 py-1 rounded">Edit</button>
          </>
        )}
      </section>

      {/* Projects */}
      <section className="border border-blue-400 bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-xl text-blue-700 mb-2">Projects</h2>
        <ul className="space-y-1 mb-3">
          {projects.map((p, i) => (
            <li key={i} className="flex justify-between items-center border-2 border-gray-400 p-2 rounded bg-gray-50">
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-600">Status: {p.status} | {p.completion}%</div>
              </div>
              <button className="text-blue-600 cursor-pointer hover:text-blue-800 underline" onClick={() => { setEditIdx(i); setNewProject(p); }}>Edit</button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-2">
          <input className="border-2 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 p-1 rounded" placeholder="Project Name" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />
          <input className="border-2 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 p-1 rounded" placeholder="Status" value={newProject.status} onChange={(e) => setNewProject({ ...newProject, status: e.target.value })} />
          <input className="border-2 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 p-1 rounded" placeholder="Completion" type="number" value={newProject.completion} onChange={(e) => setNewProject({ ...newProject, completion: Number(e.target.value) })} />
        </div>
        <button
          onClick={editIdx !== null ? saveProject : addProject}
          className="mt-2 bg-blue-600 cursor-pointer text-white px-3 py-1 rounded"
        >
          {editIdx !== null ? 'Save Changes' : 'Add Project'}
        </button>
      </section>
    </div>
  );
}