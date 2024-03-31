import React, { useEffect, useState, } from 'react'
import Cancel_button from '../components/cancel_button'
import Submit_button from '../components/submit_button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const nav = useNavigate();

    const [deps, setDeps] = useState<any[]>([])

    const [init, setInit] = useState({
        id: 0,
        dept_name: '',
        status: '',
    })

    const [data, setData] = useState({
        num: '',
        emp_num: '',
        firstname: '',
        midname: '',
        lastname: '',
        addressline: '',
        brgy: '',
        province: '',
        country: '',
        zipcode: 0,
        designationName: '',
        designationDepartment: '',
        emp_type: '',
        status: ''
    })

    useEffect(() => {

        axios.get('http://localhost:8081/deps')
        .then(res => {setDeps(res.data); setInit(res.data[0])})
        .catch(err => console.log(err))
    }, [])

    const upemp = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:8081/createEmp', data)
        .then()
        .catch();

        nav('/')
    }

  return (
    <div className='flex min-h-screen flex-col p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Create Employee</h1>
        </div>
        <form onSubmit={upemp}>
            <div className='w-full mb-6 pt-10'>
                <div className='py-4 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>First Name</label>
                        <input type='text' 
                        onChange={e => {setData({...data, firstname: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Middle Name</label>
                        <input type='text' 
                        onChange={e => {setData({...data, midname: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Last Name</label>
                        <input type='text' 
                        onChange={e => {setData({...data, lastname: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Current Address Line</label>
                        <input type='text' 
                        onChange={e => {setData({...data, addressline: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Barangay</label>
                        <input type='text' 
                        onChange={e => {setData({...data, brgy: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Province</label>
                        <input type='text' 
                        onChange={e => {setData({...data, province: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Country</label>
                        <input type='text' 
                        onChange={e => {setData({...data, country: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>ZIP Code</label>
                        <input type='number' 
                        onChange={e => {setData({...data, zipcode: Number(e.target.value)})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Employee Number</label>
                        <input type='text' 
                        onChange={e => {setData({...data, emp_num: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Designation</label>
                        <input type='text' 
                        onChange={e => {setData({...data, designationName: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Department</label>
                        <select
                        id="in"
                        defaultValue={'Select'}
                        onChange={e => {data.designationDepartment = e.target.value; console.log(data.designationDepartment);}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                    >   <option value="Select" disabled={true}>Select Department</option>
                        {deps.map((dep, i) => {
                                return <option value={dep.dept_name} key={i}>{dep.dept_name}</option>
                        })}
                    </select>
                    </div>
                </div>
            </div>
            <div className='text-right pt-4 space-x-10 flex'>
                <Cancel_button />
                <Submit_button />
            </div>
        </form>
    </div>
  )
}

export default Create