import React from 'react'
import moment from 'moment';
import styled from 'styled-components';

const Notifications = (props) => {
    const {notyfications, clickNot} = props;
    const width = window.screen.width;

    return (
        <>
        {clickNot || width>600 ? <StyledContainer clickNot={clickNot} className="section">
            <StyledComponentContainer className="card z-depth-10">
                <div className="card-content">
                    <span className="card-title">Notyfikacje</span>
                    <ul className="notyfications">
                        {notyfications && notyfications.map(item => {
                            return (
                                    <li key={item.id}>
                                        <span className="pink-text">{item.user}</span>
                                        <span> - {item.content}</span>
                                        <div className="blue-text">{item.title && `Tytuł: ${item.title}`}</div>
                                        <div className="grey-text note-date">
                                        <p className="grey-text">{moment(item.time.toDate().toString()).fromNow()}</p>
                                        <hr></hr>
                                        </div>
                                    </li>
                            )
                        })}
                    </ul>
                </div>
            </StyledComponentContainer>
        </StyledContainer> : null}
        

        </>
    )
}
export default Notifications;

const StyledComponentContainer = styled.div`
 background-color: #ffd2aa;
 border-radius: 10px;
`
const StyledContainer = styled.div`

    @media(max-width:600px) {
        position: relative;
        animation-name: anime;
        animation-duration: 2s;
        width: 80%;
        margin: 20px auto;
        @keyframes anime {
            0%   {transform:translateX(100%)}
            100% {transform:translateX(0%)}
          
        }
    }
    @media(min-width: 600px) {
        width: 250px;
        position: absolute;
        right: 20px;
    }
    @media(min-width:1200px) {
        left: 900px;
    }

    @media(min-width:1500px) {
        left: 1200px;
    }
`
