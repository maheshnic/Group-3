import React, { useState } from 'react';

const candidates = [
  { name: 'Amit Das', post: 'Software Engineer', status: 'Shortlisted', email: 'amit@gmail.com' },
  { name: 'Soma Roy', post: 'Data Analyst', status: 'Pending', email: 'soma@yahoo.com' },
  { name: 'Ravi Verma', post: 'Network Admin', status: 'Rejected', email: 'ravi@nic.com' },
  { name: 'Priya Nair', post: 'UI Designer', status: 'Shortlisted', email: 'priya@nita.com' },
  { name: 'Kunal Sen', post: 'Backend Developer', status: 'Shortlisted', email: 'kunal@gmail.com' },
  { name: 'Neha Gupta', post: 'HR Officer', status: 'Pending', email: 'neha@mail.com' },
  { name: 'Vikram Singh', post: 'Frontend Developer', status: 'Shortlisted', email: 'vikram@fastmail.com' },
  { name: 'Anjali Das', post: 'Project Manager', status: 'Rejected', email: 'anjali@nic.com' },
  { name: 'Rahul Mishra', post: 'DevOps Engineer', status: 'Pending', email: 'rahul@gmail.com' },
  { name: 'Shreya Iyer', post: 'QA Tester', status: 'Shortlisted', email: 'shreya@gmail.com' },
  { name: 'Abhinav Reddy', post: 'Software Engineer', status: 'Pending', email: 'abhinav@gmail.com' },
  { name: 'Divya Sharma', post: 'UI Designer', status: 'Shortlisted', email: 'divya@nita.com' },
  { name: 'Manish Pandey', post: 'Data Analyst', status: 'Rejected', email: 'manish@yahoo.com' },
  { name: 'Simran Kaur', post: 'HR Officer', status: 'Shortlisted', email: 'simran@yahoo.com' },
  { name: 'Yash Jain', post: 'Backend Developer', status: 'Pending', email: 'yash@gmail.com' },
  { name: 'Ritika Sinha', post: 'Software Engineer', status: 'Shortlisted', email: 'ritika@fastmail.com' },
  { name: 'Aakash Mehta', post: 'DevOps Engineer', status: 'Rejected', email: 'aakash@express.com' },
  { name: 'Tanya Bose', post: 'Project Manager', status: 'Shortlisted', email: 'tanya@gmail.com' },
  { name: 'Ishaan Malik', post: 'QA Tester', status: 'Pending', email: 'ishaan@yahoo.com' },
  { name: 'Sneha Roy', post: 'Network Admin', status: 'Shortlisted', email: 'sneha@gmail.com' }
];

export default function ListCandidate() {
  const [search, setSearch] = useState('');

  const filtered = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.post.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-5xl mb-10 font-bold text-sky-900 border-b-4 rounded border-sky-900 pb-5 text-center">Candidate List</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search candidates..."
        className="w-full mb-4 p-2 border-2 border-gray-300 hover:border-gray-400 transition rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

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
            {filtered.map((c, i) => (
              <tr key={i} className="border-2 border-gray-300 hover:bg-gray-50">
                <td className="p-3 font-semibold">{c.name}</td>
                <td className="p-3 font-semibold">{c.post}</td>
                <td className={`p-3 font-semibold ${
                  c.status === 'Shortlisted' ? 'text-green-600' :
                  c.status === 'Rejected' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>
                  {c.status}
                </td>
                <td className="p-3 font-semibold">{c.email}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">No matching candidates found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}