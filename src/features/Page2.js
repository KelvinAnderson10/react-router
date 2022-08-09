import {Link } from 'react-router-dom'
import React from 'react'

export const Page2 = () => {
    const productList = [
        {id: '1', productName: 'Product 1'},
        {id: '2', productName: 'Product 2'},
        {id: '3', productName: 'Product 3'},
    ]
    return (
    <div>
        <h1>Page 2</h1>
        <div style={{display:'flex', flexDirection:'column'}}>
            {productList.map((product) => {return <Link key={product.id} to={`${product.id}`}>{product.productName}</Link>})}
        </div>
    </div>
    )
}
