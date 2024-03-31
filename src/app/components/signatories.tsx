import React from 'react'
import { Link } from 'react-router-dom'

const signatories = () => {
  return (
    <div className='pr-10'>
    <Link className='px-12 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' to='/Signatories'>
        Signatories
    </Link>
</div>
  )
}

export default signatories