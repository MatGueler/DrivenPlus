import {
	Container,
	Menu,
	Logo,
	Profile,
	Advantage,
	Changes,
	Main,
	Cancel,
} from './Home-style';
import { useContext } from 'react';
import InfosContext from '../Contexts/InfosContext';
import { FaUserCircle } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeletPlan({ token, navigate }) {
	const URL = `${process.env.REACT_APP_BACK_END_URL}/subscriptions`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const promise = axios.delete(URL, config);

	promise
		.then((response) => {
			navigate('/subscriptions');
		})
		.catch((err) => alert(err));
}

function Home() {
	const { token, infos } = useContext(InfosContext);

	let navigate = useNavigate();

	return (
		<Container>
			<Menu>
				<Logo>
					<img src={infos.image} alt='' />
				</Logo>
				<Profile>
					<FaUserCircle size={40} color='#FFFFFF' />
				</Profile>
			</Menu>
			<Main>
				<Advantage>
					{infos.perks.map((item, index) => (
						<Button key={index}>{item.title}</Button>
					))}
				</Advantage>
				<Changes>
					<Button
						onClick={() => {
							navigate('/subscriptions');
						}}>
						Mudar plano
					</Button>
					<Cancel
						color='#FF4747'
						onClick={() => DeletPlan({ token, navigate })}>
						Cancelar plano
					</Cancel>
				</Changes>
			</Main>
		</Container>
	);
}

export default Home;
