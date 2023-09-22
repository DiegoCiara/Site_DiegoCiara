import { Button } from "@material-ui/core"
import { Profile } from "../global/Profile"


export function NavBar() {
  function Logo(){
    if(Profile.logo === null){
      return <h2 className="logo">{Profile.name}</h2>
    }else{
      return <img src={Profile.logo} className="logo" alt="logo" />
    }
  }
  return(
    <>
    <nav>
      <a href="/">
      {Logo()}</a>
      <div className="pages">
        <a href="/projects">
          <Button className="NavItem">Meus Projetos</Button>
        </a>
        <a href="/about"><Button className="NavItem">Entre em contato</Button></a>
        <a href="/"><Button className="NavItem">Git</Button></a>
        <a href="/"><Button className="NavItem">Linkedin</Button></a>
        <a href="/"><Button className="NavItem">Insta</Button></a>
      </div>
    </nav>
    </>
  )
}