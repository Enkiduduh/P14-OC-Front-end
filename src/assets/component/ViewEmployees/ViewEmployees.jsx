import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Calendar from "../../component/Calendar/Calendar";
import tup from "../../img/triangle-up.svg";
import tdown from "../../img/triangle-down.svg";

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
            <tr>
              <td className="td-width-fixed150">Tiger</td>
              <td className="td-width-fixed150">Nixxon</td>
              <td className="td-width-fixed100">2020-04-12</td>
              <td className="td-width-fixed100">Marketing</td>
              <td className="td-width-fixed100">1988-02-04</td>
              <td className="td-width-fixed190">22 fred jackfrgeggdr</td>
              <td className="td-width-fixed100">Evermind</td>
              <td className="td-width-fixed100">Grözher</td>
              <td className="td-width-fixed80">45788</td>
            </tr>
          </tbody>
        </table>
        <div className="line"></div>
        <div className="showEntryOnEntries-showPages">
          <div className="showEntryOnEntries">
            <div className="showEntry">
              <span>Showing 1 to 1 of 1 entries </span>
            </div>
          </div>
          <div className="showPages">
            <label htmlFor="previous">Previous </label>
            <button>1</button>
            <label htmlFor="next"> Next</label>
          </div>
        </div>
      </div>

      <div className="test">
        <label htmlFor="date">Date:</label>
        <input type="date" />
      </div>

      <Calendar />
      <Footer />
    </>
  );
}

export default ViewEmployees;
