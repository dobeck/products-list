import React from 'react';
import { Filters, ProductsList, MoreButton } from '../../components';

function HomePage() {
    return (
        <>
            <Filters/>
            <ProductsList/>
            <MoreButton/>
        </>
    )
}

export default HomePage;
