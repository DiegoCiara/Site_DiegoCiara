import { TopProjects } from "../../Profile";
import { CardProjects } from "../CardProjects/CardProjects";

export function AllProjects(){
  return(
    <div className="Container" style={{paddingTop:'30px'}}>
      <div className="HeadPage">
        <h1>Projetos</h1>
        <span className="Subtitle" style={{marginTop:'0', marginBottom:'20px'}}>Aqui estão alguns projetos que desenvolvi 💻</span>
      </div>
      <div className="Wrap Contents" style={{justifyContent:'start', alignItems:'center'}}>
        {TopProjects.map((project, index) => (
          <CardProjects 
            key={index}
            image={project.image}
            title={project.name}
            description={project.description}
            type={project.type}
            link={project.path}
            deploy={project.deploy}
          />
        ))}
      </div>
    </div>
  )
}