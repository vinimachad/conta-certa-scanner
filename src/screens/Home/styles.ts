import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Scanner = styled(BarCodeScanner)`
    height: ${RFValue(290)}px;
    width: ${RFValue(290)}px;
    display: flex;
    align-items: center;
    justify-content: center;
`


