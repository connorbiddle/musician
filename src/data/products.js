import slugify from "slugify";
import { v4 as uuid } from "uuid";
import { loremIpsum } from "lorem-ipsum";
import { randomFromArray } from "../utilities";
import MusicImage from "../assets/images/placeholder-music.jpg";
import ClothingImage from "../assets/images/placeholder-clothing.jpg";
import AccessoryImage from "../assets/images/placeholder-accessory.jpg";

const generateProducts = productCount => {
  const products = [];
  const categories = ["Music", "Clothing", "Accessories"];
  const images = {
    Music: MusicImage,
    Clothing: ClothingImage,
    Accessories: AccessoryImage,
  };

  for (let i = 0; i < productCount; i++) {
    const words = 5 + Math.ceil(Math.random() * 30);

    const newProduct = {
      id: uuid(),
      title: `Item ${i + 1}`,
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      price: Math.ceil(Math.random() * 16 + 4) - 0.01,
      description: loremIpsum({ count: words, units: "words" }) + ".",
      category: randomFromArray(categories),
    };

    newProduct.image = images[newProduct.category];
    newProduct.slug = slugify(newProduct.title, { lower: true });

    products.push(newProduct);
  }

  return products;
};

const numOfProducts = 26 + Math.ceil(Math.random() * 8);
const products = generateProducts(numOfProducts);
export default products;
