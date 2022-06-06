import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    h1 {
        font-size: 70px;
        color: #FFFFFF;
    }

    h2 {
        font-size: 32px;
        color: #FFFFFF;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Benefits = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    h1 {
        color: #FFFFFF;
        margin: 10px 0;
    }

    ol li {
        list-style: number;
        color: #FFFFFF;
        margin-left: 20px;
    }
`

export const Price = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin: 10px 0;
        color: #FFFFFF;
    }

    h2 {
        color: #FFFFFF;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

input {
    width: 47%;
    height: 50px;
    border: 0;
    border-radius: 10px;
}
`