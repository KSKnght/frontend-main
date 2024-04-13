import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const actions = ({ id } : { id : Number}) => {
  const [ed, setED] = useState({
    id: id,
  })

  const Navigate = useNavigate();

  async function delEmp() {
    await axios.post(`http://localhost:8081/delEmp`, { id: id, })
    .then(res => {
      })
    .catch(err => console.log(err));
    
      location.reload();
  }

  const deleteee = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios.post(`http://localhost:8081/delEmp/${id}`)
    .then(res => {
      location.reload();})
    .catch(err => console.log(err));
  }

  return (
    <div className='space-x-2 py-4 justify-center content-center justify-items-center snap-center'>
        <Link className='px-2 py-2 bg-sky-500 text-white rounded-lg transition-all text-sm hover:bg-sky-800' to={'/View/' + id}>View</Link>
        <Link className='px-2 py-2 bg-sky-500 text-white rounded-lg transition-all text-sm hover:bg-sky-800' to={'/Update/' + id}>Update</Link>
        <button type='button' onClick={() => {delEmp(); Navigate('/', { replace: true }); window.location.reload();}} className='px-2 py-2 bg-red-500 text-white rounded-lg transition-all text-sm hover:bg-red-800'>
          Delete
        </button>
    </div>
  )
}

export default actions