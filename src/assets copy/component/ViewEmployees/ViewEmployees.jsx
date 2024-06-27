import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import tup from "../../img/triangle-up.svg";
import tdown from "../../img/triangle-down.svg";
import SelectComponent from "../Select/Select";
import { optionsEntriesDisplay } from "../Select/options";

function ViewEmployees() {
  const employees = useSelector((state) => state.employees);

  const [employeeData, setEmployeeData] = useState([]);
  const [totalEmployee, setTotalEmployee] = useState([]);
  const [entriesDisplay, setEntriesDisplay] = useState();
  const [isValueLabel2Exists, setIsValueLabel2Exists] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("src/assets/data/data.json")
      .then((response) => response.json())
      .then((data) => setEmployeeData(data));
  }, []);

  useEffect(() => {
    setTotalEmployee([...employeeData, ...employees]);
  }, [employeeData, employees]);

  function formatDateToDDMMYYYY(date) {
    if (!date) return '';

    let year, month, day;

    if (date.includes('-')) {
      [year, month, day] = date.split('-');
    } else if (date.includes('/')) {
      [day, month, year] = date.split('/');
    } else {
      return date; // return the date as is if it's in an unrecognized format
    }

    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  }

  const handleChange = (entriesDisplay) => {
    const { value } = entriesDisplay.target;
    const totalDisplay = parseInt(value, 10); // Assurez-vous que 'value' est un entier
    const newTotalEmployee = [...employeeData, ...employees].slice(
      0,
      totalDisplay
    );
    setTotalEmployee(newTotalEmployee);
  };

  const sortAscending = (key) => {
    const sortedEmployees = [...totalEmployee].sort((a, b) => {
      if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
      if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
      return 0;
    });
    setTotalEmployee(sortedEmployees);
  };

  const sortDescending = (key) => {
    const sortedEmployees = [...totalEmployee].sort((a, b) => {
      if (a[key].toLowerCase() > b[key].toLowerCase()) return -1;
      if (a[key].toLowerCase() < b[key].toLowerCase()) return 1;
      return 0;
    });
    setTotalEmployee(sortedEmployees);
  };

  const handleSearch = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const filteredEmployees = totalEmployee.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatDateToDDMMYYYY(employee.startDate).includes(
        searchTerm.toLowerCase()
      ) ||
      formatDateToDDMMYYYY(employee.dateOfBirth).includes(
        searchTerm.toLowerCase()
      ) ||
      employee.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.zipcode.toString().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <Header />
      <div className="viewEmployeePage-container">
        <div className="showEntries-searchEntries">
          <div className="showEntries">
            <SelectComponent
              options={optionsEntriesDisplay}
              value={entriesDisplay}
              onChange={handleChange}
              htmlFor="showEntries-select"
              labelValue="Show "
              isValueLabel2Exists={isValueLabel2Exists}
              labelValue2=" entries"
            />
          </div>
          <div className="searchEntries">
            <label htmlFor="searchEntries-bar">Search: </label>
            <input
              id="searchEntries-bar"
              name="searchEntries-bar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="line"></div>
        <table className="table-container">
          <thead className="thead-line-flex">
            <tr>
              <th className="th-flex">
                <div className="td-head">First Name</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("firstName")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("firstName")}
                  />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Last Name</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("lastName")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("lastName")}
                  />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Start Date</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("startDate")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("startDate")}
                  />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Department</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("department")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("department")}
                  />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Date of Birth</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("dateOfBirth")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("dateOfBirth")}
                  />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Street</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("street")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("street")}
                  />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">City</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("city")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("city")}
                  />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">State</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("state")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("state")}
                  />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Zip Code</div>
                <div className="th-img-flex">
                  <img
                    className="img-triangle"
                    src={tdown}
                    alt=""
                    onClick={() => sortDescending("zipcode")}
                  />
                  <img
                    className="img-triangle"
                    src={tup}
                    alt=""
                    onClick={() => sortAscending("zipcode")}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td className="td-width-fixed150">{employee.firstName}</td>
                <td className="td-width-fixed150">{employee.lastName}</td>
                <td className="td-width-fixed100">
                  {formatDateToDDMMYYYY(employee.startDate) ||
                    employee.startDate}
                </td>
                <td className="td-width-fixed100">{employee.department}</td>
                <td className="td-width-fixed100">
                  {formatDateToDDMMYYYY(employee.dateOfBirth) ||
                    employee.dateOfBirth}
                </td>
                <td className="td-width-fixed190">{employee.street}</td>
                <td className="td-width-fixed100">{employee.city}</td>
                <td className="td-width-fixed100"> {employee.state}</td>
                <td className="td-width-fixed80">{employee.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="line"></div>
        <div className="showEntryOnEntries-showPages">
          <div className="showEntryOnEntries">
            <div className="showEntry">
              <span>Showing {totalEmployee.length} entries</span>
            </div>
          </div>
          <div className="showPages">
            <label htmlFor="previous">Previous </label>
            <button>1</button>
            <label htmlFor="next"> Next</label>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewEmployees;
