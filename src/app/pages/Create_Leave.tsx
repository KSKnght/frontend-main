import React from 'react'
import Cancel_leave from '../components/cancel_leave'
import Submit_button from '../components/submit_button'

const Create_Leave = () => {
  return (
    <div className='p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Create Leave</h1>
        </div>
        <div className='w-full mb-6 pt-10'>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Employee Number</label>
                    <input type='number' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>First Name</label>
                    <label type='number' className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider'>
                        First Name
                    </label>
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>Last Name</label>
                    <label className='border border-gray-500 bg-gray-200 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider'>
                        Last Name
                    </label>
                </div>
            </div>
            <div className='py-4 flex justify-between space-x-4'>
                <div>
                    <label className='block mb-3 text-gray-600'>Leave Type</label>
                    <select 
                        defaultValue={'Select'}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                        <option value="Select" disabled={true}>Select Department</option>
                    </select>
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>Start Date</label>
                    <input type='date' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                </div>
                <div>
                    <label className='block mb-3 text-gray-600'>End Date</label>
                    <input type='date' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                </div>
            </div>
        </div>
        <div className='text-right pt-4 space-x-4 '>
            <Cancel_leave />
            <Submit_button />
        </div>
    </div>
  )
}

export default Create_Leave