// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

// npm run babel => bu dosya yorumlanarak ciktisini public/js/app.js dosyasina ekledik
// npm run start => package.json dosyasindaki 

var template = <h1 id="header">My first react application</h1>; // JSX -> JavaScript XML
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);