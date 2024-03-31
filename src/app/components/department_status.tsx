import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import Select from "react-select";

const department_status = ({id, status} : {id:Number , status:any}) => {
  const [value, setValue] = useState({
    statusDep: '',
  })

  let options = [
    { label: "ACTIVE", value: 'ACTIVE' },
    { label: "INACTIVE", value: 'INACTIVE' }
  ];

  async function ud(id:any) {
    axios.post('http://localhost:8081/upd/'+id, status)
    .then(res => {console.log('working!')})
    .catch(err => console.log(err));
  }

  const upd = async() => {
      axios.post('http://localhost:8081/upd/'+id, status)
      .then(res => {console.log('working?');})
      .catch(err => console.log(err));
      
  }

  return (
    // <select 
    //   onChange={(e) => {console.log(e.target.value); value.statusDep = e.target.value; upd; console.log(value.statusDep);}}
    //   defaultValue={status}
    // >
    //   {
    //     options.map((options,i) => (


    //       <option value={options.value} key={i}>
    //         {options.label}
    //       </option>
    //   ))}
    // </select> 


    <Select 
      options={options}
      defaultValue={{ label: status, value: status}}
      onChange={(e) => { console.log('kni?'); value.statusDep = e.value;  upd; console.log(value.statusDep);}}
    >
    </Select>
  )
}

export default department_status