import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text } from 'react-native';
import { HomeViewModel, IHomeViewModel } from './viewModel';
import ScannerBorder from '../../assets/scanner-border.svg'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Container, Scanner } from './styles';
import { ProductContext } from '../../hooks/ProductContext/ProductContextProvider';
import { Product } from '../../models/Product';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {

  const [hasPermission, setHasPermission] = useState(null);
  const [isScanned, setScanned] = useState(false);
  const { setProduct } = useContext(ProductContext)

  const navigation = useNavigation<homeScreenProp>()
  const viewModel: IHomeViewModel = new HomeViewModel()

  useEffect(() => {
    bind()
  }, []);

  function bind() {

    viewModel.requestCameraPermission().then((status) => {
      setHasPermission(status === 'granted');
    })

    viewModel.hasPermissionToShowCamera(hasPermission, () => {
      return <Text children="Não tem permissão" />
    })
  }

  function didBarCodeScanned({ ean, name, price }: Product) {
    setProduct({ ean, name, price })
    setScanned(false)
    navigation.navigate('RegisterProduct')
  }

  function didFailureGetProducts(message: string) {
    alert(message)
  }

  function didScanned() {
    return (<Scanner
      onBarCodeScanned={
        isScanned ? undefined : data => viewModel
          .handleBarCodeScanned(data, isScanned => setScanned(isScanned), didBarCodeScanned, didFailureGetProducts)
      }
    >
      <ScannerBorder width={360} height={360} />
    </Scanner>)
  }

  return (
    <Container>
      <SafeAreaView />
      {didScanned()}
      <SafeAreaView />
    </Container>
  );
}