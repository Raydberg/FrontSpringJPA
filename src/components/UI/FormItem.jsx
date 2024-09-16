import PropTypes from 'prop-types'
export const FormItem = ({title,type="text",value,onChange,name}) => {
  return (
    <div className=" form-floating mb-3">
      <input
        className="form-control"
        type={`${type}`}
        id={`${title}`}
        name={`${name}`}
        placeholder="Name"
        onChange={onChange}
        value={value}
      />
      <label htmlFor={`${title}`}>{title}</label>
    </div>
  );
};
FormItem.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string
};