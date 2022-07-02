import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Scanner = styled(BarCodeScanner)`
    height: ${RFValue(290)}px;
    width: ${RFValue(290)}px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AboutProduct = styled.View`
    width: ${RFValue(300)}px;
    margin-top: 20px;
    justify-content: space-between;
    margin-bottom: 40px;
`
