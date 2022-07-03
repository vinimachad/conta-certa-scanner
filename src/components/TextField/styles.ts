import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``

export const Input = styled.TextInput`
    border: 1px solid rgba(0,0,0,0.1);
    background-color: white;
    height: ${RFValue(48)}px;
    border-radius: 10px;
    width: ${RFValue(300)}px;
    margin-top: ${RFValue(10)}px;
    padding: 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
`
