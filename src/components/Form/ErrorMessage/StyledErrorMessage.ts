import styled from 'styled-components'

type props = {
    success?: boolean
}

export const StyledErrorMessage = styled.p<props>`
    font-weight: ${props => props.success ? '800;' : '400;'};
    color: ${props=> props.success ? 'green;' : 'red;'}
    padding-bottom: 1.5rem;
    // margin-top: -1rem;
    margin-top: ${props => props.success ? '1rem;' : '-1rem;'};
`