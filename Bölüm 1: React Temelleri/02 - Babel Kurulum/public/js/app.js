"use strict";

// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

// npm run babel => bu dosya yorumlanarak ciktisini public/js/app.js dosyasina ekledik
// npm run start => package.json dosyasindaki live-server public calistirildi

var template = /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My first react application"); // JSX -> JavaScript XML
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
