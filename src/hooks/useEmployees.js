import { useEffect, useState } from "react";
import { deleteEmployee, fetchEmployees } from "../service/employee.service";

export const useEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    getEmployees();
  }, []);

  const handleDelete  = async (id)=>{
     await deleteEmployee(id);
     setEmployees((prevEmployee)=>prevEmployee.filter((employees)=>employees.id !== id))
  }

  return { employees,handleDelete };
};
