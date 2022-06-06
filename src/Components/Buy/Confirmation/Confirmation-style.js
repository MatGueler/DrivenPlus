import styled from 'styled-components'

export const Background = styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
align-items: center;
background-color: rgba(0,0,0,0.5);
z-index: 1;
`

export const Close = styled.button`
width: 30px;
height: 30px;
position: absolute;
top: 20px;
right: 20px;
display: flex;
justify-content: center;
align-items: center;
`

export const Confirm = styled.div`
width: 100%;
height: 210px;
display: flex;
flex-direction: column;
margin: 0 50px;
border-radius: 10px;
background-color: #FFFFFF;

p {
    font-size: 18px;
    text-align: center;
    margin: 40px 0;
}
`

export const Buttons = styled.div`
display: flex;
display: flex;
justify-content: space-around;

button {
    width: 40%;
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #FF4791;
    cursor: pointer;
}
`