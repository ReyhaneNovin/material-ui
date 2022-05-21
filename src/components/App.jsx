
import './App.css';
import { ThemeProvider } from '@mui/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  theme from './ui/Theme'

import Header from './ui/Header';

function App() {
  return (

  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header/>
     <h1>Hello</h1>
    <Routes>
      <Route path='/' component={()=><div>Home</div>}/>
   
    </Routes>
   
     </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
