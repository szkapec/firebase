import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

class SingUp extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
        information: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        if(this.state.password===this.state.password2){
            this.setState({information: null})
            this.props.signUp(this.state)
        }
        else {
            this.setState({
                information: 'Hasła nie pasuje do siebie!'
            })
        }
        e.preventDefault();
      
    }
    render() {
        const {auth, authError, information} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div style={{backgroundColor: '#FBEADC', borderRadius: '20px'}} className="container">

                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Zarejestruj się</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" className="" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password2">Powtórz hasło</label>
                        <input type="password" className="" id="password2" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Imię</label>
                        <input type="text" className="" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Nazwisko</label>
                        <input type="text" className="" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button style={{backgroundColor: '#ffd2aa'}} className="btn">Zarejestruj się</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                        {information? <p>{information}</p> : null}
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp) 
