import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home/Home.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";
import { Routes } from "./const/routes.js";
import { Details } from "./pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
  },
  { path: Routes.profile, element: <Profile /> },
  { path: Routes.details, element: <Details /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
