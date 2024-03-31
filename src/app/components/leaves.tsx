import React from 'react'
import { Link } from 'react-router-dom'

const leaves = () => {
  return (
    <div className='pr-10'>
        <Link className='px-16 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/Leaves'>
            Leaves
        </Link>
    </div>
  )
}

export default leaves