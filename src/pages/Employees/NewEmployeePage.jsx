import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../service/employee.service";
import { useForm } from "../../hooks/useForm";
import { FormItem } from "../../components/UI/FormItem";
import { BackTo } from "../../components/UI/Button/BackTo";

export const NewEmployeePage = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const newEmployee = await createEmployee(values);
      console.log("Employee created:", newEmployee);
      navigate("/");
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: "",
      lastName: "",
      age: "",
    },
    onSubmit
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormItem
          title="Name"
          value={values.name}
          onChange={handleChange}
          name="name"
        />
        <FormItem
          title="Last Name"
          value={values.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <FormItem
          title="Age"
          value={values.age}
          onChange={handleChange}
          name="age"
        />
        <button type="submit" className="btn btn-outline-success">
          Create
        </button>
        <BackTo to="/"/>
      </form>
    </>
  );
};
