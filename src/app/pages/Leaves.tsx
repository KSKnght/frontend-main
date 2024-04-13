import React, { useEffect, useState, } from 'react'
import Employee_Overview from '../components/employee_overview'
import Leaves_Button from '../components/leaves'
import Add_Leave from '../components/add_leave'
import Signatories from '../components/signatories'
import axios from 'axios'
import Select from 'react-select'


const Leaves = () => {
  const [data, setData] = useState<any[]>([])

  const [status, setStatus] = useState({
    status: ''
  })

  useEffect(() => {
    axios.get('http://localhost:8081/leaves')
    .then(res => {setData(res.data)})
    .catch()
  }, [])

  const setDate = (date:Date) => {
    return new Date(date).toLocaleDateString()
  }

  let options = [
    { label: "DENIED", value: 'DENIED' },
    { label: "APPROVED", value: 'APPROVED' },
    { label: "PENDING", value: 'PENDING' }
  ];

  const upd = async(id:any) => {
    axios.post('http://localhost:8081/statusLeave/'+id, status)
    .then(res => {console.log('working?');})
    .catch(err => console.log(err));
    
}
  
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
          <tbody>
            {data.map((leave, i) => {
            return <tr key={i} className='border-b-2 py-24 border-slate-200 text-center'>
              <td className='py-6'>{leave.emp_num}</td>
              <td className='py-6'>{leave.emp.firstname}</td>
              <td className='py-6'>{leave.emp.lastname}</td>
              <td className='py-6'>{leave.leaveType}</td>
              <td className='py-6'>{setDate(leave.start_leave)}</td>
              <td className='py-6'>{setDate(leave.end_leave)}</td>
              <td className='py-6'>
                <Select 
                options={options}
                defaultValue={{ label: leave.status, value: leave.status}}
                onChange={(e) => {console.log('kni?'); status.status = e?.value;  setStatus({ status: e?.value }); console.log(status.status); upd(leave.id);}}>
                </Select>
              </td>
            </tr>
            })}
          </tbody>
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