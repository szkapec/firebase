import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';

class Dashbord extends Component {
    state = { 
        changeClickNotification: false,
    }
  
    changeClick = () => {
      
        this.setState({
            changeClickNotification: !this.state.changeClickNotification,
        })
    }
  
    render() {
    const { projects, auth, notyfications } = this.props;
   
   

    if (!auth.uid) return <Redirect to="/signin" />;
    else
      return (
        <div className="cont">
            <StyledContainerButton>
                <StyledButton click={this.state.changeClickNotification} onClick={this.changeClick}>Notyfikacje</StyledButton>
            </StyledContainerButton>
           
          <div style={{position: 'relative'}} className="">
            <Notifications notyfications={notyfications} clickNot={this.state.changeClickNotification}/>
          </div>
          <div
            className="projectList">
            <div className="projectList--component">
              <ProjectList project={projects} auths={auth} />
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notyfications: state.firestore.ordered.notyfications,
  };
};

//export default connect(mapStateToProps)(Dashbord)
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notyfications", limit: 4, orderBy: ["time", "desc"] },
  ])
)(Dashbord);


const StyledContainerButton = styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 50%;
    @media(min-width: 450px) {
      margin-left: 60%;
    }
    @media(min-width: 600px) {
        opacity: 0;
    }

`
const StyledButton = styled.button`
    font-weight: ${({click}) => click?'700':'300'};
    margin: 15px 30px;
    padding: 7px 20px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: ${({click})=> click ? ' 0px 0px 8px -1px rgba(0,0,0,0.75)' : '0px 0px 8px -1px white'};
    :focus{
    background: white};
  }
`