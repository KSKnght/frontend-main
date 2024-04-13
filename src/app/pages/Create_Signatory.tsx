import React, { useEffect, useState, } from 'react'
import Cancel_signatory from '../components/cancel_signatory'
import Submit_button from '../components/submit_button'
import { useNavigate, } from 'react-router-dom'
import axios from 'axios'


const Create_Signatory = () => {
    const nav = useNavigate();
    const [data, setData] = useState({
        emp_num: '',
        signtory: '',
    })

    const [emp, setEmp] = useState<any[]>([])

    useEffect(() => {
        axios.get('http://localhost:8081/list')
        .then(res => {setEmp(res.data)})
        .catch()
    }, [])

    const [selectedOption, setSelectedOption] = useState({
        option: ''
    });
    // const handleChange = (val) => {
    //     setSelectedOption(val)
    //   };

    const addSign = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addSignatory', data)
        .then()
        .catch();

        nav('/Signatories');
        location.reload();
    }

    console.log(emp)

  return (
    <div className='p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Create Signatory</h1>
        </div>
        <form className='w-full mb-6 pt-10' onSubmit={addSign}>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Employee Number</label>
                    <select
                    id='em' 
                    className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                    onChange={e => {data.emp_num = e.target.value}}
                    defaultValue={'Select'}
                    >
                    <option value="Select" disabled={true}>Select Employee</option>
                    {emp.map((e, i) => {
                        return <option value={e.emp_num} key={i}>{e.lastname + ", " + e.firstname}</option>
                    })}
                    </select>
                    {/* <input className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' /> */}
                </div>
                {/* <div>
                    <label className='block mb-3 text-gray-600'>First Name</label>
                    <label id='firstname' className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider'>
                        First Name
                    </label>
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>Last Name</label>
                    <label id='lastname' className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider'>
                        Last Name
                    </label>
                </div> */}
            </div>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Higher Superior</label>
                    <select 
                    className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                    onChange={e => {data.signtory = e.target.value; console.log(data)}}
                    defaultValue={'Select'}
                    >
                    <option value="Select" disabled={true}>Select Superior</option>
                    {emp.map((e, i) => {
                        return <option value={e.emp_num} key={i}>{e.lastname + ", " + e.firstname}</option>
                    })}
                    </select>
                    
                    {/* <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' /> */}
                </div>
            </div>
            <div className='text-right pt-4 space-x-4'>
                <Cancel_signatory />
                <Submit_button />
            </div>
        </form>
    </div>
  )
}

export default Create_Signatory

