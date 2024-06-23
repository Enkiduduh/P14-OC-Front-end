import PropTypes from "prop-types";

const SelectComponent = ({ options, value, onChange, htmlFor, labelValue }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelValue}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  htmlFor:PropTypes.string.isRequired,
  labelValue:PropTypes.string.isRequired,
};

export default SelectComponent;
