import React from 'react';
import { Route, Routes, BrowserRouter as Router
} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { MailSuccess } from './pages/MailSuccess';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './ui/theme';
import { Contact } from './components/Containers/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
          <Router>
            <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact class="Main Contact"/>}/>
              <Route path='/mailSuccess' element={<MailSuccess/>}/>
              <Route path="*" element={<Home/>} />
            </Routes>
          </Router>
        <Footer/>
   </ThemeProvider>
  );
}
export default App;