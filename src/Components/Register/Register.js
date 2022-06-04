import '../Login/Login-style'
import { Button } from '../Button/Button';
import { Container, Main, Input } from '../Login/Login-style';

function Register() {
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
                <p>Já possuí uma conta? Entre</p>
            </Main>
        </Container>
    );
}

export default Register;
