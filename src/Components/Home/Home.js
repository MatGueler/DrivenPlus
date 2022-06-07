import { Container, Menu, Logo, Profile, Advantage, Changes, Main, Cancel } from "./Home-style";
import normal from '../../Assets/Images/normal.png'
import { FaUserCircle } from 'react-icons/fa';
import { Button } from "../Button/Button";
import { GoPlus } from 'react-icons/go';


function Home() {

    return (
        <Container>
            <Menu>
                <Logo>
                    <img src={normal} /><GoPlus size={35} color='#FF4791' />
                </Logo>
                <Profile>
                    <FaUserCircle size={40} color='#FFFFFF' />
                </Profile>
            </Menu>
            <Main>
                <Advantage>
                    <Button >Solicitar brindes</Button>
                    <Button >Materiais bônus de web</Button>
                </Advantage>
                <Changes>
                    <Button>Mudar plano</Button>
                    <Cancel color='#FF4747'>Cancelar plano</Cancel>
                </Changes>
            </Main>

        </Container>
    )
}

export default Home;