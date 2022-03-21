import React from 'react'
import EmployesInput from './EmployesInput'

function EmployesDashboard() {

    const handleAdd = (query) =>{
     const {name ,department , gender, role, salary} = query;
     console.log(name, department, gender, role, salary);
    }
  return (
    <div>
      <EmployesInput handleAddProps={handleAdd} />
    </div>
  );
}

export default EmployesDashboard