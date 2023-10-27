import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./components";

function App() {
  return (
    <>
    <BrowserRouter >
    <Route path="/" element={ <Login /> } />
    </BrowserRouter>
    </>
  );
}

export default App;
