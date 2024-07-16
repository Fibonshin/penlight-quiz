import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Hinata from "./Hinata/Hinata";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hinata" element={<Hinata/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
