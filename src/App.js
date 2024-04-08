import "./css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login";

function App() {
  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
}

export default App;
