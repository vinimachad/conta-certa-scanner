import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';
import { CosmosProduct } from '../../models/CosmosProduct';
import { Product } from '../../models/Product';
import { api } from '../../services/api';
import { cosmosApi } from '../../services/cosmosApi';

export interface IHomeViewModel {
    requestCameraPermission(): Promise<PermissionStatus>
    hasPermissionToShowCamera(hasPermission: boolean, hasntPermissionCompletion: () => void)
    handleBarCodeScanned(data: any, onScanned: (isScanned: boolean) => void, success: (product: CosmosProduct) => void, failure: (message: string) => void)
    createProductRequest(data: Product): Promise<void>
}

export class HomeViewModel implements IHomeViewModel {

    private cosmosProduct?: CosmosProduct

    async requestCameraPermission(): Promise<PermissionStatus> {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        return status
    }

    hasPermissionToShowCamera(hasPermission: boolean, hasntPermissionCompletion: () => void) {

        if (hasPermission === false) {
            hasntPermissionCompletion()
            return
        }
    }

    async handleBarCodeScanned({ data }: any, onScanned: (isScanned: boolean) => void, success: (product: CosmosProduct) => void, failure: (message: string) => void) {
        onScanned(true)
        try {
            let res = await cosmosApi.get(`/gtins/${data}`)
            this.cosmosProduct = res.data
            success(this.cosmosProduct);
        } catch (error) {
            failure(error)
        }
    };

    async createProductRequest(data: Product): Promise<void> {
        let res = await api.post('/products', data)
    }
}
