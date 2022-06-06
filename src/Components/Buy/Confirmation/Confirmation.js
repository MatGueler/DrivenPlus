import { Background, Confirm, Buttons, Close } from "./Confirmation-style";
import { GrFormClose } from 'react-icons/gr';

function Confirmation() {

    return (
        <Background>
            <Close>
                <GrFormClose size={30}/>
            </Close>
            <Confirm>
                <p>
                    Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?
                </p>
                <Buttons>
                    <button>NÃO</button>
                    <button>SIM</button>
                </Buttons>
            </Confirm>
        </Background>
    )
}

export default Confirmation;