import "./App.css";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";


const App = () => {
  return (
  <Box width= "400px">
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/excercise/:id" element={<ExcerciseDetail/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </Box>
  )
}

export default App
