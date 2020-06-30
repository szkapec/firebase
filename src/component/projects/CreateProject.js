import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

class CreateProject extends Component {

    state = {
        content: '',
        title: '',
    }

    handleChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProjects(this.state)
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin"/>
        else return (
            <StyledContainer style={{backgroundColor: '#FBEADC'}} className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="">Stwórz nowy projekt</h5>
                    <div className="input-field">
                        <label htmlFor="title">Tytuł</label>
                        <input type="text" className="" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Treść projektu</label>
                        <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button style={{backgroundColor: '#ffd2aa'}} className="btn">Stwórz</button>
                    </div>
                </form>
            </StyledContainer>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProjects: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)


const StyledContainer = styled.div`
    max-width: 860px;
    border-radius: 20px;
    box-shadow: 0px 5px 15px -5px rgba(0,0,0,0.75);
`