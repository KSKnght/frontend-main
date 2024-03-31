import React from 'react'
import { Link } from 'react-router-dom'

const cancel_leave = () => {
  return (
    <button>
        <Link className='px-8 py-2 border-2 border-slate-500 text-slate-500 rounded-lg transition-all hover:border-slate-800 hover:text-slate-800' to='/Leaves'> Cancel </Link>
    </button>
  )
}

export default cancel_leave