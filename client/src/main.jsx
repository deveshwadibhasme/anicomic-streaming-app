import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import ContactUs from "./pages/ContactUs.jsx";
import Career from "./pages/Career.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ComingSoon/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/not-available",
        element: <ComingSoon />,
      }
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
