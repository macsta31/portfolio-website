
import Project from "./Project"
import styles from '../styles/Projects.css'

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="highlight-inverted projects-title">Projects</h1>
            <div className="projects-showcase">
                <Project />
                <Project />
                <Project />
                <Project />

            </div>
        </div>
    )
}

export default Projects
