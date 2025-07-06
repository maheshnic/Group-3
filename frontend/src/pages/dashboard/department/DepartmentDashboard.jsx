import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'

export default function DepartmentDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
