import React, { useEffect, useState } from 'react'
import Add_button from '../components/add_button'
import Actions from '../components/actions'
import Edit_departments from '../components/edit_departments'
import Employee_Overview from '../components/employee_overview'
import Leaves from '../components/leaves'
import axios from 'axios'
import Signatories from '../components/signatories'

const Table = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(()=> {
    axios.get('http://localhost:8081/list')
    .then(res => {setData(res.data); console.log(res.data)})
    .catch();
  }, [])

  return (
    <div className='flex min-h-screen flex-col p-8 overflow-x-hidden'>
        <div className='flex justify-between'>
        <h1 className='text-5xl font-semibold'>Employment Management System</h1>
        <div className='space-x-3'>
          <Edit_departments />
          <Add_button />
        </div>
      </div>
      <div className='py-14'>
        <table className='table w-full'>
          <thead className='text-center border-b-4 border-black pl-5'>
            <tr className='text-lg'>
              <th>Emp Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp, i) => {
              return <tr key={i} className='border-b-2 border-slate-200 text-center'>
              <td>{emp.emp_num}</td>
              <td>{emp.firstname}</td>
              <td>{emp.lastname}</td>
              <td>{(emp.ass_des[0] == null) ? 'Not Assigned' : emp.ass_des[0].designationName}</td>
              <td>{(emp.ass_des[0] == null) ? 'Not Assigned' : emp.ass_des[0].DepartmentName}</td>
              <td>{(emp.ass_des[0] == null) ? 'Not Assigned' : emp.ass_des[0].status}</td>
              <td><Actions id={emp.id} /></td>
            </tr>
            })} 
          </tbody>
        </table>
      </div>
      <div className='flex'>
        <Employee_Overview />
        <Leaves />
        <Signatories />
      </div>
    </div>
  )
}

export default Table