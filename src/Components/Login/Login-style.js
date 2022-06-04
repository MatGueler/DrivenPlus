import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`

export const Logo = styled.div`
display: flex;
`

export const Main = styled.div`
width: 100%;
margin: 40px;

h1 {
width: 100%;
font-size: 80px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 50px;
}

form {
display: flex;
flex-direction: column;
}

p {
width: 100%;
text-align: center;
color: #FFFFFF;
margin: 20px 0;
text-decoration: underline;
cursor: pointer;
}
`

export const Input = styled.input`
height: 50px;
border: 0;
border-radius: 10px;
margin-bottom: 10px;
`