
import React, { useState } from "react";
import styleHome from "./Home.module.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Donate from "../Donate/Donate";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div>
        <ImageSlider />
      </div>

      <div className={styleHome.plantes}>
        <img className={styleHome.imageTree} src="images/plante.png" alt="" />

        <div className={styleHome.plante}>
          <h1 className={styleHome.header1}>Plant Trees, Earn Rewards</h1>
          <h2>
            At Shagara, we believe in the power of planting trees to restore
            nature, combat climate change, and foster sustainable communities.
            By joining us, you can make a tangible impact on the environment,
            one tree at a time. Earn rewards for every tree you plant, and be a
            part of Egypt's movement towards a greener, healthier future.
            Together, we can build a better planet for generations to come.
          </h2>
          <button className={styleHome.know}>
            <Link to="/trees" className={styleHome.planting}>
              plant trees
            </Link>
          </button>
        </div>
      </div>

      <div className={styleHome.services}>
        <h1 className={styleHome.header1}>Our Services</h1>
        <div className={styleHome.ourService}>
          <div className={styleHome.treeCard}>
            <img
              className={styleHome.imageCard}
              src="images/donateTree.png"
              alt=""
            />
            <h2>Support a Greener Future!</h2>
            <p>
              Your contribution makes a lasting impact on the environment. Let's
              grow together—donate now and plant the seeds of change!
            </p>
            <button className={styleHome.know} onClick={togglePopup}>
              Donate
            </button>
          </div>

          <div className={styleHome.treeCard}>
            <img
              className={styleHome.imageCard}
              src="images/buyTree.png"
              alt=""
            />
            <h2>Plant a Tree, Grow a Legacy!</h2>
            <p>
              Purchase a tree and be part of our mission to create a greener
              Egypt. Each tree you buy helps combat climate change and supports
              a healthier planet!
            </p>
            <button className={styleHome.know}>
              <Link to="/trees" className={styleHome.planting}>
                Buy
              </Link>
            </button>
          </div>

          <div className={styleHome.treeCard}>
            <img
              className={styleHome.imageCard}
              src="images/guidance.png"
              alt=""
            />
            <h2>Grow with Confidence!</h2>
            <p>
              Learn how to plant and care for your tree with our easy,
              step-by-step guide. Whether you're a beginner or an expert, let’s
              plant together and make the earth a little greener!
            </p>
          </div>
        </div>

        <div className={styleHome.join}>
          <h1 className={styleHome.header1}>Join the Green Revolution</h1>
          <p>
            At Shagara, we believe in the power of planting trees to restore
            nature, combat climate change, and foster sustainable communities.
            By joining us, you can make a tangible impact on the environment,
            one tree at a time. Earn rewards for every tree you plant, and be a
            part of Egypt's movement towards a greener, healthier future.
            Together, we can build a better planet for generations to come.
          </p>
          <button className={styleHome.know}>
            <Link to="/contact" className={styleHome.planting}>
              Join Us
            </Link>
          </button>
        </div>
      </div>

      {/* Popup for the donation form */}
      {isPopupOpen && (
        <div className={styleHome.popup}>
          <div className={styleHome.popupInner}>
            <button className={styleHome.closeBtn} onClick={togglePopup}>
              X
            </button>
            <Donate />
          </div>
        </div>
      )}
    </>
  );
}
