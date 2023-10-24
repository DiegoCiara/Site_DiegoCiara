import { Button } from '@material-ui/core';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { Profile } from '../../Profile';


export function MainContainer() {
  return(
    <>
      <div className="Container Row Main">
          <div className="Box Left MainCard">
            <img src={Profile.image} className="Image_Profile"/>
            <h1 style={{marginBottom:0}}>{Profile.name}</h1>
            <h4>{Profile.profession}</h4>
            <p>{Profile.resume}</p>
            <span>Sinta-se a vontade para se conectar comigo ou trocar uma ideia!</span>
            <div className="Row" style={{marginTop:'20px', gap:'20px'}}>
              <a href='/contact'>
                <Button className='NavItem' variant='contained' color="primary" >Entre em contato</Button>
              </a>
              <a href="https://github.com/DiegoCiara">
                <Button className='NavItem' color="primary" target='_blank' variant='outlined'><BsGithub className='IconButton'/>Github</Button>
              </a>
                
            </div>
          </div>
          <div className='Box Desk'>{' '}</div>
        </div>
    </>
  )
}