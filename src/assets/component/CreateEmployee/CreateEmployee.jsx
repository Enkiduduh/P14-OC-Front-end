import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../store/employeesSlice";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Date_picker from "../Date_Picker/Date_picker";
import DatePicker from "my-date-picker-package";

function CreateEmployee() {
  const dispatch = useDispatch();
  // const [date, setDate] = useState("");

  const [formData, setFormData] = useState({
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
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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
      console.log("Form data submitted: Every fields should be completed!");
    } else {
      // Here you can handle the form submission, like sending the data to a server
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
      navigate("/employees-list");
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

              <div className="line-form">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="engineering">Engineering</option>
                  <option value="humanRessources">Human Ressources</option>
                  <option value="legal">Legal</option>
                </select>
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
                    <label htmlFor="state">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
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
      <Footer />
    </div>
  );
}

export default CreateEmployee;
