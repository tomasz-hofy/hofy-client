import { ProductDto } from './types/ProductDto';

class ProductService {
    public getProducts = (): Promise<ProductDto[]> => {
        return new Promise<ProductDto[]>(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        label: 'Product 1',
                    },
                    {
                        id: 2,
                        label: 'Product 2',
                    },
                    {
                        id: 3,
                        label: 'Product 3',
                    },
                ]);
            }, 1000);
        });
    };
}

export const productService = new ProductService();
