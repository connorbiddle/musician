import { v4 as uuid } from "uuid";
import { loremIpsum } from "lorem-ipsum";
import { randomFromArray } from "./utilities";
import MusicImage from "./assets/images/placeholder-music.jpg";
import ClothingImage from "./assets/images/placeholder-clothing.jpg";
import AccessoryImage from "./assets/images/placeholder-accessory.jpg";

const generateProducts = (productCount = 20) => {
  const products = [];
  const categories = ["Music", "Clothing", "Accessories"];
  const images = {
    Music: MusicImage,
    Clothing: ClothingImage,
    Accessories: AccessoryImage,
  };

  for (let i = 0; i < productCount; i++) {
    const category = randomFromArray(categories);
    const words = 5 + Math.ceil(Math.random() * 15);
    const image = images[category];

    products.push({
      id: uuid(),
      title: `Item ${i + 1}`,
      price: Math.ceil(Math.random() * 16 + 4) - 0.01,
      description: loremIpsum({ count: words, units: "words" }) + ".",
      image,
      category,
    });
  }

  return products;
};

export default generateProducts(30);
