import { v4 as uuid } from "uuid";
import { loremIpsum } from "lorem-ipsum";
import { randomFromArray } from "./utilities";

const products = [];
const productCount = 20;
const categories = ["Music", "Clothing", "Accessories"];

for (let i = 0; i < productCount; i++) {
  products.push({
    id: uuid(),
    title: `Item ${i + 1}`,
    price: Math.ceil(Math.random() * 16 + 4) - 0.01,
    description: loremIpsum({ count: 20, units: "words" }),
    category: randomFromArray(categories),
    image: "https://via.placeholder.com/150",
  });
}

export default products;
