import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRental from "./components/AddRental";
import Dashboard from "./components/Dashboard";
import EditRental from "./components/EditRental";
import Login from "./components/Login";
import Map from "./components/Map";
import ViewRental from "./components/ViewRental";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<AddRental />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update/:id" element={<EditRental />} />
          <Route path="/map" element={<Map />} />
          <Route path="/view/:id" element={<ViewRental />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;