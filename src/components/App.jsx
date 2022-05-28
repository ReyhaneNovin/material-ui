import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./ui/Theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route exact path="/" element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route path="/services" element={<>services</>} />
          <Route path="/revolution" element={<>revolution</>} />
          <Route path="/about" element={<>about</>} />
          <Route path="/contact" element={<>contact</>} />
          <Route path="/customsoftware" element={<>customsoftware</>} />
          <Route path="/mobileapps" element={<>mobileappst</>} />
          <Route path="/websites" element={<>websites</>} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
