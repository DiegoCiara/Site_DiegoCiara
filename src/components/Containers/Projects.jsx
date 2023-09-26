import { Projects, TopProjects } from "../../global/Profile";
import { CardProjects } from "../CardProjects/CardProjects";

export function AllProjects(){
  return(
    <div className="Container">
      <h1>Projetos</h1>
      <h3 style={{marginTop:'0'}}>Aqui estão alguns projetos que desenvolvi 💻</h3>
      <div className="Row Contents" style={{alignItems:'center'}}>
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