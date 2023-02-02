import { Background, Confirm, Buttons, Close } from './Confirmation-style';
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Confirmation({ confirm, setConfirm, body, token, setInfos }) {
	let navigate = useNavigate();

	function Finish() {
		const URL = `${process.env.REACT_APP_BACK_END_URL}/subscriptions`;

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const promise = axios.post(URL, body, config);

		promise
			.then((response) => {
				setInfos(response.data.membership);
				navigate('/home');
			})
			.catch((err) => console.log(err));
	}

	return (
		<Background>
			<Close>
				<GrFormClose size={30} />
			</Close>
			<Confirm>
				<p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
				<Buttons>
					<button
						onClick={() => {
							setConfirm(!confirm);
						}}>
						NÃO
					</button>
					<button onClick={Finish}>SIM</button>
				</Buttons>
			</Confirm>
		</Background>
	);
}

export default Confirmation;
