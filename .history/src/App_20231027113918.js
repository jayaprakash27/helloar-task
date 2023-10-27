import { Login, MainPage } from "./components";

import { useDispatch, useSelector } from "react-redux";

function App() {
  
  const signedInUser = useSelector((state) => state.signedInUser);

  return (
    <>
    { signedInUser != null ? <MainPage /> : <Login /> }
    </>
  );
}

export default App;
