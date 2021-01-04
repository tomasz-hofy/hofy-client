import { useQuery } from 'react-query';

import { productService } from '../../services/product/productService';

export const useProducts = () => {
    // potentially more hook related logic here
    // useMutation
    return useQuery('products', productService.getProducts);
};
