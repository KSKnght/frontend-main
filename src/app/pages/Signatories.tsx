import React from 'react'
import Employee_Overview from '../components/employee_overview'
import Leaves_Button from '../components/leaves'
import Signatories_Button from '../components/signatories'
import Add_Signatory from '../components/add_signatory'

const Signatories = () => {
  return (
    <div className='flex min-h-screen flex-col p-8 overflow-x-hidden'>
    <div className='flex justify-between'>
        <h1 className='text-5xl font-semibold'>Employment Management System</h1>
        <div className='space-x-3 flex'>
          <Add_Signatory />
        </div>
    </div>
    <div className='py-14'>
      <table className='table w-full'>
        <thead className='text-center border-b-4 border-black pl-5'>
          <tr className='text-lg'>
            <th>Emp Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Higher Superior</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div>
    <div className='flex'>
      <Employee_Overview />
      <Leaves_Button />
      <Signatories_Button />
    </div>
  </div>
  )
}

export default Signatories