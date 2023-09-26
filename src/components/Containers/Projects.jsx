import { TopProjects } from "../../global/Profile";
import { CardProjects } from "../CardProjects/CardProjects";

export function AllProjects(){
  return(
    <div className="Container" style={{paddingTop:'30px'}}>
      <div>
      <h1>Projetos</h1>
      <h3 style={{marginTop:'0'}}>Aqui estão alguns projetos que desenvolvi 💻</h3>
      </div>
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