import styled, { css } from 'styled-components'

export const Title = styled.h1`
/* destructuring 'theme' from 'prop'...? */
    ${({ theme }) => css`
        color: ${theme.colors.white};
        margin-top: 0;
        text-align: center;
    `}
`