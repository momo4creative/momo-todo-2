import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, MainProvider, TodoProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <AuthProvider>
          <TodoProvider>
            <App />
          </TodoProvider>
        </AuthProvider>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
