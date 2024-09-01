import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
