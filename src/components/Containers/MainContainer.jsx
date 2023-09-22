import { Button } from '@material-ui/core';
import { Profile } from "../../global/Profile";
import { SendWhatsApp } from "../../global/utils";


export function MainContainer() {
  return(
    <>
      <div className="Container Row Main" style={{minHeight:'90vh'}}>
          <div className="Box Left">
            <img src={Profile.image} className="Image_Profile"/>
            <h1>{Profile.name}</h1>
            <h4>{Profile.profession}</h4>
            <p>{Profile.resume}</p>
            <span>Sinta-se a vontade para se conectar comigo ou trocar uma ideia!</span>
            <div className="Row" style={{marginTop:'20px', gap:'20px'}}>
              <a href={`https://api.whatsapp.com/send?phone=${Profile.phone}`} target='_blank'>
                <Button className='NavItem' style={{backgroundColor:'#2b67ff'}} color="primary">Entre em contato</Button>
              </a>
              <a href="/projects">
                <Button className='NavItem' variant='outlined'>Projetos</Button>
              </a>
                
            </div>
          </div>
          <div>{' '}</div>
        </div>
          
    </>
  )
}