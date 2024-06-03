import { useState } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

function CreateEmployee() {
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
              <div className="line-form">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="line-form">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
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
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
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
