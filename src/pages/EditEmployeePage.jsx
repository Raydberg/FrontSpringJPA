import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../service/employee.service";

export const EditEmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    age: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, employee);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={employee.name}
        onChange={handleChange}
        type="text"
        placeholder="Name"
      />
      <input
        name="lastName"
        value={employee.lastName}
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
      />
      <input
        name="age"
        value={employee.age}
        onChange={handleChange}
        type="number"
        placeholder="Age"
      />
      <button type="submit" className="btn btn-outline-success">
        Save
      </button>
    </form>
  );
};