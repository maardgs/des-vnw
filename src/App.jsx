  import Header from "./components/Header/Header";
  import {BrowserRouter, Routes, Route} from "react-router-dom";
  import Home from "./components/Home/Home";
  import Novidades from "./components/Novidades/Novidades";
  import Sobre from "./components/Sobre/Sobre";

  export default function App() {
  return(
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/novidades" element={<Novidades/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
  }