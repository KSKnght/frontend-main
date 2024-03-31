import React, { useEffect, useState } from 'react'
import Back_button from '../components/back_button'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const [data, setData] = useState({
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
    
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        axios.get('http://localhost:8081/emp/'+id)
        .then(res => {
            setData({...data,
                emp_num: res.data.emp_num,
                firstname: res.data.firstname,
                midname: res.data.midname,
                lastname: res.data.lastname,
                addressline: res.data.addressline,
                brgy: res.data.brgy,
                province: res.data.province,
                country: res.data.country,
                zipcode: res.data.zipcode,
                designationName: res.data.ass_des[0].designationName,
                designationDepartment: res.data.ass_des[0].DepartmentName,
                emp_type: res.data.ass_des[0].emp_type,
                status: res.data.ass_des[0].status
            });
            console.log(data.designationDepartment);
        })
        .catch(err => {console.log(err)})
    }, [])

    return (
    <div className='flex min-h-screen flex-col p-8'>
        <div className='flex justify-between'>
            <h1 className='text-5xl text-wrap font-semibold'>{data.firstname + " " + data.midname + " " + data.lastname}</h1>
            <Back_button />
        </div>
        <div>
            <div className='w-full mb-6 pt-10'>
                <div className='py-4 flex justify-between space-x-4 text-sm text-nowrap'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Employee Number</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            {data.emp_num}
                        </label>
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Designation</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            {data.designationName}
                        </label>
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Status</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                           {data.status}
                        </label>
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4 text-sm text-nowrap'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Department</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            {data.designationDepartment}
                        </label>
                    </div>
                </div>
                <div className='pt-8'>
                    <div className='py-4 space-x-4 text-sm'>
                        <div>
                            <label className='block mb-3 text-gray-600'>Current Address Line</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                {data.addressline}
                            </label>
                        </div>
                    </div>
                    <div className='py-4 flex justify-between space-x-4'>
                        <div>
                            <label className='block mb-3 text-gray-600'>Barangay</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                {data.brgy}
                            </label>
                        </div>
                        <div>
                            <label className='block mb-3 text-gray-600'>Province</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                {data.province}
                            </label>
                        </div>
                        <div>
                            <label className='block mb-3 text-gray-600'>Country</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                {data.country}
                            </label>
                        </div>
                        <div>
                            <label className='block mb-3 text-gray-600'>ZIP Code</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                {data.zipcode}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View