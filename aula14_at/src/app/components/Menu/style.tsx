
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color:${ props => props.theme.colors.secondaryColor};
    color: ${ props => props.theme.colors.textColor};
`