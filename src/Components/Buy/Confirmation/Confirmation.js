import { Background, Confirm, Buttons, Close } from "./Confirmation-style";
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Confirmation({ confirm, setConfirm, body, token, setInfos }) {

    let navigate = useNavigate();

    function Finish() {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, body, config)

        promise.then((response) => {
            navigate('/home')
            setInfos(response.data)
        })
            .catch((err) => console.log(err))
    }

    return (
        <Background>
            <Close>
                <GrFormClose size={30} />
            </Close>
            <Confirm>
                <p>
                    Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?
                </p>
                <Buttons>
                    <button onClick={() => {
                        setConfirm(!confirm)
                    }}>NÃO</button>
                    <button onClick={Finish}>SIM</button>
                </Buttons>
            </Confirm>
        </Background>
    )
}

export default Confirmation;