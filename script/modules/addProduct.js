import getDocumentElements from './getDocumentElements.js';
const {
  tableBody,
} = getDocumentElements;

import getTotalPrice from './getPrice.js';
import products from './products.js';

import render from './render.js';
const {
  createRow,
} = render;

const addProductToData = (product) => {
  products.push({
    id: 0,
    title: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
    discont: product.discont,
    count: product.count,
    units: product.units,
    images: {},
  });
  getTotalPrice(products);
};

const addProductToPage = (product) => {
  tableBody.append(createRow(product));
  getTotalPrice(products);
};

export default {
  addProductToData,
  addProductToPage,
};
