import PropTypes from "prop-types";

const SelectComponent = ({
  options,
  value,
  onChange,
  htmlFor,
  labelValue,
  isValueLabel2Exists,
  labelValue2,
}) => {
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
      {!isValueLabel2Exists ? (
        <label htmlFor={htmlFor}>{labelValue2}</label>
      ) : null}
    </>
  );
};

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  htmlFor: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  isValueLabel2Exists:PropTypes.bool.isRequired,
  labelValue2:PropTypes.string.isRequired,
};

export default SelectComponent;
