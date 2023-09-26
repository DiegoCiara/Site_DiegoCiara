import { Button, TextField } from "@mui/material";
import { Profile } from "../../global/Profile";


export function Contact(props){
  return(
    <div className={props.class} >
  <div className={`Container MainContact`} id="Form">
    <div  className="HeigthContact">
      <h1>Contato</h1>
      <p>Veja como você pode me contatar</p>
    </div>
    <div className="Box Form" style={{marginBottom:'100px'}}>
      <div className="form card">
        <h2>Entre em contato</h2>
        <span>Envie um e-mail utilizando o formulário abaixo</span>
        <div className="InputContainer">
          <label>Nome</label>
          <input/>
        </div>
        <div className="InputContainer">
          <label>Email</label>
          <input type='email'/>
        </div>
        <div className="InputContainer">
          <label>Mensagem</label>
          <textarea 
              style={{marginBottom:'10px'}}
              rows="4"  />
        </div>
        <Button variant="contained" size="medium" style={{width:'100%'}} type='submit'>Enviar</Button>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'10px', width:'100%', justifyContent:'center', marginTop:'15px'}}>
      <a href={`https://wa.me/${Profile.phone}`} target='_blank'  style={{width:'100%'}}><Button variant='outlined' color='success' style={{width:'80%', fontSize:'12px'}}> Falar no whatsApp</Button></a>
      <a href="https://www.linkedin.com/in/diegociara" target='_blank'  style={{width:'100%'}}><Button variant='outlined' color='primary' style={{width:'80%', fontSize:'12px'}}>Ir para o Linkedin</Button></a>
      </div>
    </div>
  </div>

    </div>

  )
}