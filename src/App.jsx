import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { FormDataProvider } from "./assets/component/DataContext/DataContext";
import CreateEmployee from "./assets/component/CreateEmployee/CreateEmployee";
import NotFound from "./assets/component/NotFound/NotFound";
import ViewEmployees from "./assets/component/ViewEmployees/ViewEmployees";

function App() {
  return (
    // <FormDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees-list" element={<ViewEmployees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    // </FormDataProvider>
  );
}

export default App;
