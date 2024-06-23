import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../store/employeesSlice";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Date_picker from "../Date_Picker/Date_picker";
import DatePicker from "my-date-picker-package";
import { optionsDepartment, optionsState } from "../Select/options";
import SelectComponent from "../Select/Select";
import Modal from "../Modal/Modal";

function CreateEmployee() {
  const dispatch = useDispatch();
  // const [date, setDate] = useState("");
  const [selectedValueDepartment, setSelectedValueDepartment] =
    useState("sales");
  const [selectedValueState, setSelectedValueState] = useState("Alabama");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isClickedToClose, setIsClickedToClose] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "Alabama",
    zipcode: "",
    department: "sales",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseModal = () => {
    setIsClickedToClose(true);
    console.log("prout");
    if (isFormCompleted && isFormSubmitted) {
      navigate("/employees-list");
    }

  };

  const handleChangeSelectDep = (event) => {
    const { value } = event.target;
    setSelectedValueDepartment(value);
    setFormData({
      ...formData,
      department: value,
    });
  };
  const handleChangeSelectSta = (event) => {
    const { value } = event.target;
    setSelectedValueState(value);
    setFormData({
      ...formData,
      state: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.dateOfBirth === "" ||
      formData.startDate === "" ||
      formData.department === "" ||
      formData.street === "" ||
      formData.city === "" ||
      formData.state === "" ||
      formData.zipcode === ""
    ) {
      setIsFormSubmitted(true);
      setIsFormCompleted(false);
      console.log(
        "Form data submitted: Every fields should be completed!",
        formData
      );
      setTimeout(() => {
        setIsFormSubmitted(false);
        setIsClickedToClose(false)
      }, 5000);
    } else {
      setIsFormSubmitted(true);
      setIsFormCompleted(true);
      console.log("Form data submitted:", formData);
      dispatch(addEmployee(formData));
      setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        department: "",
      });
    }
  };

  return (
    <div className="container-cet">
      <Header />
      <div className="wrapper-main">
        <div className="wrapper-right">
          <div className="instructions">
            <span>Instructions :</span>
            <span>Fill the form to add an Employee to the HRnet Database.</span>
            <span>
              Please remind that all fields need to be completed to validate the
              form.
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="wrapper-left">
          <div className="info-container">
            <div className="info-employee">
              <span>Identity</span>
              <div className="line-form">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="line-form">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <Date_picker
                id="dateOfBirth"
                labelName="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              <Date_picker
                id="startDate"
                labelName="Start Date"
                value={formData.startDate}
                onChange={handleChange}
              />

              {/* <DatePicker
                id="startDate"
                labelName="Start Date"
                value={formData.startDate}
                onChange={handleChange}
              /> */}
              <div className="line-form">
                <SelectComponent
                  options={optionsDepartment}
                  value={selectedValueDepartment}
                  onChange={handleChangeSelectDep}
                  htmlFor="department"
                  labelValue="Department"
                />
              </div>
            </div>

            <div className="info-adress">
              <div className="adress-container">
                <div className="adress">
                  <span>Adress</span>
                  <div className="line-form">
                    <label htmlFor="street">Street</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="line-form">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="line-form">
                    <SelectComponent
                      options={optionsState}
                      value={selectedValueState}
                      onChange={handleChangeSelectSta}
                      htmlFor="state"
                      labelValue="State"
                    />
                  </div>
                  <div className="line-form">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="number"
                      id="zipcode"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="info-department-btn-save">
                  <button className="btn-save" type="submit">
                    Create Employee
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="modalDisplay">
        <Modal
          isFormSubmitted={isFormSubmitted}
          onClick={handleCloseModal}
          isFormCompleted={isFormCompleted}
          isClickedToClose={isClickedToClose}
          choiceOne="Employee created !"
          choiceTwo="The form is not completed !"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CreateEmployee;
