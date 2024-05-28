import "./CreateEmployee.scss";
import { useState } from "react";

function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    zipcode: "",
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
    // Here you can handle the form submission, like sending the data to a server
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="wrapper-main">
        <div className="wrapper-right">
          <a href="#" target="/">
            View Current Employees
          </a>
          <h2>Create Employee Tool</h2>
          <div className="instructions">
            <span>Fill the form</span>
            <span>to add an Employee</span>
            <span>to the HRnet Database</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="wrapper-left">
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
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="line-form">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
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
          <button className="btn-save" type="submit">
            Create Employee
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEmployee;
