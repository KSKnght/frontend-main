import React from 'react'
import { Link } from 'react-router-dom'

const employee_overview = () => {
  return (
    <div className='pr-10'>
        <Link className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/'>
            Employee List
        </Link>
    </div>
  )
}

export default employee_overview