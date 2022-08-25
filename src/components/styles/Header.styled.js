import styled from "styled-components";

//now a component which is a div and this div have some css applied to it

/* NOTICE */
// DESTRUCTURE PROPS => background-color: ${ ({ bg }) => bg } is same as background-color: ${ (props) => props.bg };
export const StyledHeader = styled.header`
    background-color: ${ ({ theme }) => theme.colors.header };
    padding: 40px 0;
`
/* Nesting */
/* 
    h1 {
        color: red
    }

    Nesting is -> place this in ubove string. you'll notice that the h1 inside StyledHeader will have a red color. The h1 inside Container won't be affected by this. 
*/

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`