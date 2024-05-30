import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateEmployee from "./assets/component/CreateEmployee/CreateEmployee"
import NotFound from "./assets/component/NotFound/NotFound"
import ViewEmployees from "./assets/component/ViewEmployees/ViewEmployees"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createEmployee" element={<CreateEmployee/>} />
        <Route path="/viewEmployees" element={<ViewEmployees/>} />
        {/* <Route path="/user/:id" element={<User />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
