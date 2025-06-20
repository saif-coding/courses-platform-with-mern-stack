import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
