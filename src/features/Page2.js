import {Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const Page2 = () => {
    const params = useParams();
    const productList = [
        {id: '1', productName: 'Product 1', productInfo: 'Jamur Goreng'},
        {id: '2', productName: 'Product 2', productInfo: 'Nasi Capcay'},
        {id: '3', productName: 'Product 3', productInfo: 'Es teh'},
    ]
    const [product, setProduct] = useState({})

    useEffect(() => {
        for(let p of productList){
            if(p.id === params.id){
                setProduct(p);
                break;
            }
        }
    }, [params.id])

    return (
    <div>
        <h1>Page 2</h1>
        <div style={{display:'flex', flexDirection:'column'}}>
            {productList.map((product) => {return <Link key={product.id} to={`${product.id}`}>{product.productName}</Link>})}
        </div>
        <div>
            {/* Tanpa Pakai Index */}
            {/* {params.id ? <div>ID: {product.id} Name: {product.productName} Info: {product.productInfo}</div> : <>Silahkan Pilih Product</>} */}
            {params.id ? <div>ID: {product.id} Name: {product.productName} Info: {product.productInfo}</div> : <>Silahkan Pilih Product</>}
        </div>
    </div>
    )
}
