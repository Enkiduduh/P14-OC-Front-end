import { useSelector } from "react-redux";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import tup from "../../img/triangle-up.svg";
import tdown from "../../img/triangle-down.svg";

function ViewEmployees() {
  const employees = useSelector((state) => state.employees);

  return (
    <>
      <Header />
      <div className="viewEmployeePage-container">
        <div className="showEntries-searchEntries">
          <div className="showEntries">
            <label htmlFor="showEntries-select">Show </label>
            <select id="showEntries-select" name="showEntries-select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label htmlFor="showEntries-select"> entries</label>
          </div>
          <div className="searchEntries">
            <label htmlFor="searchEntries-bar">Search: </label>
            <input id="searchEntries-bar" name="searchEntries-bar"></input>
          </div>
        </div>
        <div className="line"></div>
        <table className="table-container">
          <thead className="thead-line-flex">
            <tr>
              <th className="th-flex">
                <div className="td-head">First Name</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Last Name</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Start Date</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Department</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Date of Birth</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">Street</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">City</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex">
                <div className="td-head">State</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
              <th className="th-flex th-fixed-width">
                <div className="td-head">Zip Code</div>
                <div className="th-img-flex">
                  <img className="img-triangle" src={tdown} alt="" />
                  <img className="img-triangle" src={tup} alt="" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="td-width-fixed150">{employee.firstName}</td>
                <td className="td-width-fixed150">{employee.lastName}</td>
                <td className="td-width-fixed100">{employee.startDate}</td>
                <td className="td-width-fixed100">{employee.department}</td>
                <td className="td-width-fixed100">{employee.dateOfBirth}</td>
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
              <span>Showing {employees.length} entries </span>
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
