import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Homepage from "./src/pages/Homepage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfilePage from "./src/pages/ProfilePage/ProfilePage";

import Root from "./src/pages/Pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
