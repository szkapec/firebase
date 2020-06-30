import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
const ProjectList = ({project}) => {
    return (
        <div  className="project-list section">
           {project && project.map((itemProject, index) => {
               let picture = `https://placeimg.com/640/480/people/${index}`
               return (
                   <div>
                        <Link to={'/project/' + itemProject.id} key={itemProject.id}>
                            <ProjectSummary project={itemProject} key={itemProject.id} picture={picture}/> 
                        </Link>
                   </div>
                )
           })}
        </div>
    )
}
export default ProjectList;
