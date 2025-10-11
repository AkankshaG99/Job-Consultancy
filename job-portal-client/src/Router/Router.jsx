import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../assets/Pages/Home";
import About from "../assets/Pages/About";
import CreateJob from "../assets/Pages/CreateJob";
import MyJobs from "../assets/Pages/MyJobs";
import SalaryPage from "../assets/Pages/SalaryPage";
import UpdateJob from "../assets/Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../assets/Pages/JobDetails";
import Signup from "../components/Signup";
import AboutUs from "../assets/Pages/AboutUs";
import OurServices from "../assets/Pages/Services";
import ContactUs from "../assets/Pages/ContactUs";
import Training from "../assets/Pages/Training";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        {
          path: "/about-us",
          element: <AboutUs/>
        },
        
        {
          path: "/my-job",
          element: <MyJobs/>
        },
        {
          path: "/services",
          element: <OurServices/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
        },
        {
          path: "/training",
          element: <Training/>
        }

    ],
    },

    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/sign-up",
      element: <Signup/>
    }

  ]);

  export default router;
