/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import products from './modules/products.js';
import render from './modules/render.js';
const {
  renderGoods,
  deleteGood,
} = render;

import popUp from './modules/popUp.js';
const {
  openPopup,
  closePopUp,
} = popUp;

import getTotalPrice from './modules/getPrice.js';
import formControl from './modules/control.js';


const init = () => {
  renderGoods(products);
  deleteGood(products);
  openPopup();
  closePopUp();
  formControl();
  getTotalPrice(products);
};
init();
