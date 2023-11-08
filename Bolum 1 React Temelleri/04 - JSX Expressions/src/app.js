var p_name = "iPhone 14";
var p_price = 40000;

var product = {
	name: "iPhone 14 Pro",
	price: 50000
}

function formatPrice(product) {
	return product.price + " TL";
}

var template = 
	<div>
		<h1 id="header">Ürün Listesi</h1>
		<div id="product-details">
			<h2>{ product.name }</h2>
			<p>{ formatPrice(product) }</p>
			<ul>
				<li>Lorem, ipsum.</li>
				<li>Accusantium, libero?</li>
				<li>Provident, reiciendis.</li>
			</ul>
		</div>
	</div>; 



var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);