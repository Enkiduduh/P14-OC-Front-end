import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateEmployee from "./assets/component/CreateEmployee/CreateEmployee"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee/>} />
        {/* <Route path="/user/:id" element={<User />} /> */}

      </Routes>
    </BrowserRouter>
  )
}


export default App
