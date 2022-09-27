import "./ProjectList.css"
import projects from "../../resources/projects"
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectList() {

    return (
        <>
            <h1>Projects</h1>
            <div className="ProjectArea">
                {projects.map((project, idx) => <ProjectCard project={project} key={idx} idx={idx}/>)}
            </div>
        </>
    )
}