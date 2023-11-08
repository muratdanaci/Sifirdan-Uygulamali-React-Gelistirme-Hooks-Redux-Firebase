"use strict";

var products = [{
  id: 1,
  name: "iPhone 15 Pro",
  price: 50000,
  description: "Iyi telefon",
  colors: ["red", "blue", "green", "white", "black"]
}, {
  id: 2,
  name: "iPhone 16",
  price: 60000,
  description: "Iyi telefon",
  colors: ["silver", "red", "green", "white"]
}];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: product.id
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, product.name) : "Ürün adı girilmemiştir.", product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Renk seceneklerimiz mevcut") : "", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, color);
  })));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
