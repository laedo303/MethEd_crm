/* eslint-disable require-jsdoc */
'use strict';

let products = [
  {
    id: 1,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description:
      'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 2,
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description:
      'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: 3,
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description:
      'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 4,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description:
      'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'v',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];
// находим элементы в вёрстке по классу и id
const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const inputName = modalForm.querySelector('#name');
const formDiscountCheckbox = modalForm.querySelector('#discount');
const formDiscountCount = modalForm.querySelector('[name="discount_count"]');

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
const vendorCode__id = document.querySelector('.vendor-code__id');
const discountInput = modalForm.querySelector('.modal__input_discount');
const checkBox = modalForm.querySelector('.modal__checkbox');
const inputTextarea = modalForm.querySelector('.modal__input_textarea');
let vendorId = '';
const count = 0;

// создаём шаблон-объект, который добавляется в массив products
// (я об этом не догадался)
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
  getTotalPrice(products); // вызов функции расчёта стоимости
};

// функция создания вёрстки в html
function createRow(obj) {
  // создание элемента tr
  const tr = document.createElement('tr');
  // добавление класса
  tr.classList.add('goods__row');
  // находим блок кнопок
  const btnWrapper = document
      .querySelector('.table__cell_btn-wrapper')
  // клонируем кнопки
      .cloneNode(true);
    // вставляем в сторку вёрстку с данными (переменными)
  tr.innerHTML = `
		<td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
    <span class="table__cell-id">id: ${obj.vendorId}</span>
		${obj.title}
		</td>
		<td class="table__cell table__cell_left">${obj.category}</td>
		<td class="table__cell">${obj.units}</td>
		<td class="table__cell">${obj.count}</td>
		<td class="table__cell">$${obj.price}</td>
		<td class="table__cell">$${obj.count * obj.price}</td>
	`;
  // вставляем в конец строки кнопки
  tr.append(btnWrapper);
  // представляем в массив все найденные строки tr
  Array.from(table.querySelectorAll('tr'))
  // т.к. взяли всю таблицу с thead, то слайсом выбираем все tr
  // кроме первого, он находится в thead
      .slice(1)
  // перебираем все tr и добавляем им класс
      .forEach((tr) => {
        tr.classList.add('goods__row');
      });

  return table, tr;
}
// делаем генерацию id взяв дату, прибавили 20 и прибавили новую дату
function renderGoods(arr) {
  let startIdCount = Date.now();
  arr.forEach((item) => {
    startIdCount += 20;
    item.vendorId = Date.now() + startIdCount;
    tableBody.append(createRow(item));
  });

  return tableBody;
}
renderGoods(products);
// ф-ия удаления товара (не понимаю почему нужно создавать именно такую
// громоздкую ф-ию)
function deleteGood() {
  table.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      target.closest('.goods__row').remove();
      const data = Array.from(table.querySelectorAll('.goods__row'));
      products = data;
    }
  });
}
deleteGood();

// при открытии ф-ии добавляется id
function openPopup() {
  const btnAdd = document.querySelector('.panel__add-goods');

  btnAdd.addEventListener('click', () => {
    vendorId = vendorCode__id.textContent = `${Date.now()}`;

    overlay.classList.add('active');
    // зачем нужно задавать block?
    modal.style.display = 'block';
  });
}
openPopup();

// закрытие модалки и отчистка
function closePopUp() {
  const modalOverlay = document.querySelector('.overlay');

  modalOverlay.addEventListener('click', (e) => {
    const target = e.target;
    // отчистка модалки при закрытии
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
}
closePopUp();

// не понял что это
const addContactToPage = (product) => {
  tableBody.append(createRow(product));
  getTotalPrice(products);
};
// расчет суммы в модалке
function getModalPrice(product) {
  modalTotalPrice.textContent = `$${product.price * product.count}`;
}

// ф-ия обработки событий на форме
const formControl = () => {
  modalTotalPrice.textContent = `$${0}`;
  // проверка чекбокса
  checkBox.addEventListener('click', () => {
    if (checkBox.checked && discountInput.disabled === true) {
      discountInput.disabled = false;
    } else {
      discountInput.disabled = true;
      discountInput.value = '';
    }
  });
  // при смене поля ввода подсчитывается цена
  priceVal.addEventListener('change', () => {
    modalTotalPrice.textContent = `$${priceVal.value * countVal.value}`;
  });
  // при смене поля ввода колличества подсчитывается цена
  countVal.addEventListener('change', () => {
    modalTotalPrice.textContent = `$${priceVal.value * countVal.value}`;
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // получение данных из формы
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);

    //  присвоение случайного id и добавление данных в шаблон
    newProduct.vendorId = vendorId;
    addProductToData(newProduct);
    addContactToPage(newProduct);
    modalForm.reset(); // отчистка формы
    modalTotalPrice.textContent = `$${0}`;
    overlay.classList.remove('active');

    return newProduct;
  });
};
formControl();

// подсчет суммы всех товаров в таблице
function getTotalPrice(obj) {
  let total = 0;
  obj.forEach((item) => {
    total += item.price * item.count;
  });
  crmTotalPrice.textContent = `$${total}`;
}
getTotalPrice(products);
