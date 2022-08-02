import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductBox, EmptyProductsList } from '../';
import { fetchProducts } from '../../actions/products';

function ProductsList() {
    const { products } = useSelector((state) => state.ProductsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts({ _page: 1 }))
    }, [])

    return (
        <>
            {
                products?.length > 0 ?
                products.map(product => {
                    return (
                        <ProductBox
                            key={ product.id }
                            product={ product }
                        />
                    )
                }) : <EmptyProductsList/>
            }
        </>
    )
}

export default ProductsList;
