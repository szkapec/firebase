import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectList = ({project}) => {
    return (
        <StyledPositionRelative  className="project-list section">
           {project && project.map((itemProject, index) => {
               let picture = `https://placeimg.com/640/480/people/${index}`
               return (
                   <div >
                        <Link to={'/project/' + itemProject.id} key={itemProject.id}>
                            <ProjectSummary project={itemProject} key={itemProject.id} picture={picture}/> 
                        </Link>
                   </div>
                )
           })}
        </StyledPositionRelative>
    )
}
export default ProjectList;

const StyledPositionRelative = styled.div`
    position: relative;

    
    @media(min-width: 600px) {
        width: 50%;
    }
    @media(min-width:800px){
        width: 60%;
    }
    @media(min-width:1200px){
        width: 700px;
    }
    @media(min-width:1500px){
        width: 900px;
    }
    
`