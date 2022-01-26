'use strict';
const modalForm = document.querySelector('.modal__form');
const overlay = document.querySelector('.overlay');
const vendorCodeId = document.querySelector('.vendor-code__id');
const tBody = document.querySelector('.table__body');


const getRandId = () => {
  const randId = Math.round(Math.random() * 1_000_000_000_000);
  return randId;
};

vendorCodeId.textContent = getRandId();

const getCountAllTr = () => {
  const lengthTr = tBody.querySelectorAll('tr').length;
  return lengthTr + 1;
};



const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
  <tr>
    <td class="table__cell">${getCountAllTr()}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
      <span class="table__cell-id">id: ${vendorCodeId.textContent}</span>
      ${obj.title}
    </td>
    <td class="table__cell table__cell_left">${obj.category}</td>
    <td class="table__cell">шт</td>
    <td class="table__cell">${obj.count}</td>
    <td class="table__cell">$${obj.price}</td>
    <td class="table__cell">$${obj.price * obj.count}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>
  `);
  return tr;
};


modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('formData: ', formData);

  const newGood = Object.fromEntries(formData);
  tBody.append(createRow(newGood));
  overlay.classList.remove('active');
});


tBody.addEventListener('click', e => {
  if (e.target.closest('.table__btn_del')) {
    e.target.closest('tr').remove();
  }
});

// addGoods.addEventListener('click', () => {
//   overlay.classList.add('active');
// });

overlay.addEventListener('click', e => {
  if(e.target === overlay || e.target.closest('.modal__close')) {
    overlay.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    modalForm.reset();
  }
});
