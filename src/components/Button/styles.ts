import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding: 16px;
    background-color: #61eafb;
    width: ${RFValue(300)}px;
    border-radius: 10px;
    align-items: center;
    margin-top: 16px;
`;
