import { Container } from '../Container/Container';
import { useNavigate } from "react-router-dom";
import { Main } from '../Login/Login-style';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';
import '../Login/Login-style'
import axios from 'axios';


function Register() {
    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function Create(body) {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up'
        const promise = axios.post(URL, body)

        promise.then((response) => { 
            console.log(response)
            navigate('/')
        })
            .catch((err) => alert('Deu erro!'))
    }

    function User(event) {
        event.preventDefault();
        const body = {
            email,
            name,
            cpf,
            password
        }
        Create(body)
    }

    return (

        <Container>
            <Main>
                <form onSubmit={User}>
                    <Input type='text' placeholder='Nome' onChange={(e) => { setName(e.target.value) }} value={name} />
                    <Input type='text' placeholder='CPF' onChange={(e) => { setCpf(e.target.value) }} value={cpf} />
                    <Input type='email' placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type='password' placeholder='Senha' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Button type='submit'>CADASTRAR</Button>
                </form>
                <p onClick={() => navigate('/')}>Já possuí uma conta? Entre</p>
            </Main>
        </Container>
    );
}

export default Register;