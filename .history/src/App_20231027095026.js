import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components";

function App() {
  return (
    <>
    <Routes >
    <Route path="/" element={ <Login /> } />
    </Routes>
    </>
  );
}

export default App;
