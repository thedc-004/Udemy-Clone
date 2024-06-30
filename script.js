import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfilePage from "./src/pages/ProfilePage/ProfilePage";

import Root from "./src/pages/Pages";
import CoursePage from "./src/pages/CoursePage/CoursePage";

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
      {
        path: "/course/:courseId",
        element: <CoursePage />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
