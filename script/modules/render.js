/* eslint-disable max-len */
import getDocumentElements from './getDocumentElements.js';
const {
  table,
  tableBody,
} = getDocumentElements;


const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.classList.add('goods__row');
  const btnWrapper = document
      .querySelector('.table__cell_btn-wrapper')
      .cloneNode(true);
  tr.innerHTML = `
    <td class="table__cell table__cell_left table__cell_name"
      data-id="24601654816512">
    <span class="table__cell-id">id: ${obj.vendorId}</span>
    ${obj.title}
    </td>
    <td class="table__cell table__cell_left">${obj.category}</td>
    <td class="table__cell">${obj.units}</td>
    <td class="table__cell">${obj.count}</td>
    <td class="table__cell">$${obj.price}</td>
    <td class="table__cell">$${obj.count * obj.price}</td>
  `;
  tr.append(btnWrapper);
  Array.from(table.querySelectorAll('tr'))
      .slice(1)
      .forEach((tr) => {
        tr.classList.add('goods__row');
      });

  return table, tr;
};


const renderGoods = (arr) => {
  let startIdCount = Date.now();
  arr.forEach((item) => {
    startIdCount += 20;
    item.vendorId = Date.now() + startIdCount;
    tableBody.append(createRow(item));
  });
  return tableBody;
};


const deleteGood = products => {
  table.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      target.closest('.goods__row').remove();
      const data = Array.from(table.querySelectorAll('.goods__row'));
      products = data;
    }
  });
};


const pictureBtn = () => {
  table.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_pic')) {
      open(
          'https://www.free-wallpapers.su/data/media/21/pri2068.jpg',
          '',
          'width=670,height=500,top=100,left=500',
      );
    }
  });
};


export default {
  createRow,
  renderGoods,
  deleteGood,
  pictureBtn,
};
