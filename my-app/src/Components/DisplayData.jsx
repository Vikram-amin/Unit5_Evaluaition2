import React from 'react'

function DisplayData({ name, department, gender, role, salary }) {
  return (
    <div style={{border:"2px solid black", width:"250px", margin:"20px" ,marginLeft:"40%"}}>
      <h2>Name : {name}</h2>
      <h2>Gender : {gender}</h2>
      <h2>Role : {role}</h2>
      <h2>Department : {department}</h2>
      <h2>Salary : {salary}</h2>
    </div>
  );
}

export default DisplayData