import getDocumentElements from './getDocumentElements.js';
const {
  modalForm,
  overlay,
  modalTotalPrice,
  priceVal,
  countVal,
  discountInput,
  checkBox,
  vendorId,
} = getDocumentElements;

import addProduct from './addProduct.js';
const {
  addProductToData,
  addProductToPage,
} = addProduct;


const formControl = () => {
  modalTotalPrice.textContent = `$${0}`;
  checkBox.addEventListener('click', () => {
    if (checkBox.checked && discountInput.disabled === true) {
      discountInput.disabled = false;
    } else {
      discountInput.disabled = true;
      discountInput.value = '';
    }
  });
  priceVal.addEventListener('change', () => {
    modalTotalPrice.textContent = `$${priceVal.value * countVal.value}`;
  });
  countVal.addEventListener('change', () => {
    modalTotalPrice.textContent = `$${priceVal.value * countVal.value}`;
  });
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.vendorId = vendorId;
    addProductToData(newProduct);
    addProductToPage(newProduct);
    modalForm.reset();
    modalTotalPrice.textContent = `$${0}`;
    overlay.classList.remove('active');
    return newProduct;
  });
};

export default formControl;
