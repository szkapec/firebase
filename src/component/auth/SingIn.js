import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SingIn extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIns(this.state)
    }
    render() {

        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to="/"/>
        else return (
            <div style={{backgroundColor: '#FBEADC', borderRadius: '20px' , boxShadow: '15px 16px 22px -11px rgba(0,0,0,0.75)'}} className="container">

                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Zaloguj się</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" className="" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button style={{backgroundColor: '#ffd2aa'}} className="btn">Zaloguj</button>
                        <div className="red-text center">
                            {authError ? <p>{authError} </p> : null}
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        notyfications: state.firestore.ordered.notyfications,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIns: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingIn) 
