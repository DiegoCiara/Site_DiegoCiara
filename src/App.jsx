import React from 'react';
import { Route, Routes, BrowserRouter as Router
} from 'react-router-dom'
import { ThemeProvider } from "@material-ui/core";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { MailSuccess } from './pages/MailSuccess';
import './App.css'
import theme from './global/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/mailSuccess' element={<MailSuccess/>}/>
              <Route path="*" element={<Home/>} />
            </Routes>
          </Router>
        {/* <Footer/> */}
   </ThemeProvider>
  );
}
export default App;