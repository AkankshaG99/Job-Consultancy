import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/NavbarTop";
import Footer from "./assets/Pages/Footer"

function App() {
  return (
    <>
      {/* <TopBar/> */}
      <Navbar />
      <div className="mt-20 md:mt-22">
        <Outlet />
      </div>
    </>
  );
}

export default App;
