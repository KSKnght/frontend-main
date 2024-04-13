import React, { useEffect, useState, } from 'react'
import Employee_Overview from '../components/employee_overview'
import Leaves_Button from '../components/leaves'
import Signatories_Button from '../components/signatories'
import Add_Signatory from '../components/add_signatory'
import axios from 'axios'


const Signatories = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://localhost:8081/sign')
    .then(res => {setData(res.data)})
    .catch()
  }, [])

  console.log(data)
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
            {/* <th>First Name</th> */}
            <th>Employee</th>
            <th>Higher Superior</th>
            <th>Superior's Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, i) => {
            return <tr key={i} className='border-b-2 py-24 border-slate-200 text-center'>
              <td className='py-6'>{emp.emp_num}</td>
              {/* <td>{emp.emp.firstname}</td> */}
              <td className='py-6'>{emp.emp.lastname + ", " + emp.emp.firstname}</td>
              <td className='py-6'>{emp.sup.emp.lastname +", "+emp.sup.emp.firstname}</td>
              <td className='py-6'>{emp.status}</td>
            </tr>
          })}
        </tbody>
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