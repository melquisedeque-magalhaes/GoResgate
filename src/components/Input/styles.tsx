import styled, {css} from 'styled-components/native';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    background: #fff;
    border-radius: 10px;
    height: 40px;
    margin-bottom: 8px;
    padding: 0 16px;
    border-width: 2px;
    border-color: #fff;

    flex-direction: row;
    align-items: center;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            border-color: #ff9000;
        `}
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 14px;
    color: #373737;
`;
