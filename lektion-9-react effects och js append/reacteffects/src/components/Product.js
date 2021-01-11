import React from 'react'

const Product = ({product}) => {
    return (
        <div>
            {product.id} - {product.name}
        </div>
    )
}

export default Product
