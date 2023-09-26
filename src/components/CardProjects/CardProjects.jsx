import { Button } from "@material-ui/core";

export function CardProjects(props){
  function ViewDeploy(){
    if(props.deploy === null){
      return null
    }else{
      return(
        <a href={props.deploy} target="_blank"><Button variant="outlined" color="primary">Demo</Button></a>
      )
    }
  }
  return(
    <div className="card">
      <img src={props.image} className="CardImage"/>
      <h2>{props.title}</h2>
      <span style={{fontSize:'14px'}}>{props.description}</span>
      <div style={{width:'100%', display:'flex', justifyContent:'center', padding:'15px 0'}}>
        <span className="tag">
          {props.type}
        </span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
      <a href={props.link}><Button variant='contained' color='primary'>Ver projeto</Button></a>
      {ViewDeploy()}
      </div>
    </div>
  )
}