import React from 'react'
import { Link } from 'react-router-dom';
import Usefatch from '../Trees/getTrees'
import { useState } from 'react';
import styleTrees from './Trees.module.css'

export default function Trees() {
    let Trees = Usefatch()
    return (
        <>
            <div className={styleTrees.allPage}>
                <h1>All Trees</h1>
                <div className={styleTrees.treeContainer}>

                    {Trees.map(Tree => (
                        <div className={styleTrees.trees}>
                            <div key={Tree.id}>
                                <img className={styleTrees.productImage} src={Tree.image[0]} alt="" />
                                <h4 className={styleTrees.name}>{Tree.name} </h4>
                                <h4 className={styleTrees.des}>{Tree.description} </h4>
                                <h5> pricing:<span style={{ color: 'green' }}> {Tree.price}</span></h5>
                                <button className={styleTrees.details}><Link to={`/trees/${Tree.id}`} className={styleTrees.link}>details</Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
