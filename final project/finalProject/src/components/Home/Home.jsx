import React from 'react'
import styleHome from './Home.module.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
    return (
        <>
            <div className={styleHome.home}>
                <h1 className={styleHome.textHome}>Home</h1>
                <h3>One tree can absorb 48 pounds of carbon dioxide each year.<br></br> Imagine the impact we can make together</h3>
                <button className={styleHome.know1}>
                    <Link to="/about" className={styleHome.planting}>Learn more</Link>
                </button>
            </div>

            <div className={styleHome.plantes}>

                <img className={styleHome.imageTree} src="images/plante.png" alt="" />

                <div className={styleHome.plante}>
                    <h1>Plant Trees, Earn Rewards</h1>
                    <h2>At Shagara, we believe in the power of planting trees to restore nature, combat climate change, and foster sustainable communities. By joining us, you can make a tangible impact on the environment, one tree at a time. Earn rewards for every tree you plant, and be a part of Egypt's movement towards a greener, healthier future. Together, we can build a better planet for generations to come.</h2>
                    <button className={styleHome.know}>
                        <Link to="/trees" className={styleHome.planting}>plant trees</Link>
                    </button>
                </div>

            </div>

            <div className={styleHome.services}>

                <h1>our services</h1>

                <div className={styleHome.ourService}>
                    <div className={styleHome.treeCard}>
                        <img className={styleHome.imageCard} src="images/donateTree.png" alt="" />
                        <h2>Support a Greener Future!</h2>
                        <p>
                            Your contribution makes a lasting impact on the environment.
                            Lets grow together-donate now and plant the seeds of change!
                        </p>
                        <button className={styleHome.know}>
                            <Link to="/about" className={styleHome.planting}>Donate</Link>
                        </button>
                    </div>

                    <div className={styleHome.treeCard}>
                        <img className={styleHome.imageCard} src="images/buyTree.png" alt="" />
                        <h2>Plant a Tree, Grow a Legacy!
                        </h2>
                        <p>
                            Purchase a tree and be part of our mission to create a greener Egypt. Each tree you buy helps combat climate change and supports a healthier planet!
                        </p>
                        <button className={styleHome.know}>
                            <Link to="/about" className={styleHome.planting}>Donate</Link>
                        </button>
                    </div>

                    <div className={styleHome.treeCard}>
                        <img className={styleHome.imageCard} src="images/guidance.png" alt="" />
                        <h2>Grow with Confidence!
                        </h2>
                        <p>
                            Learn how to plant and care for your tree with our easy, step-by-step guide. Whether you're a beginner or an expert. Let’s plant together and make the earth a little greener!
                        </p>
                        <button className={styleHome.know}>
                            <Link to="/about" className={styleHome.planting}>Donate</Link>
                        </button>
                    </div>
                </div>

                <div className={styleHome.join}>
                    <h1>Join the Green Revolution</h1>
                    <p>At Shagara, we believe in the power of planting trees to restore nature, combat climate change, and foster sustainable communities. By joining us, you can make a tangible impact on the environment, one tree at a time. Earn rewards for every tree you plant, and be a part of Egypt's movement towards a greener, healthier future. Together, we can build a better planet for generations to come.</p>
                    <button className={styleHome.know}>
                    <Link to="/contact" className={styleHome.planting}>join us</Link>
                    </button>
                </div>

            </div>
        </>
    )
}
