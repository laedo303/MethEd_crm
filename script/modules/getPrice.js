import getDocumentElements from './getDocumentElements.js';
const {
  crmTotalPrice,
} = getDocumentElements;


const getTotalPrice = (obj) => {
  let total = 0;
  obj.forEach((item) => {
    total += item.price * item.count;
  });
  crmTotalPrice.textContent = `$${total}`;
};

export default getTotalPrice;
