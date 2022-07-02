import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    padding-bottom: ${RFValue(2)}px;
`

export const Description = styled.Text`
    font-weight: 700;
    font-size: ${RFValue(14)}px;
    padding-bottom: ${RFValue(6)}px;
    text-transform: capitalize;
`
