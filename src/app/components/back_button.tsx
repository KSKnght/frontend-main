import React from 'react'
import { Link } from 'react-router-dom'

const back_button = () => {
  return (
    <button className='px-10 py-2 border-2 border-slate-500 text-slate-500 rounded-lg transition-all hover:border-slate-800 hover:text-slate-800'>
        <Link to='/'> Go Back </Link>
    </button>
  )
}

export default back_button