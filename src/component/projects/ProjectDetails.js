import React from 'react'
import { connect } from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
const ProjectDetails = (props) => {
    
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to="/signin"/>
    if(project){
        return(


            <StyledContainer className="container">
                <div className="">
                    <div className="card-content">
                        <StyleSpanCardTitle className="card-title">
                            {project.title}
                        </StyleSpanCardTitle>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by: {project.authorFirstName} {project.authorLastName}</div>
                        <div className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </StyledContainer>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }


}

const mapstateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id; //samo id projektu kliknietego
    const projects = state.firestore.data.projects; //wszystkie projekty z bazy
    const project = projects ? projects[id] : null; //projekt o id rownym ==id
    return {
        project: project,
        auth: state.firebase.auth,
    }
   
}
export default compose(
    connect(mapstateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);


const StyledContainer = styled.div`
    max-width: 860px;
    box-shadow: 0px 5px 15px -5px rgba(0,0,0,0.75);
    background-color: #FBEADC;
    border-radius: 20px;
    margin-top: 40px;
    padding: 20px;

`
const StyleSpanCardTitle = styled.span`
    border-bottom: 1px solid grey;
    max-width: 70%;
    padding-bottom: 8px;
    font-size: 24px;

`