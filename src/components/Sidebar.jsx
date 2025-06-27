import React from "react";
import { NavLink } from "react-router-dom";

const items = [
    { to: 'profile', label: 'Profile' },
    { to: 'jobs', label: 'Jobs' },
    { to: 'settings', label: 'Settings' },
]

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-200 -mt-5 -mb-18 -ml-6 p-4">
            <h1 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-center">Department</h1>
            <ul className="space-y-2 font-semibold">
                {items.map(({ to, label }) => (
                    <li key={to} className="">
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                            'block p-2 rounded ' + (isActive ? 'bg-gray-400' : 'hover:bg-gray-300')
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