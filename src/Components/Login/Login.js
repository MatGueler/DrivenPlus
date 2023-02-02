import '../Login/Login-style';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Main, Logo } from '../Login/Login-style';
import { useContext } from 'react';
import logo from '../../Assets/Images/logo.png';
import InfosContext from '../Contexts/InfosContext';
import { Input } from '../Input/Input';
import { useState } from 'react';
import axios from 'axios';

function Login() {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setToken, setInfos } = useContext(InfosContext);

	function signUp(event) {
		event.preventDefault();
		const body = {
			email,
			password,
		};
		const URL = `${process.env.REACT_APP_BACK_END_URL}/auth/login`;

		const promise = axios.post(URL, body);

		promise.then((response) => {
			setToken(response.data.token);
			setInfos(response.data.membership);
			{
				response.data.membership === null
					? navigate('/subscriptions')
					: navigate('/home');
			}
		});
		promise.catch((err) => alert('Deu erro!'));
	}

	return (
		<Container>
			<Main>
				<Logo>
					<img src={logo} alt='' />
				</Logo>
				<form onSubmit={signUp}>
					<Input
						placeholder='E-mail'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
					<Input
						placeholder='Senha'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
					<Button>ENTRAR</Button>
				</form>
				<p onClick={() => navigate('/sign-up')}>
					Não possuí uma conta? Cadastre-se
				</p>
			</Main>
		</Container>
	);
}

export default Login;
