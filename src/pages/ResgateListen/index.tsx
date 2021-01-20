import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
    Container,
    Header,
    HeaderTitle,
    ContainerInvestment,
    TitleInvestment,
    DescriptionInvestment,
    Value,
} from './styles';

interface ActionsProps {
    id: string;
    nome: string;
    percentual: number;
}

interface InvestmentProps {
    nome: string;
    objetivo: string;
    saldoTotalDisponivel: number;
    indicadorCarencia: 'S' | 'N';
    acoes: ActionsProps[];
}

const Listen: React.FC = () => {
    const [investments, setInvestments] = useState<InvestmentProps[]>([]);

    useEffect(() => {
        api.get('v2/5e76797e2f0000f057986099')
            .then((response) =>
                setInvestments(response.data.response.data.listaInvestimentos),
            )
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, []);

    const navigation = useNavigation();

    async function navigationRoutes(nome: string) {
        await AsyncStorage.setItem('Nome', nome);
        navigation.navigate('Personality');
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>Investimentos</HeaderTitle>
                <HeaderTitle>R$</HeaderTitle>
            </Header>
            {investments.map((investment, index) => (
                <ContainerInvestment
                    key={index}
                    onPress={() => navigationRoutes(investment.nome)}
                    isDisabled={
                        investment.indicadorCarencia === 'S' ? true : false
                    }>
                    <View>
                        <TitleInvestment>{investment.nome}</TitleInvestment>
                        <DescriptionInvestment>
                            {investment.objetivo}
                        </DescriptionInvestment>
                    </View>
                    <Value>
                        {formatValue(investment.saldoTotalDisponivel)}
                    </Value>
                </ContainerInvestment>
            ))}
        </Container>
    );
};

export default Listen;
