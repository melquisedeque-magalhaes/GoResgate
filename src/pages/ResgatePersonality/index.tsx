import React, {useState, useEffect, useRef, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as Yup from 'yup';

import {
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
    Alert,
    SafeAreaView,
} from 'react-native';

import {Container, Title, Header, ContainerActions} from './styles';

import Investment from '../../components/Investment';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErros';

import api from '../../services/api';

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

const ResgatePersonality: React.FC = () => {
    const [investments, setInvestments] = useState<InvestmentProps[]>([]);
    const [nomeInvestment, setNomeInvestment] = useState('');
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        api.get('v2/5e76797e2f0000f057986099')
            .then((response) =>
                setInvestments(response.data.response.data.listaInvestimentos),
            )
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, []);

    AsyncStorage.getItem('Nome').then((response) =>
        setNomeInvestment(response),
    );

    const formRef = useRef<FormHandles>(null);

    const investmentFind = investments.find(
        (investment) => investment.nome === nomeInvestment,
    );

    const HandleSubmit = useCallback(async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                value: Yup.number().required('Valor é Obrigatório').max(),
            });

            await schema.validate(data, {abortEarly: false});
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            Alert.alert(
                'Error na Autenticação',
                'Ocorreu um erro ao fazer login, cheque as credenciais',
            );
        }
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{flex: 1}}>
                <Container>
                    <Header>
                        <Title>DADOS DO INVESTIMENTO</Title>
                    </Header>

                    <Investment keyData="Nome" value={investmentFind?.nome} />
                    <Investment
                        keyData="Saldo Total Disponivel"
                        value={investmentFind?.saldoTotalDisponivel}
                    />

                    <Header>
                        <Title>RESGATE DO SEU JEITO</Title>
                    </Header>

                    {investmentFind?.acoes.map((action) => (
                        <ContainerActions key={action.id}>
                            <Investment keyData="Ação" value={action.nome} />
                            <Investment
                                keyData="Saldo Total Disponivel"
                                value={
                                    (investmentFind?.saldoTotalDisponivel *
                                        action.percentual) /
                                    100
                                }
                            />
                            <Form onSubmit={HandleSubmit} ref={formRef}>
                                <Input
                                    keyboardType="decimal-pad"
                                    name="value"
                                    placeholder="Valor a resgatar"
                                />
                            </Form>
                        </ContainerActions>
                    ))}
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ResgatePersonality;
