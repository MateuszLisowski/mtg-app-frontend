import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from "./routes/AppRoutes";
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);
