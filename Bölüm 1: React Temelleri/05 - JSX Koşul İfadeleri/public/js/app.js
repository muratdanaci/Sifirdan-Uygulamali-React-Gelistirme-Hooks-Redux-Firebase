"use strict";

var product = {
  name: "iPhone 14 Pro",
  price: 50000
  // description: "Iyi telefon"
};

function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}

// function printDescription(product) {
// 	if (product.description) {
// 		return <p>{ product.description }</p>;
// 	} else {
// 		return <p>Ürün açıklaması girilmemiş.</p>;
// 	}
// }

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", null, product.name), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Accusantium, libero?"), /*#__PURE__*/React.createElement("li", null, "Provident, reiciendis."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
