import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

export default function Header() {
    return (
        // We have used theme in App.js and used the global header in StyledHeader, alternatively we could use -> <StyledHeader bg="#ebfbff" header="etc" color="etc" ... >
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="image"/>
                    <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>
                            Build the community around you
                        </h1>
                        <p>
                            askdjhasdkj ashkjd ashkjd ashkjd hsakjd haskjd sahkdj hasjd haskjd hsakjd haskbascywvc yvcjgevccwuvwuq ocqwv wqv couwqv chsagv cxas 
                        </p>

                        <Button bg='#ff0099' color="#fff">
                            Start it for free
                        </Button>
                    </div>

                    <Image src="./images/illustration-mockups.svg" alt='image' />

                </Flex>
            </Container>
        </StyledHeader>
    )
}
