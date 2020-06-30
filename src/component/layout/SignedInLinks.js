import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logo from '../../assets/logo_transparent.png';
import styled from 'styled-components';



const SignedInLinks = (props) => {
    return (
        <>
        <span><NavLink to="/"><StyledImg src={logo} alt="Logo"/></NavLink></span> 
        <StyledUl>
            <li> <NavLink to="/create">Nowy projekt</NavLink></li>
            <li> <NavLink to="/"><a onClick={props.signOut}>Wyloguj</a></NavLink></li>
            <StyledLi> <NavLink to="/" className="btn btn-floating pink loghten-1">{props.profile.initials?props.profile.initials:"NN"}</NavLink></StyledLi>
        </StyledUl>
        </>
    )
}
const mapDispatchToPorps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToPorps)(SignedInLinks);


const StyledUl = styled.ul`
    float: right;
    font-size: 12px;
    font-family: 'PT Serif', serif;

`
const StyledImg = styled.img`
        width: 40px;
        height: 30px;
        margin-top: 15px;
    @media(min-width: 500px) {
        width: 110px;
        height: 60px;
        margin-top:0px;
    }
`
const StyledLi = styled.li`
    opacity: 0;
    width: 0px;
    height: 0px;
    @media(min-width: 356px) {
        opacity: 1;
        width: 40px;
        height: 40px;
        margin-right: 5px;

    }
`