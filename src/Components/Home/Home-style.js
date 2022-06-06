import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
justify-content: center;
`

export const Menu = styled.div`
width: 100%;
position: absolute;
top: 0;
padding: 20px 20px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
`

export const Logo = styled.div`
display: flex;
align-items: flex-end;
margin-top: 20px;
font-size: 60px;
color: #FFFFFF;
`

export const Profile = styled.div`
display: flex;
`
export const Main = styled.div`
width: 100%;
margin: 150px 40px 20px 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const Advantage = styled.div`
display: flex;
flex-direction: column;

`

export const Changes = styled.div`
display: flex;
flex-direction: column;
`

export const Cancel = styled.button`
height: 50px;
margin-bottom: 10px;
font-size: 14px;
font-weight: bold;
border: 0;
border-radius: 10px;
color: #FFFFFF;
background-color: ${(props) => props.color};
cursor: pointer;
`