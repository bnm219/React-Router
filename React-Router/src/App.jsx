import { Routes, Route } from "react-router-dom";
import Blue from "./components/blue";
import Red from "./components/red";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css'

function App() {

  return (
    <>
      <div id="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
