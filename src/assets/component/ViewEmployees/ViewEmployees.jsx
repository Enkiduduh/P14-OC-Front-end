import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

function ViewEmployees() {
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

        <table className="table-container">
          <thead>
            <tr>
              <th className="td-head">First Name</th>
              <th className="td-head">Last Name</th>
              <th className="td-head">Start Date</th>
              <th className="td-head">Department</th>
              <th className="td-head">Date of Birth</th>
              <th className="td-head">Street</th>
              <th className="td-head">City</th>
              <th className="td-head">State</th>
              <th className="td-head">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger</td>
              <td>Nixxon</td>
              <td>2020-04-12</td>
              <td>Marketing</td>
              <td>1988-02-04</td>
              <td>22 frederic jackal</td>
              <td>Evermind</td>
              <td>Grözher</td>
              <td>45788 00</td>

            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009/01/12</td>
              <td>$86,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default ViewEmployees;
