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
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 30px; 
    @media(min-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 1550px) {
        grid-template-columns: repeat(3, 1fr);
    }
`