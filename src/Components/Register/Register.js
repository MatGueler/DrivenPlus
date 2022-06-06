import '../Login/Login-style'
import { Button } from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { Main } from '../Login/Login-style';
import { Input } from '../Input/Input';
import { Container } from '../Container/Container';

function Register() {
    let navigate = useNavigate();
    return (

        <Container>
            <Main>
                <form>
                    <Input placeholder='Nome' />
                    <Input placeholder='CPF' />
                    <Input placeholder='E-mail' />
                    <Input placeholder='Senha' />
                    <Button>CADASTRAR</Button>
                </form>
                <p onClick={() => navigate('/')}>Já possuí uma conta? Entre</p>
            </Main>
        </Container>
    );
}

export default Register;
