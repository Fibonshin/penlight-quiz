import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hinata from "./Hinata/Hinata";
import Sakura from "./Sakura/Sakura";
import Nogi from "./Nogi/Nogi";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hinata" element={<Hinata/>}></Route>
          <Route path="/sakura" element={<Sakura/>}></Route>
          <Route path="/nogi" element={<Nogi/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
