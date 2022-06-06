import { Main, Logo, Info, Benefits, Price, Form, Card } from './Buy-style'
import { Container } from "../Container/Container"
import { FaMoneyBillWave } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { Input } from "../Input/Input";
import { Button } from '../Button/Button';



function Buy() {

    return (
        <Container>
            <Main>
                <Logo>
                    <h1>D+</h1>
                    <h2>Driven Plus</h2>
                </Logo>
                <Info>
                    <Benefits>
                        <h1><Icon icon="fluent:clipboard-task-list-rtl-24-regular" color='#FF4791' /> Benefícios</h1>
                        <ol>
                            <li>Brindes exclusivos</li>
                            <li>Materiais bônus de web</li>
                        </ol>
                    </Benefits>
                    <Price>
                        <h1><FaMoneyBillWave color='#FF4791' /> Preço</h1>
                        <h2>R$ 39,99</h2>
                    </Price>
                </Info>
                <Form>
                    <Input placeholder='Nome impresso no cartão'/>
                    <Input placeholder='Digitos do cartão'/>
                    <Card>
                        <input placeholder='Código de segurança'/>
                        <input placeholder='Validade'/>
                    </Card>
                    <Button>ASSINAR</Button>
                </Form>
            </Main>
        </Container>
    )
}

export default Buy;