/* eslint-disable no-unused-vars */

import getDocumentElements from './getDocumentElements.js';
let {
  overlay,
  modal,
  modalTotalPrice,
  priceVal,
  countVal,
  unitsInput,
  vendorCodeId,
  discountInput,
  checkBox,
  inputTextarea,
  vendorId,
} = getDocumentElements;


const openPopup = () => {
  const btnAdd = document.querySelector('.panel__add-goods');
  btnAdd.addEventListener('click', () => {
    vendorId = vendorCodeId.textContent = `${Date.now()}`;
    overlay.classList.add('active');
    modal.style.display = 'block';
  });
};

const closePopUp = () => {
  const modalOverlay = document.querySelector('.overlay');
  modalOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.modal__close') || target === modalOverlay) {
      overlay.classList.remove('active');
      modal.style.display = 'none';
      modalTotalPrice.textContent = `$${0}`;
      priceVal.value = '';
      countVal.value = '';
      unitsInput.value = '';
      discountInput.value = '';
      inputTextarea.value = '';
      checkBox.checked = false;
      discountInput.disabled = true;
    }
  });
};

export default {
  openPopup,
  closePopUp,
};
