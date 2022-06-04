import '../Login/Login-style'
import { GoPlus } from 'react-icons/go';
import { Button } from '../Button/Button';
import { Container, Main, Input, Logo } from '../Login/Login-style';

function Login() {
    return (

        <Container>
            <Main>
                <Logo>
                    <h1>Driven <GoPlus size={50} color='#FF4791' /></h1>
                </Logo>
                <form>
                    <Input placeholder='E-mail' />
                    <Input placeholder='Senha' />
                    <Button>ENTRAR</Button>
                </form>
                <p>Não possuí uma conta? Cadastre-se</p>
            </Main>
        </Container>
    );
}

export default Login;
