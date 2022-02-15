
const modalForm = document.querySelector('.modal__form');
const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');
const modal = document.querySelector('.modal');
modal.style.display = 'none';
const table = document.querySelector('.table');
const tableBody = document.querySelector('.table__body');
const modalTotalPrice = document.querySelector('.modal__total-price');
const crmTotalPrice = document.querySelector('.crm__total-price');
const priceVal = document.querySelector('#price');
const countVal = document.querySelector('#count');
const unitsInput = document.querySelector('#units');
const vendorCodeId = document.querySelector('.vendor-code__id');
const discountInput = modalForm.querySelector('.modal__input_discount');
const checkBox = modalForm.querySelector('.modal__checkbox');
const inputTextarea = modalForm.querySelector('.modal__input_textarea');
const vendorId = '';

export default {
  modalForm,
  overlay,
  modal,
  table,
  tableBody,
  modalTotalPrice,
  crmTotalPrice,
  priceVal,
  countVal,
  unitsInput,
  vendorCodeId,
  discountInput,
  checkBox,
  inputTextarea,
  vendorId,
};
