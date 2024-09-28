import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styleTreePage from "../Trees/TreePage.module.css"

export default function TreePage() {

    const { id } = useParams()
    const [tree, setTree] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:7000/trees/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTree(data);
                setLoading(false)
            })
    })
    if (!loading) {
        return (
            <>
                <div className={styleTreePage.trees}>
                    <div className={styleTreePage.side} key={tree.id}>
                        <div className={styleTreePage.imagesDes}>
                            <img className={styleTreePage.treeImage1} src={tree.image[0]} alt="" />
                            <img className={styleTreePage.treeImage2} src={tree.image[2]} alt="" />
                        </div>
                        <h4 >{tree.name}</h4>
                        <h4>it's category is : {tree.category}</h4>
                    </div>
                    <div className={styleTreePage.side} key={tree.id}>
                        <h2>Description</h2>
                        <h4 className={styleTreePage.info} >{tree.description}</h4>
                        <h2>How I can care of this tree?</h2>
                        <h4 className={styleTreePage.info}>{tree.care}</h4>
                        <div className={styleTreePage.buying}>
                            <h5 className={styleTreePage.price}>pricing:<span style={{ color: 'green' }}> {tree.price}</span></h5>
                            <button className={styleTreePage.buy}><Link className={styleTreePage.card} to={`/trees`}>buy now</Link></button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
