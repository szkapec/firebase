import React from 'react'
import moment from 'moment';
import styled, {keyframes} from 'styled-components';


const ProjectSummary = ({project, picture }) => {
    return (
        <>
        <StyledPositionRelative className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <StyledSpan>
                        <StyledImg src={picture} alt="alt"/>
                    </StyledSpan>
                    <StyledSpan2>{project.authorLastName[0]}{project.authorFirstName[0]}</StyledSpan2>
                    <StyleSpanCardTitle className="card-title">{project.title}</StyleSpanCardTitle>
 
                    <div className="black-text text-darken-3">
                        {project.content}
                    </div>
                    
                    <StyledP className="grey-text">Post: {project.authorLastName&&project.authorLastName} {project.authorFirstName&&project.authorFirstName}</StyledP>
                    <p className="grey-text">Data: {moment(project.createdAt.toDate().toString()).calendar()}</p>
                </div>
        </StyledPositionRelative>
        <div>

        </div>
        </>
    )
}



export default ProjectSummary;


const StyledPositionRelative = styled.div`
    position: relative;
    border-radius: 30px;
    border: 1px solid grey;
    margin: 0px 20px 40px 20px;
    background-color: #FBEADC;

    
`
const StyledSpan = styled.span`
    position: absolute;
    top: 10px;
    right: 15px;
    
`
const StyledSpan2 = styled.span`
    position: absolute;
    top: 20px;
    right: 100px;
    padding-bottom: 0px;
    border-bottom: 1px solid grey;
    opacity: 0;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    @media(min-width:750px) {
        opacity: 1;
    }
    :hover {
        border-bottom: 0px;
        padding-bottom: 19px;
        border-top: 1px solid grey;
    }
`

const StyledImg = styled.img`
    width: 70px;
    border-radius: 40px;

`
const StyleSpanCardTitle = styled.span`
    border-bottom: 1px solid grey;
    max-width: 70%;
    padding-bottom: 8px;

`

const StyledP = styled.p`
    padding-top: 20px;
`