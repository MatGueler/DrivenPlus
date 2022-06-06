import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;

h1 {
    font-size: 32px;
    color: #FFFFFF;
    margin: 20px 0;
    font-weight: bold;
}
`

export const Types = styled.div`
    display: flex;
    flex-direction: column;
`

export const Plan = styled.div`
    height: 180px;
    display: flex;
    border: solid 1px #7e7e7e;
    border-radius: 10px;
    margin: 0 0 20px 0;
    cursor: pointer;
    
    Plan:hover {
        background-color: red;
    }

p {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: bold;
}
`

export const Logo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
h2 {
    font-size: 80px;
}
`