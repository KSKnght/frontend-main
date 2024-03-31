import React from 'react'
import { Link } from 'react-router-dom'

const add_signatory = () => {
  return (
    <div>
        <Link className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/Create_Signatory'>
             Create Signatory
        </Link>
    </div>
  )
}

export default add_signatory