import React from 'react'
import styleDashboard from './AdminDashboard.module.css'

export default function AdminDashboard() {
  return (
    <>
      <div className={styleDashboard.dashboardLayout}>
        <div className={styleDashboard.dashboardPage}>
          <div className={styleDashboard.number}>
            <h1>number of trees</h1>
            <h4>15</h4>
          </div>
          <div className={styleDashboard.number}>
            <h1>number of users</h1>
            <h4>30</h4>
          </div>
          <div className={styleDashboard.number}>
            <h1>number of needed trees</h1>
            <h4>15</h4>
          </div>
          <div className={styleDashboard.number}>
            <h1>number of orders</h1>
            <h4>15</h4>
          </div>
        </div>
      </div>
    </>
  )
}
