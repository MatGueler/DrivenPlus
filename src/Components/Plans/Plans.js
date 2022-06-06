import { Container } from "../Container/Container";
import { Main, Types, Plan, Logo } from "./Plans-style";




function Plans() {

    return (
        <Container>
            <Main>
                <h1>
                    Escolha seu plano
                </h1>
                <Types>
                    <Plan>
                        <Logo>
                            <h2>D+</h2>
                        </Logo>
                        <p>R$ 69,99</p>
                    </Plan>
                    <Plan>
                        <Logo>
                            <h2>D+</h2>
                        </Logo>
                        <p>R$ 69,99</p>
                    </Plan>
                    <Plan>
                        <Logo>
                            <h2>D+</h2>
                        </Logo>
                        <p>R$ 69,99</p>
                    </Plan>
                </Types>
            </Main>
        </Container>
    )
}

export default Plans;