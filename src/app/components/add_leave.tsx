import React from 'react'
import { Link } from 'react-router-dom'

const add_leave = () => {
  return (
    <div>
        <Link className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/Create_Leave'>
             Create Leave
        </Link>
    </div>
  )
}

export default add_leave