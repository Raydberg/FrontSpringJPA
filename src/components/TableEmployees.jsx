import { useEmployees } from "../hooks/useEmployees";
import { ButtonEdit } from "./UI/Button/ButtonEdit";
import { ButtonDelete } from "./UI/Button/ButtonDelete";
import { useNavigate } from "react-router-dom";
export const TableEmployees = () => {
  const { employees,handleDelete } = useEmployees();
  const navigate = useNavigate();
  const handleEdit = (employeeId)=>{
    navigate(`/edit-employee/${employeeId}`)
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>
                <ButtonEdit onEdit={()=>handleEdit(employee.id)} />
                <ButtonDelete onDelete={() => handleDelete(employee.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
