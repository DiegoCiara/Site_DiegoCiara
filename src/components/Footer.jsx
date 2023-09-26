import { Profile } from "../global/Profile";


export function Footer(){
  return(
    <>
    <div className="Footer"><span style={{fontSize:'12px', color:'#bbbbbb'}}>2023 © copyright {Profile.name} | Todos direitos reservados</span></div>
    </>
  )
}