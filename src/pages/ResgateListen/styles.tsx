import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface TouchableType extends TouchableOpacityProps {
    isDisabled: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #f4f4f4;
    border-color: #fae13d;
    border-top-width: 5px;
`;

export const Header = styled.View`
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
`;

export const HeaderTitle = styled.Text`
    color: #666;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ContainerInvestment = styled.TouchableOpacity<TouchableType>`
    background-color: #fff;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
    border-color: #ccc;
    border-bottom-width: 1px;
    opacity: ${(props) => (props.isDisabled ? '0.2' : '1')};
`;

export const TitleInvestment = styled.Text`
    color: #373737;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
`;

export const DescriptionInvestment = styled.Text`
    color: #666;
    font-size: 12px;
    text-transform: capitalize;
`;

export const Value = styled.Text`
    color: #373737;
    font-size: 14px;
    font-weight: 700;
`;
