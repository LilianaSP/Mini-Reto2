import { useLoaderData} from '@remix-run/react'
import { useEffect } from 'react';
import React from 'react';
import { getProduct } from '~/models/productid.server'
// const fs = require('fs-extra');

export async function loader({ params }){    
    const { id } = params;
    const products = await getProduct(id);
    return products.data;
}

function Productlist(){

    const product = useLoaderData()
    const { description, image, price, url, name } = product.attributes;
    return(
        <div>
            {name}
        </div>
    )
}
export default Productlist
