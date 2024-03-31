import React, { useEffect, useState } from 'react'
import Department_status from '../components/department_status'
import Back_button from '../components/back_button'
import Add_department from '../components/add_department'
import axios from 'axios'
import Select from 'react-select'
//import { statusDep } from '@prisma/client'

const Departments = () => {
    const [dep ,setDep] = useState<any[]>([])

    const [status, setStatus] = useState({
        statusDep: '',
    })

    // const [status, setStatus] = useState<any[]>([])

    let options = [
        { label: "ACTIVE", value: 'ACTIVE' },
        { label: "INACTIVE", value: 'INACTIVE' }
      ];

    useEffect(()=> {
        axios.get('http://localhost:8081/deps')
        .then(res => {setDep(res.data)})
        .catch(err => console.log(err))
    }, [])

    async function ud(id:any) {
        axios.post('http://localhost:8081/upd/'+id, status)
        .then(res => {console.log('working!')})
        .catch(err => console.log(err));
    }

    const upd = async(id:any) => {
        axios.post('http://localhost:8081/upd/'+id, status)
        .then(res => {console.log('working?');})
        .catch(err => console.log(err));
        
    }

  return (
    <div className='flex min-h-screen flex-col py-8 px-24'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Departments</h1>
            <div className='space-x-3'>
                <Add_department />
                <Back_button />
            </div>
        </div>
        <div className='py-14'>
            <table className='table-auto w-full'>
                <thead className='text-left border-b-4 border-black'>
                    <tr className='text-lg'>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dep.map((depart, i) => {
                        return <tr key={i} className='border-b-2 border-slate-200'>
                        <td className='py-6'>{depart.dept_name}</td>
                        <td className='py-6'>
                            {/* <Department_status id={depart.id} status={depart.status}/> */}
                            <Select 
                            options={options}
                            defaultValue={{ label: depart.status, value: depart.status}}
                            onChange={(e) => {console.log('kni?'); status.statusDep = e?.value;  setStatus({ statusDep: e?.value }); console.log(status.statusDep); upd(depart.id);}}>
                            </Select>
                        </td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Departments