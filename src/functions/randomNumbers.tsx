import { products } from "../products";

export const randomNumbers = () => {
  let numbers = [];

  for (let i = 0; i < 4; i++) {
    numbers[i] = Math.floor(Math.random() * products.length);
  }

  return Array.from(new Set(numbers));
};
