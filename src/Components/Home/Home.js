import { Container, Menu, Logo, Profile, Advantage, Changes, Main, Cancel } from "./Home-style";
import { useContext } from "react";
import InfosContext from "../Contexts/InfosContext";
import { FaUserCircle } from 'react-icons/fa';
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";



function Home() {

    const { token, infos } = useContext(InfosContext);

    console.log(infos.image)

    let navigate = useNavigate()

    return (
        <Container>
            <Menu>
                <Logo>
                    <img src={infos.image} />
                </Logo>
                <Profile>
                    <FaUserCircle size={40} color='#FFFFFF' />
                </Profile>
            </Menu>
            <Main>
                <Advantage>
                    {(infos.perks).map((item, index) => <Button key={index}>{item.title}</Button>)}
                </Advantage>
                <Changes>
                    <Button onClick={() => { navigate('/subscriptions') }}>Mudar plano</Button>
                    <Cancel color='#FF4747'>Cancelar plano</Cancel>
                </Changes>
            </Main>

        </Container>
    )
}

export default Home;