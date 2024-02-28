import React from "react";
import { Container, LogoContainer, TitleContainer } from "./styles";

function Header(){
    return (
        <Container>
            <LogoContainer>
                <img src="https://dog.ceo/img/dog-api-logo.svg" alt="Dog Search Main Img" />
            </LogoContainer>
            <TitleContainer>
                <h1>Dog Search</h1>
            </TitleContainer>
        </Container>
    )
}

export default Header