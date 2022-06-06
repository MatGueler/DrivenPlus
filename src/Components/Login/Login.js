import '../Login/Login-style'
import { useNavigate } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Main, Logo } from '../Login/Login-style';
import { Input } from '../Input/Input'

function Login() {
        let navigate = useNavigate()
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
                    <p onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</p>
                </Main>
            </Container>
        );
    }

export default Login;
