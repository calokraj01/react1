import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import TicTacToe from './components/TicTacToe';
import Something1 from './components/Something1';
import Something2 from './components/Something2';

import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar title="MyApp" />
      <div className="line"></div>

      <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TicTacToe />}></Route>
            <Route exact path='/textform' element={<TextForm heading="Enter text below to analyze"/>}></Route>
            <Route exact path="/something1" element={<Something1 />}></Route>
            <Route exact path="/something2" element={<Something2 />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}
