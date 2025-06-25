import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import CourseContextProvider from "./context/CourseContext.jsx";
createRoot(document.getElementById("root")).render(
  <CourseContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </CourseContextProvider>
);
