import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FormDataProvider } from "./assets/component/DataContext/DataContext";
import CreateEmployee from "./assets/component/CreateEmployee/CreateEmployee";
import NotFound from "./assets/component/NotFound/NotFound";
import ViewEmployees from "./assets/component/ViewEmployees/ViewEmployees";

function App() {
  return (
    <FormDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees-list" element={<ViewEmployees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FormDataProvider>
  );
}

export default App;
