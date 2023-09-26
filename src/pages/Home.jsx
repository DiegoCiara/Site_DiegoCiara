import { Contact } from "../components/Containers/Contact";
import { MainContainer } from "../components/Containers/MainContainer";
import { AllProjects } from "../components/Containers/Projects";
import '/src/App.css'

export function Home() {

  return(
      <>
        <MainContainer/>
        <AllProjects/>
        <Contact/>
      </>
  )
}