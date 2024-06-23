import PropTypes from "prop-types";

function Date_picker({ id, labelName, value, onChange }) {
  return (
    <div className="line-form">
      <label htmlFor={id}>{labelName}</label>
      <input
        className="custom-date-picker"
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Date_picker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Date_picker;
