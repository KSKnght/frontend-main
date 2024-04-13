import React, { useEffect, useState, } from 'react'
import Cancel_button from '../components/cancel_button'
import Submit_button from '../components/submit_button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'

const Update = () => {
    const nav = useNavigate();

    const [deps, setDeps] = useState<any[]>([])

    const {id} = useParams();

    const [des, setDes] = useState<any[]>([])
    let r = [];

    const stat = [
        { label: 'ACTIVE', value: 'ACTIVE' },
        { label: 'RESIGNED', value: 'RESIGNED' },
        { label: 'AWOL', value: 'AWOL' }
    ]
        

    const [data, setData] = useState({
        num: '',
        emp_num: '',
        firstname: '',
        midname: '',
        lastname: '',
        addressline: '',
        brgy: '',
        province: '',
        country: '',
        zipcode: 0,
        designationName: '',
        designationDepartment: '',
        emp_type: '',
        status: ''
    })

    for (let i = 0; i < des.length; i++) {
        for (let y = 0; y < des[i].designation.length; y++) {
            let v = {des: '', dep: ''}
            v.dep = des[i].dept_name
            v.des = des[i].designation[y].designation_name
            console.log(v)
            r.push(v)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8081/emp/'+id)
        .then(res => {
            setData({...data,
                num: res.data.emp_num,
                emp_num: res.data.emp_num,
                firstname: res.data.firstname,
                midname: res.data.midname,
                lastname: res.data.lastname,
                addressline: res.data.addressline,
                brgy: res.data.brgy,
                province: res.data.province,
                country: res.data.country,
                zipcode: res.data.zipcode,
                designationName: res.data.ass_des[0].designationName,
                designationDepartment: res.data.ass_des[0].DepartmentName,
                emp_type: res.data.ass_des[0].emp_type,
                status: res.data.ass_des[0].status
            });
            console.log(data.designationDepartment);
        })
        .catch(err => {console.log(err)})

        axios.get('http://localhost:8081/deps')
        .then(res => {setDeps(res.data)})
        .catch(err => console.log(err))

        axios.get('http://localhost:8081/desPerDep/')
        .then(res => {setDes(res.data)})
        .catch()
    }, [])
    
    const upemp = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:8081/updEmp/'+id , data)
        .then()
        .catch();

        nav('/');
        location.reload();
    }

  return (
    <div className='flex min-h-screen flex-col p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Update Employee</h1>
        </div>
        <form onSubmit={upemp}>
            <div className='w-full mb-6 pt-10'>
                <div className='py-4 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>First Name</label>
                        <input type='text' value={data.firstname}  placeholder='first name'
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                        onChange={e => {setData({...data, firstname: e.target.value})}} />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Middle Name</label>
                        <input type='text' value={data.midname}
                        onChange={e => {setData({...data, midname: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Last Name</label>
                        <input type='text' value={data.lastname}
                        onChange={e => {setData({...data, lastname: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Current Address Line</label>
                        <input type='text' value={data.addressline}
                        onChange={e => {setData({...data, addressline: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Barangay</label>
                        <input type='text' value={data.brgy}
                        onChange={e => {setData({...data, brgy: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Province</label>
                        <input type='text' value={data.province}
                        onChange={e => {setData({...data, province: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Country</label>
                        <input type='text' value={data.country}
                        onChange={e => {setData({...data, country: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>ZIP Code</label>
                        <input type='number' value={data.zipcode}
                        onChange={e => {setData({...data, zipcode: Number(e.target.value)})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4'>
                    <div>
                        <label className='block mb-3 text-gray-600'>Employee Number</label>
                        <input type='text' value={data.emp_num}
                        onChange={e => {setData({...data, emp_num: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div>
                        <label className='block mb-3 text-gray-600'>Status</label>
                        <select
                            id="in"
                            defaultValue={data.status}
                            onChange={e => {data.status = e.target.value; console.log(data.status);}}
                            className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                        >
                            {stat.map((dep, i) => {
                                if (dep.value == data.status ){
                                    return <option value={dep.value} selected key={i}>{dep.label}</option>
                                } else {
                                    return <option value={dep.value} key={i}>{dep.label}</option>
                                }
                            })}
                        </select>
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4'>
                    {/* <div>
                        <label className='block mb-3 text-gray-600'>Designation</label>
                        <input type='text' value={data.designationName}
                        onChange={e => {setData({...data, designationName: e.target.value})}}
                        className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div> */}
                    <div>
                        <label className='block mb-3 text-gray-600'>Department</label>
                        <select
                            id="in"
                            onChange={e => { data.designationDepartment = String(e.target.value.split(',').at(0));  data.designationName = String(e.target.value.split(',').at(1)); console.log(e.target.value[1]);}}
                            className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                        >
                            {/* {deps.map((dep, i) => {
                                if (dep.dept_name == data.designationDepartment){
                                    return <option value={[dep.dept_name, dep.id]} selected key={i}>{dep.dept_name}</option>
                                } else {
                                    return <option value={[dep.dept_name, dep.id]} key={i}>{dep.dept_name}</option>
                                }
                            })} */}


                            {r.map((e, i) => {
                                if (e.dep == data.designationDepartment && e.des == data.designationName)
                                return <option value={e.dep +','+e.des} selected key={i}>{e.dep +" "+ e.des}</option>
                                else
                                return <option value={e.dep +','+e.des} key={i}>{e.dep +" "+ e.des}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        <div className='text-right pt-4 space-x-4'>
            <Cancel_button />
            <button className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' onClick={() => {console.log(data.firstname + " " + data.midname)}}>
                Create
            </button>
        </div>
        </form>
    </div>
  )
}

export default Update