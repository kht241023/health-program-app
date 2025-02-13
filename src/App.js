import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HealthList from "./pages/HealthList";
import HealthDetail from "./pages/HealthDetail";
import HealthForm from "./pages/HealthForm";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healths" element={<HealthList />} />
          <Route path="/healths/:id" element={<HealthDetail />} />
          <Route path="/healths/add" element={<HealthForm />} />
        </Routes>
      </Router>
  );
}

export default App;
