import { useState } from "react"

export const useForm = (initialValues, onSubmit) => {
  const[values,setValues]=useState(initialValues)
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
    return{
        values,
        handleChange,
        handleSubmit
    }
}
