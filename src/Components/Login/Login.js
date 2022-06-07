import '../Login/Login-style'
import { useNavigate } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Main, Logo } from '../Login/Login-style';
import { useContext } from 'react';
import InfosContext from '../Contexts/InfosContext';
import { Input } from '../Input/Input'
import { useState } from 'react';
import axios from 'axios';



function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setToken } = useContext(InfosContext)

    function signUp(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'

        const promise = axios.post(URL, body)

        promise.then((response) => {
            setToken(response.data.token)
            { (response.data.membership === null) ? navigate('/subscriptions') : navigate('/home') }
        })
        promise.catch((err) => alert('Deu erro!'))
    }

    return (

        <Container>
            <Main>
                <Logo>
                    <h1>Driven <GoPlus size={50} color='#FF4791' /></h1>
                </Logo>
                <form onSubmit={signUp}>
                    <Input placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input placeholder='Senha' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Button>ENTRAR</Button>
                </form>
                <p onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</p>
            </Main>
        </Container>
    );
}

export default Login;
