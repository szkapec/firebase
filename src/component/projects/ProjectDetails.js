import React from 'react'
import { connect } from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
const ProjectDetails = (props) => {
    
    const { project, auth } = props;
    console.log(project,'fgdsjsgl')
    if(!auth.uid) return <Redirect to="/signin"/>
    if(project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by: {project.authorFirstName} {project.authorLastName}</div>
                        <div className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
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
    console.log(projects, 'projecting')
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
