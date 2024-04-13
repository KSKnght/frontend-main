import React, { useEffect, useState, } from 'react'
import Cancel_leave from '../components/cancel_leave'
import Submit_button from '../components/submit_button'
import { useNavigate, } from 'react-router-dom'
import axios from 'axios'

const Create_Leave = () => {
    const nav = useNavigate();

    const [data, setData] = useState({
        emp_num: '',
        start_leave: '',
        end_leave: '',
        leaveType: '',
        status: 'PENDING'
    })
    
    const [emp, setEmp] = useState<any[]>([])

    useEffect(() => {
        axios.get('http://localhost:8081/list')
        .then(res => {setEmp(res.data)})
        .catch()
    },[])

    const addLeave = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addLeave', data)
        .then()
        .catch();

        nav('/Leaves');
        location.reload();
    }

  return (
    <div className='p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Create Leave</h1>
        </div>
        <form className='w-full mb-6 pt-10' onSubmit={addLeave}>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Employee Number</label>
                    <select 
                        onChange={e => {data.emp_num = String(e.target.value.split(',').at(0)); /* name(e.target.value.split(',').at(2) + ", "+ e.target.value.split(',').at(1));*/}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                        <option value="Select" selected disabled={true}>Select Type</option>
                        {emp.map((emp, i) => {
                            return <option value={[emp.emp_num, emp.firstname, emp.firstname]}>{emp.emp_num + ": " + emp.lastname + ", " + emp.firstname}</option>
                        })}
                    </select>
                    {/* <input className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' /> */}
                </div>
                {/* <div className='flex flex-col flex-grow'>
                    <label className='block mb-3 text-gray-600'>Name</label>
                    <label id='name' className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider'>
                        Name
                    </label>
                </div> */}
                {/* <div>
                    <label className='block mb-3 text-gray-600'>Last Name</label>
                    <label className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider'>
                        Last Name
                    </label>
                </div> */}
            </div>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Leave Type</label>
                    <select 
                        onChange={e => {data.leaveType = e.target.value}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                        <option value="Select" selected disabled={true}>Select Type</option>
                        <option value="VACATION">VACATION</option>
                        <option value="SICK">SICK</option>
                        <option value="MATERNITY">MATERNITY</option>
                        <option value="PATERNITY">PATERNITY</option>
                    </select>
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>Start Date</label>
                    <input type='date'
                    onChange={e => {data.start_leave = e.target.value + "T00:00:00.000Z"}}
                    className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>End Date</label>
                    <input type='date' 
                    onChange={e => {data.end_leave = e.target.value + "T00:00:00.000Z"; console.log(data)}}
                    className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                </div>
            </div>
            <div className='text-right pt-4 space-x-4 '>
                <Cancel_leave />
                <Submit_button />
            </div>
        </form>
    </div>
  )
}

export default Create_Leave