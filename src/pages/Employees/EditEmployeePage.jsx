import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployee,
} from "../../service/employee.service";
import { FormItem } from "../../components/UI/FormItem";
import { BackTo } from "../../components/UI/Button/BackTo";

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
      <FormItem
        title="Name"
        value={employee.name}
        onChange={handleChange}
        name="name"
      />
      <FormItem
        title="Last Name"
        value={employee.lastName}
        onChange={handleChange}
        name="lastName"
      />
      <FormItem
        title="Age"
        value={employee.age}
        onChange={handleChange}
        name="age"
      />

      <button type="submit" className="btn btn-outline-success">
        Save
      </button>
      <BackTo to="/" />
    </form>
  );
};
