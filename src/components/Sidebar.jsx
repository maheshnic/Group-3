import React from "react";
import { NavLink } from "react-router-dom";

const items = [
    { to: 'profile', label: 'Profile' },
    { to: 'jobs', label: 'Jobs' },
    { to: 'settings', label: 'Settings' },
]

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-700 -mt-6 -mb-18 -ml-6 p-4">
            <h1 className="text-4xl text-white bg-slate-800 rounded-md font-semibold border-b-2 border-gray-600 pb-3 mb-4 text-center">Department</h1>
            <ul className="space-y-1 font-semibold mt-6 transition ease-in-out">
                {items.map(({ to, label }) => (
                    <li key={to} className="">
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                            'block p-2 rounded text-xl border-1 border-slate-700 bg-gray-400 ' + (isActive ? 'bg-sky-800 hover:bg-sky-700 text-white shadow' : 'hover:bg-gray-600 text-gray-100 hover:text-gray-300')
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}