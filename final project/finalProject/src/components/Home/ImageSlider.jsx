import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./ImageGallery.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const dataSource = [
  {
    original: "/tree-images/MoringaLeave1.jpg",
    // original: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    // thumbnail: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    description: "Mature trees store carbon and help fight global warming. Every tree planted is a step towards a cooler planet!"
  },
  {
    original: "/images/homeBackground.JPG",
    // original: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    // thumbnail: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    description:
      "Breathe Easy! Let's plant trees for cleaner air!"
  },
  {
    original: "/tree-images/african mahogany  side tree.jpeg",
    // original: "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",
    // thumbnail: "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",
    description: "Trees absorb carbon dioxide and release fresh oxygen, giving us cleaner air to breathe. Let’s plant more trees for a healthier planet!"
  },
  {
    original: "/tree-images/neam leaves.jpg",
    // original: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    // thumbnail: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    description: "Trees provide shade and help keep our cities cooler. By planting trees, we can beat the heat and save on energy bills!"
  },

  // {
  //   original: "/tree-images/neam leaves.jpg",
  //   // original: "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg",
  //   thumbnail: "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg",
  //   description: "Mouthfull Of Happiness"
  // }
];

const ImageSlider = () => {
  const renderItem = (item) => (
    <div className={styles['image-gallery-slide']}>
      <img src={item.original} alt={item.description} />
      <div className={styles['image-overlay']}></div> {/* Add overlay */}
      <div className={styles['image-description']}>
        {item.description}
      </div>
    </div>
  );

  return (
    <div className={styles['image-gallery']}>
      <ImageGallery
        items={dataSource}
        autoPlay
        showFullscreenButton={true}
        showThumbnails={false} // Remove thumbnails if you don't want them
        renderItem={renderItem} // Use custom renderItem to display the description
      />
    </div>

  );
};

export default ImageSlider;
