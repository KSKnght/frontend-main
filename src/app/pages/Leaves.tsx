import React from 'react'
import Employee_Overview from '../components/employee_overview'
import Leaves_Button from '../components/leaves'
import Add_Leave from '../components/add_leave'
import Signatories from '../components/signatories'

const Leaves = () => {
  return (
    <div className='flex min-h-screen flex-col p-8 overflow-x-hidden'>
      <div className='flex justify-between'>
          <h1 className='text-5xl font-semibold'>Employment Management System</h1>
          <div className='space-x-3 flex'>
            <Add_Leave />
          </div>
      </div>
      <div className='py-14'>
        <table className='table w-full'>
          <thead className='text-center border-b-4 border-black pl-5'>
            <tr className='text-lg'>
              <th>Emp Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className='flex'>
        <Employee_Overview />
        <Leaves_Button />
        <Signatories />
      </div>
    </div>
  )
}

export default Leaves