import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import ContactUs from "./pages/ContactUs.jsx";
import Career from "./pages/Career.jsx";
import Download from "./pages/Download.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Career />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/downloads",
        element: <Download />,
      },
      {
        path: "/not-available",
        element: <ComingSoon />
      }
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
