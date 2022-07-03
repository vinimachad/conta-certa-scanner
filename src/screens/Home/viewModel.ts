import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';
import { Product } from '../../models/Product';
import { api } from '../../services/api';

export interface IHomeViewModel {
    requestCameraPermission(): Promise<PermissionStatus>
    hasPermissionToShowCamera(hasPermission: boolean, hasntPermissionCompletion: () => void)
    handleBarCodeScanned(data: any, onScanned: (isScanned: boolean) => void, success: (product: Product) => void, failure: (message: string) => void)
    createProductRequest(data: Product): Promise<void>
}

export class HomeViewModel implements IHomeViewModel {

    private product?: Product

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

    async handleBarCodeScanned({ data }: any, onScanned: (isScanned: boolean) => void, success: (product: Product) => void, failure: (message: string) => void) {
        onScanned(true)
        try {
            let res = await api.get(`/products/${data}`)
            this.product = res.data
            success(this.product);
        } catch (error) {
            failure(error)
        }
    };

    async createProductRequest(data: Product): Promise<void> {
        let res = await api.post('/products', data)
    }
}
