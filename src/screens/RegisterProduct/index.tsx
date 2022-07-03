import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from '../../components/Button';
import { DescriptionProduct } from '../../components/DescriptionProduct';
import { TextField } from '../../components/TextField';
import { Helper } from '../../helper';
import { ProductContext } from '../../hooks/ProductContext/ProductContextProvider';
import { RootStackParamList } from '../../routes';
import { AboutProduct, Container, RegisterPrice } from './styles';
import { IViewModel, ViewModel } from './viewModel';

interface RegisterProductProps {
}

type RegisterScreenProp = StackNavigationProp<RootStackParamList, 'RegisterProduct'>;

export function RegisterProduct({ }: RegisterProductProps) {

  const { product, setProduct } = useContext(ProductContext)
  const [price, setPrice] = useState<number>()
  const viewModel: IViewModel = new ViewModel()
  const navigator = useNavigation<RegisterScreenProp>()

  function didChangeText(price: string) {
    let formattedPrice = Number(price.replace(',', '.'))
    setPrice(formattedPrice)
  }

  function didSubmitRegisteredProduct() {
    setProduct({ ...product, price })
    viewModel.submitRegisteredProductValidation({ ...product, price })
  }

  viewModel.onFailureRegisterProduct = message => {
    alert(message)
  }

  viewModel.onSuccessRegisterProduct = message => {
    navigator.pop()
  }

  return (
    <Container>
      <SafeAreaView />
      <AboutProduct >
        <DescriptionProduct title='Nome do produto' description={product.name} />
        <DescriptionProduct title='Código EAN' description={product.ean} />
        <DescriptionProduct title='Preço' description={product.price ? Helper.INSTANCE.numberFormatToCurrency(product.price) : 'Não cadastrado'} />
      </AboutProduct>
      <RegisterPrice>
        {
          product.price ? (
            <>
              <Text children="Produto ja cadastrado!" />
              <Button title='Verificar outro produto' didTapButton={() => navigator.pop()} />
            </>
          ) : (
            <>
              <TextField title='Cadastrar preço' didChangeText={didChangeText} />
              <Button title='Cadastrar' didTapButton={didSubmitRegisteredProduct} />
            </>
          )
        }
      </RegisterPrice>
      <SafeAreaView />
    </Container>
  );
}
