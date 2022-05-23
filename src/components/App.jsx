
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  theme from './ui/Theme'

import Header from './ui/Header';
import Footer from './ui/Footer'

function App() {
  return (

  <ThemeProvider theme={theme}>
   
   <BrowserRouter> 
       <Header/>
       <Routes>
         <Route  path="/" element={<div style={{height:"2000px"}}>home</div>}/> 
         <Route  path="/services" element={<>services</>}/> 
         <Route  path="/revolution"element={<>revolution</>}/> 
         <Route  path="/about" element={<>about</>}/> 
         <Route  path="/contact"element={<>contact</>}/> 
         <Route  path="/customsoftware"element={<>customsoftware</>}/> 
         <Route  path="/mobileapps"element={<>mobileappst</>}/> 
         <Route  path="/websites"element={<>websites</>}/> 
       </Routes>
       <Footer/>
      </BrowserRouter>
 

     </ThemeProvider>
  );
}

export default App;
