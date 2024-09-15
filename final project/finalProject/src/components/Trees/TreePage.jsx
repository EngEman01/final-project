import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import usefatch from "../Trees/getTrees";

export default function TreePage() {

    const { id } = useParams()
    const [tree, setTree] = useState()
    const [loading, setLoading] = useState(true)
    let trees = usefatch()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTree(data);
                setLoading(false)
            })
    })
    if (!loading) {
        return (
            <>
                <h1>Product {id}</h1>


                <div key={product.id} className={productStyle.products}>
                    <div key={product.id}>
                        <img className={productStyle.productImage} src={product.image} alt="" />
                        <h4 >{product.title} - pricing:<span style={{ color: 'green' }}> {product.price}</span></h4>
                        <button><Link to={`/product`}>go back to products</Link></button>
                    </div>

                </div>

            </>
        )
    }
}