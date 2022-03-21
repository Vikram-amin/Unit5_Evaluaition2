import React from 'react'

function EmployesInput({ handleAddProps }) {
  const intialstate = {
    name: "",
    department: "",
    gender: "",
    role: "",
    salary: "",
  };
  const [query, setQuery] = React.useState(intialstate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setQuery({ ...query, [name]: value });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={query.name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        name="department"
        placeholder="department"
        value={query.department}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        name="gender"
        placeholder="gender"
        value={query.gender}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        name="role"
        placeholder="role"
        value={query.role}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        name="salary"
        placeholder="salary"
        value={query.salary}
        onChange={(e) => handleChange(e)}
      />
      <br />
      
      <button
        onClick={() => handleAddProps(query) }
      >
        Add Empoyee
      </button>
    </div>
  );
}

export default EmployesInput