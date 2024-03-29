import { Container } from '../Container/Container';
import { Main, Types, Plan, Logo } from './Plans-style';
import { useEffect, useContext, useState } from 'react';
import InfosContext from '../Contexts/InfosContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPlan({ item }) {
	let navigate = useNavigate();
	const { setIdPlan } = useContext(InfosContext);

	return (
		<Plan
			onClick={() => {
				setIdPlan(item.id);
				navigate(`/subscriptions/${item.id}`);
			}}>
			<Logo>
				<img src={item.image} alt={item.id} />
			</Logo>
			<p>R$ {item.price}</p>
		</Plan>
	);
}

function Plans() {
	const { token } = useContext(InfosContext);

	const [plans, setPlans] = useState([]);

	useEffect(() => {
		const URL = `${process.env.REACT_APP_BACK_END_URL}/subscriptions/memberships`;

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const promise = axios.get(URL, config);

		promise
			.then((response) => setPlans(response.data))
			.catch((err) => alert('Deu erro!'));
	}, []);

	return (
		<Container>
			<Main>
				<h1>Escolha seu plano</h1>
				<Types>
					{plans.map((item, index) => (
						<AddPlan key={index} item={item} />
					))}
				</Types>
			</Main>
		</Container>
	);
}

export default Plans;
