import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView)``;

export const AboutProduct = styled.View`
    width: ${RFValue(300)}px;
    margin-top: 20px;
    justify-content: space-between;
    margin-bottom: 40px;
    align-self: center;
`

export const RegisterPrice = styled.View`
    width: ${RFValue(300)}px;
    justify-content: space-between;
    align-self: center;
`