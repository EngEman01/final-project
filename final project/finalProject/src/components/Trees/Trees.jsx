import React from 'react'
import { Link } from 'react-router-dom';
import usefatch from '../Trees/getTrees'
import { useState } from 'react';
import styleTrees from './Trees.module.css'

export default function Trees() {
    let Trees = usefatch()
    return (
        <>
            <div>
                <h1>All Trees</h1>

                {Trees.map(Tree => (
                    <div className={styleTrees.Trees}>
                        <div key={Tree.id}>
                            <img className={styleTrees.productImage} src={styleTrees.image} alt="" />
                            <h4>{Tree.title} - pricing:<span style={{ color: 'green' }}> {Tree.price}</span></h4>
                            <button><Link to={`/product/${Tree.id}`} className={styleTrees.link}>details</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
