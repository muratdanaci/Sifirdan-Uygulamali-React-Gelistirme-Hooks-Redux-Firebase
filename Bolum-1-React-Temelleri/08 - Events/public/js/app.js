"use strict";

// https://legacy.reactjs.org/docs/events.html

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
function addProduct(event, p_name) {
  console.log(event, p_name);
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: product.id
  }, /*#__PURE__*/React.createElement("h2", null, product.name), product.price, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: index,
    onClick: function onClick(event) {
      console.log(event.target, product.name);
    }
  }, "Ekle"));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
