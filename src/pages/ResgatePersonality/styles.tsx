import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f4f4f4;
    border-color: #fae13d;
    border-top-width: 5px;
    margin-bottom: 30px;
`;

export const Header = styled.View`
    justify-content: center;
    height: 50px;
    padding-left: 16px;
`;

export const Title = styled.Text`
    color: #666;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ContainerActions = styled.View`
    margin-bottom: 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    height: 50px;
    position: absolute;
    bottom: 0;
    background-color: #FAE13D;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    color: #005AA5;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;
