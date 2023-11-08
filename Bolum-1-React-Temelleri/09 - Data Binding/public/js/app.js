"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var products = [{
  id: 1,
  name: "iPhone 15 Pro",
  price: 50000
}, {
  id: 2,
  name: "iPhone 16",
  price: 60000
}, {
  id: 3,
  name: "iPhone 17",
  price: 70000
}];
var selectedProducts = [];
function addProduct(event, p_name) {
  console.log(event, p_name);
  if (!selectedProducts.includes(p_name)) {
    selectedProducts.push(p_name);
  }
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "\xDCr\xFCn Listesi"), /*#__PURE__*/React.createElement("h3", null, "Secilen Urunler: ", selectedProducts.length), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-details",
      key: product.id
    }, /*#__PURE__*/React.createElement("h2", null, product.name), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        addProduct(event.target, product.name);
      }
    }, "Ekle"));
  }));
  root.render(template);
}
renderApp();
