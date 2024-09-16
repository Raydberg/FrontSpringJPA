import axios from "axios";

export const fetchEmployees = async () => {
  const { data } = await axios.get("http://localhost:8080/api/employees");
  return data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`http://localhost:8080/api/employees/${id}`);
};

export const createEmployee = async (employee) => {
  const { data } = await axios.post("http://localhost:8080/api/employees", employee);
  return data;
};
export const getEmployeeById = async (id)=>{
  const {data} = await axios.get(`http://localhost:8080/api/employees/${id}`)
  return data;
}
export const updateEmployee = async (id, employee) => {
  const { data } = await axios.put(`http://localhost:8080/api/employees/${id}`, employee);
  return data;
};