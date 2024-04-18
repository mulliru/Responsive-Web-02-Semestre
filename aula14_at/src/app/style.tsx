import styled from 'styled-components';

export const Container = styled.div`
    background: ${ props => props.theme.colors.primaryColor};
    height: 100vh;
    h1{
        color: ${ props => props.theme.colors.textColor};
    }
`;