import React from 'react'
import { Link } from 'react-router-dom'

const department_back = () => {
  return (
    <button className='px-10 py-2 border-2 border-slate-500 text-black rounded-lg'>
        <Link to='/Departments'> Go Back </Link>
    </button>
  )
}

export default department_back