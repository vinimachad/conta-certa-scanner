import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductProvider } from "../hooks/ProductContext/ProductContextProvider";
import { Home } from "../screens/Home";
import { RegisterProduct } from "../screens/RegisterProduct";

export type RootStackParamList = {
    Home: undefined;
    RegisterProduct: undefined;
};

export function NavigationFlow() {

    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer >
            <ProductProvider>
                <Stack.Navigator >
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="RegisterProduct" component={RegisterProduct} options={{ title: 'Produto' }} />
                </Stack.Navigator>
            </ProductProvider>
        </NavigationContainer>
    );
}