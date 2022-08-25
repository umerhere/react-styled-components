
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div, //direct div, very next child
  & > ul { //direct div, very next child
    flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`