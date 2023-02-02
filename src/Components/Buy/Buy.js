import { Main, Logo, Info, Benefits, Price, Form, Card } from './Buy-style';
import { Container } from '../Container/Container';
import { FaMoneyBillWave } from 'react-icons/fa';
import Confirmation from './Confirmation/Confirmation';
import { Icon } from '@iconify/react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useContext, useState, useEffect } from 'react';
import InfosContext from '../Contexts/InfosContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Buy() {
	const [cardName, setCardName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [securityNumber, setSecurityNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [confirm, setConfirm] = useState(true);
	const [body, setBody] = useState('');
	const { token, idPlan, setInfos } = useContext(InfosContext);
	const [plan, setPlan] = useState('');

	let navigate = useNavigate();

	function SignPlan(event) {
		event.preventDefault();

		const body = {
			membershipId: idPlan,
			cardName,
			cardNumber,
			securityNumber,
			expirationDate,
		};

		setBody(body);
		setConfirm(!confirm);
	}

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_BACK_END_URL}/subscriptions/memberships/${idPlan}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				setPlan(res.data);
			})
			.catch((err) => {
				alert('Erro na busca do plano');
				navigate('/');
				console.log(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Main>
				<Logo>
					<img src={plan.image} alt='' />
					<h2>{plan.name}</h2>
				</Logo>
				<Info>
					<Benefits>
						<h1>
							<Icon
								icon='fluent:clipboard-task-list-rtl-24-regular'
								color='#FF4791'
							/>{' '}
							Benefícios
						</h1>
						<ol>
							{plan.perks?.map((perk, index) => (
								<li key={index}>{perk.title}</li>
							))}
						</ol>
					</Benefits>
					<Price>
						<h1>
							<FaMoneyBillWave color='#FF4791' /> Preço
						</h1>
						<h2>{plan.price}</h2>
					</Price>
				</Info>
				<Form onSubmit={SignPlan}>
					<Input
						type='text'
						placeholder='Nome impresso no cartão'
						onChange={(e) => {
							setCardName(e.target.value);
						}}
						value={cardName}
					/>
					<Input
						type='text'
						placeholder='Digitos do cartão'
						onChange={(e) => {
							setCardNumber(e.target.value);
						}}
						value={cardNumber}
					/>
					<Card>
						<input
							type='text'
							placeholder='Código de segurança'
							onChange={(e) => {
								setSecurityNumber(e.target.value);
							}}
							value={securityNumber}
						/>
						<input
							type='text'
							placeholder='Validade'
							onChange={(e) => {
								setExpirationDate(e.target.value);
							}}
							value={expirationDate}
						/>
					</Card>
					<Button>ASSINAR</Button>
				</Form>
			</Main>
			{confirm ? (
				''
			) : (
				<Confirmation
					confirm={confirm}
					setConfirm={setConfirm}
					body={body}
					token={token}
					setInfos={setInfos}
				/>
			)}
		</Container>
	);
}

export default Buy;
