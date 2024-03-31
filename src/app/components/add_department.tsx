import React from 'react'
import { Link } from 'react-router-dom'

const add_department = () => {
  return (
        <Link className='px-8 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/Create_Department'>Create Department</Link>

  )
}

export default add_department