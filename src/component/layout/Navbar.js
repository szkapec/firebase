import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import styled from 'styled-components';
import { connect } from 'react-redux';
const Navbar = (props) => {

    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (

        <StyledNav className="nav">
            <div className="container">
                { links }
            </div>
        </StyledNav>
    )
}
const mapStateToProps = (state,up) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}
export default connect(mapStateToProps)(Navbar);

const StyledNav = styled.nav`
    background-color: #d7d2ce;
`