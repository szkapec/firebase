import React, { Component } from 'react'
import styled from 'styled-components';
import fb from '../../assets/facebook.PNG';
import yt from '../../assets/youtube.PNG';
import linkedin from '../../assets/linkedin.PNG';
import instagram from '../../assets/instagram.PNG';
import twitter from '../../assets/twitter.PNG';


  const StyledFooter = styled.div`
        float: right;
        margin-right: 5px;
        height: 0px;
        filter: grayscale(90%);

  `

  const StyledfooterImg = styled.img`
    height: 20px;
    border-radius: 15px;
    filter: grayscale(90%);
    margin: 5px 5px;
    :hover {
        filter: grayscale(0%);
        transition: 1s;
  }
    @media(min-width: 450px){
        height: 25px;
    }
    @media(min-width: 600px){
        height: 30px;
    }
  `



const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #d7d2ce;
    height: 40px;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.75);
`
const StyledCopyright = styled.span`
    margin: 10px;
    font-size: 9px;
    @media(min-width: 450px) {
        font-size: 12px;
        margin-left: 20px;
    }
    @media(min-width: 600px){
        font-size: 16px;
        margin-left: 100px;
    }
`


export default class Footer extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledCopyright>
                Copyright@2019 Mateusz Kaproń
                </StyledCopyright>
                <StyledFooter className="footer--img">
                    <a href="https://www.facebook.com/mateusz.kapron.50"><StyledfooterImg className="footer--icons" src={fb} alt="fb"/></a>
                    <a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><StyledfooterImg className="footer--icons" src={yt} alt="yt"/></a>
                    <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><StyledfooterImg className="footer--icons" src={linkedin} alt="linkedin"/></a>
                    <StyledfooterImg className="footer--icons" src={instagram} alt="instagram"/>
                    <StyledfooterImg className="footer--icons" src={twitter} alt="twitter"/>
                </StyledFooter>

            </StyledContainer>
        )
    }
}

