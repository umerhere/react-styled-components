import { StyledHeader } from './styles/Header.styled';

export default function Header() {
    return (
        // We have used theme in App.js and used the global header in StyledHeader, alternatively we could use -> <StyledHeader bg="#ebfbff" header="etc" color="etc" ... >
        <StyledHeader>
            <h1>Hubble</h1>
        </StyledHeader>
    )
}
