import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Real_estate_way from "./Real_estate_way";
import Interview_way from "./Interview_way";
import Luxury_vacation_way from "./Luxury_vacation_way";
import LuxuryVacation_way from "./LuxuryVacation_way";
import Contacts_way from "./Contacts_way";
import Adout_us_way from "./Adout_us_way";
import Users_way from "./Users_way";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Users"
          element={
            <>
              <Users_way />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Real_estate"
          element={
            <>
              <Real_estate_way />
            </>
          }
        />
        <Route
          path="/Interview"
          element={
            <>
              <Interview_way />
            </>
          }
        />
        <Route
          path="/Luxury_vacation"
          element={
            <>
              <Luxury_vacation_way />
            </>
          }
        />
        <Route
          path="/LuxuryVacation"
          element={
            <>
              <LuxuryVacation_way />
            </>
          }
        />
        <Route
          path="/Contacts"
          element={
            <>
              <Contacts_way />
            </>
          }
        />
        <Route
          path="/Adout_us"
          element={
            <>
              <Adout_us_way />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
