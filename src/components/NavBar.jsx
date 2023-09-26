import { Button, Drawer, InputAdornment, List, TextField } from '@material-ui/core';
import { Profile } from "../global/Profile"
import { NavAnimated } from './Animated/Animated';
import {IoMdMenu} from 'react-icons/io'
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { useState } from 'react';
import '/src/App.css'

export function NavBar() {
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const currentPath = window.location.pathname;
  function Logo(){
    if(Profile.logo === null){
      return <h2 className="logo">{Profile.name}</h2>
    }else{
      return <img src={Profile.logo} className="logo" alt="logo" />
    }
  }
  return(
    <>
    <NavAnimated
    scroll={2}
    class='nav'
    children={<>      
    <a href="/">
      {Logo()}</a>
      <div className="pages Desk">
        <a href='/contact'><Button className="NavItem">Entre em contato</Button></a>
        <a href="https://github.com/DiegoCiara" target='_blank'><Button className="NavItem"><BsGithub className='IconButton'/>Github</Button></a>
        <a href="https://www.linkedin.com/in/diegociara" target='_blank'><Button className="NavItem"><BsLinkedin className='IconButton'/>Linkedin</Button></a>
        <a href="https://www.instagram.com/sr.ciara" target='_blank'><Button className="NavItem"><BsInstagram className='IconButton'/>Instagram</Button></a>
      </div>
      <div className='Mobile'>

      <Button
          className='link'
          color="secondary"
          style={{ fontFamily: 'Montserrat', fontSize: '30px', marginRight: '10px' }}
          onClick={toggleDrawer(true)}
        >
          <IoMdMenu />
        </Button>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} style={{ zIndex:'3000', backgroundColor:'#242424'}}>
          <div style={{backgroundColor:'#242424', height:'100%', textAlign:'center', padding:'20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'start', gap:'20px'}}>
            {Logo()}
            <div style={{height:'1px', width:'80%', backgroundColor:'#cacaca'}}></div>
          <List>
            <div style={{display:'flex', width:'60vw', flexDirection:'column', alignItems:'center'}}>
        <a href='/contact' ><Button className="NavItem">Entre em contato</Button></a>
        <a href="https://github.com/DiegoCiara" target='_blank'><Button className="NavItem"><BsGithub className='IconButton'/>Github</Button></a>
        <a href="https://www.linkedin.com/in/diegociara" target='_blank'><Button className="NavItem"><BsLinkedin className='IconButton'/>Linkedin</Button></a>
        <a href="https://www.instagram.com/sr.ciara" target='_blank'><Button className="NavItem"><BsInstagram className='IconButton'/>Instagram</Button></a>
            </div>
          </List>
          <div></div>
          </div>
        </Drawer>
      </div>
</>}/>
    </>
  )
}