import { Button } from "@material-ui/core";
import {BsGithub} from 'react-icons/bs'

export function CardProjects(props){
  function ViewDeploy(){
    if(props.deploy === null){
      return null
    }else{
      return(
        <a href={props.deploy} style={{width:'100%'}} target="_blank"><Button variant="outlined" color="primary"  style={{width:'80%', fontSize:'12px'}} >Demo</Button></a>
      )
    }
  }
  return(
    <div className="card">
      <img src={props.image} className="CardImage"/>
      <h2>{props.title}</h2>
      <span style={{fontSize:'12px'}}>{props.description}</span>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:"center", padding:'15px 0'}}>
        <span className="tag">
          {props.type}
        </span>
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', width:'100%', justifyContent:'center'}}>
      {ViewDeploy()}
      <a href={props.link}  style={{width:'100%'}}><Button variant='contained' color='primary' style={{width:'80%', fontSize:'12px'}}><BsGithub className="IconButton"/> Ver projeto</Button></a>
      </div>
    </div>
  )
}
