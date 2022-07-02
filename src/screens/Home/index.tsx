import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { AboutProduct, Container, Scanner } from './styles';
import { HomeViewModel, IHomeViewModel } from './viewModel';
import ScannerBorder from '../../assets/scanner-border.svg'
import { DescriptionProduct } from '../../components/DescriptionProduct';
import { CosmosProduct } from '../../models/CosmosProduct';
import { Product } from '../../models/Product';

export function Home() {

  const viewModel: IHomeViewModel = new HomeViewModel()
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanned, setScanned] = useState(false);
  const [product, setProduct] = useState<Product>(null)

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

  function didBarCodeScanned(product: CosmosProduct) {
    setProduct({ ean: product.gtin.toString(), name: product.description })
  }

  function didFailureGetProducts(message: string) {
    alert(message)
  }

  function didShowAboutProduct() {
    if (product) {
      return (<AboutProduct >
        <DescriptionProduct title='Nome do produto' description={product.name} />
        <DescriptionProduct title='Código EAN' description={product.ean} />
        <DescriptionProduct title='Preço' description={product.price ? product.price.toString() : 'Não cadastrado'} />
      </AboutProduct>)
    } else {
      return <></>
    }
  }

  function didScanned() {
    if (!isScanned) {
      return (<Scanner
        onBarCodeScanned={
          isScanned ? undefined : data => viewModel
            .handleBarCodeScanned(data, isScanned => setScanned(isScanned), didBarCodeScanned, didFailureGetProducts)
        }
      >
        <ScannerBorder width={360} height={360} />
      </Scanner>)
    } else {
      return <></>
    }
  }

  return (
    <Container>
      {didScanned()}
      {didShowAboutProduct()}
      {isScanned && <Button title={'Clique para scanear novamente'} onPress={() => {
        setScanned(false)
        setProduct(null)
      }} />}
    </Container>
  );
}