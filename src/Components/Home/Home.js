import { Container, Menu, Logo, Profile, Advantage, Changes, Main, Cancel } from "./Home-style";
import { useEffect, useContext, useState } from "react";
import InfosContext from "../Contexts/InfosContext";
import normal from '../../Assets/Images/normal.png'
import { FaUserCircle } from 'react-icons/fa';
import { Button } from "../Button/Button";
import axios from "axios";



function Home() {

    const { token, infos } = useContext(InfosContext);

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
                    <Button>Mudar plano</Button>
                    <Cancel color='#FF4747'>Cancelar plano</Cancel>
                </Changes>
            </Main>

        </Container>
    )
}

export default Home;