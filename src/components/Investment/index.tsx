import React from 'react';

import {Container, TitleInvestment, TitleInvestmentData} from './styles';

import formatValue from '../../utils/formatValue';

interface InvestmentProps {
    keyData: string;
    value: number | string | undefined;
}

const Investment: React.FC<InvestmentProps> = ({keyData, value}) => {
    return (
        <Container>
            <TitleInvestment>{keyData}</TitleInvestment>
            <TitleInvestmentData>
                {typeof value === 'number' ? formatValue(value) : value}
            </TitleInvestmentData>
        </Container>
    );
};

export default Investment;
