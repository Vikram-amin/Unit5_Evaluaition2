import React from 'react'
import ButtonCard from './ButtonCard';
import DisplayData from './DisplayData';
import EmployesInput from './EmployesInput'

function EmployesDashboard() {
    const[data,setData] = React.useState([]);

    React.useEffect(() => {
         getEmployesData()
    },[])

    const getEmployesData = () => {
        fetch(`http://localhost:3004/EmployeeData`)
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => console.log(err));
    }
   

    const handleChange = () =>{
    //    let Salary = data.map((el) => console.log(el.salary));
          fetch(
            `http://localhost:3004/EmployeeData?_sort=&_order=asc`
          )
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));

    }

    const handleAdd = (query) =>{
     const {name ,department , gender, role, salary} = query;
    // console.log(name, department, gender, role, salary);
    const payLoad = {
      name,
      department,
      gender,
      role,
      salary,
    };
   // console.log(payLoad)
    const payLoadJson = JSON.stringify(payLoad);

      fetch(`http://localhost:3004/EmployeeData`, {
        method: "POST",
        body: payLoadJson,
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => {
        getEmployesData();
      });
    }
  return (
    <div>
      <EmployesInput handleAddProps={handleAdd} />
      <hr />
      <ButtonCard
        lable="Sort By Salary Ascending"
        handleClick={() => handleChange()}
      />
      <ButtonCard
        lable="Sort By Salary Descending"
        handleClick={() => handleChange()}
      />
      <hr />

      {data.map((item, id) => (
        <DisplayData key={id} {...item} />
      ))}
    </div>
  );
}

export default EmployesDashboard