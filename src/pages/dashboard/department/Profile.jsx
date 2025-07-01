import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DepartmentProfile = () => {
  const deptData = {
    name: 'Information Technology',
    strength: 45,
    assets: 300,
    projects: 12,
    capital: 12000000,
    hod: 'Supratik Datta',
    established: 2012,
    location: 'Agartala, Tripura',
    email: 'dit-tripura@gov.in',
    phone: '+91-381-2345678'
  };

  const overviewData = [
    { label: 'Strength', value: deptData.strength },
    { label: 'Assets', value: deptData.assets },
    { label: 'Projects', value: deptData.projects },
    { label: 'Capital (M)', value: deptData.capital / 1_000_000 }
  ];

  const [projects] = useState([
    { name: 'Digital Connect', status: 'In Progress', completion: 70, start: '2024-01-15', end: '2025-01-15', details: 'Connecting rural villages.' },
    { name: 'AI Governance', status: 'Ongoing', completion: 50, start: '2024-03-01', end: '2025-03-01', details: 'AI-based service optimization.' }
  ]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const completed = [
    { name: 'Grievance Portal', start: '2023-01-01', end: '2023-06-30' },
    { name: 'Data Center Setup', start: '2022-05-01', end: '2023-02-28' }
  ];

  return (
    <div className="bg-gray-100 p-3 -mt-5 rounded-xl font-sans text-sm space-y-3">

      <div className="grid md:grid-cols-2 gap-3">
        <section className="bg-white shadow border-2 border-blue-400 rounded-lg p-3">
          <h2 className="text-2xl font-semibold mb-2">Department Info</h2>
          <ul className="space-y-1 text-lg text-gray-700">
            <li><b>Name:</b> {deptData.name}</li>
            <li><b>HOD:</b> {deptData.hod}</li>
            <li><b>Established:</b> {deptData.established}</li>
            <li><b>Location:</b> {deptData.location}</li>
            <li><b>Email:</b> {deptData.email}</li>
            <li><b>Phone:</b> {deptData.phone}</li>
          </ul>
        </section>

        <section className="bg-white shadow border-2 border-blue-400 rounded p-3">
          <h2 className="text-2xl font-semibold mb-2">Department Overview</h2>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={overviewData}>
              <XAxis dataKey="label" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-sm mt-1 text-gray-600 space-y-0.5">
            {overviewData.map((d, i) => (
              <div key={i}><b>{d.label}:</b> {d.value}</div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-white shadow border-2 border-blue-400 rounded p-3">
        <h2 className="text-xl font-semibold mb-2">Current Projects</h2>
        <div className="space-y-2">
          {projects.map((p, i) => (
            <div key={i} className="border-2 border-gray-400 p-2 rounded shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-md">{p.name}</div>
                  <div className="text-sm text-gray-600">Status: {p.status}, {p.completion}%</div>
                  <div className="text-[13px] text-gray-500">Start: {p.start} | End: {p.end}</div>
                </div>
                <div className="w-10 h-10">
                  <CircularProgressbar
                    value={p.completion}
                    text={`${p.completion}%`}
                    styles={buildStyles({ pathColor: '#2563eb', textSize: '26px' })}
                  />
                </div>
              </div>
              <button
                className="text-blue-600 text-xs cursor-pointer hover:text-blue-800 underline mt-1"
                onClick={() => setExpandedIndex(i === expandedIndex ? null : i)}
              >
                {expandedIndex === i ? 'Hide Details' : 'Show Details'}
              </button>
              {expandedIndex === i && <div className="mt-1 text-xs text-gray-700">{p.details}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white shadow border-2 border-blue-400 rounded p-3">
        <h2 className="text-xl font-semibold mb-2">Completed Projects</h2>
        <ul className="space-y-1 text-xs">
          {completed.map((proj, i) => (
            <li key={i} className="border-2 border-gray-400 p-2 rounded bg-green-50">
              <div className="font-medium text-sm text-green-700">{proj.name}</div>
              <div className="text-[14px] text-gray-600">Start: {proj.start} | End: {proj.end}</div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default DepartmentProfile;