var product = {
	name: "iPhone 15 Pro",
	price: 50000,
	description: "Iyi telefon",
	colors: ["red", "blue", "green"]
}

function formatPrice(product) {
	return <p>{ product.price } TL</p>;
}

// function printDescription(product) {
// 	if (product.description) {
// 		return <p>{ product.description }</p>;
// 	} else {
// 		return <p>Ürün açıklaması girilmemiş.</p>;
// 	}
// }

var template = 
	<div>
		<h1 id="header">Ürün Listesi</h1>
		<div id="product-details">
			{ (product.name && product.name.length > 3) ? <h2>{ product.name }</h2> : "Ürün adı girilmemiştir." }
			{ (product.price && product.price > 0) && formatPrice(product) }
			{/* { printDescription(product) } */}
			{ product.description && <p>{ product.description }</p> }
			{ product.colors.length > 0 ? <p>Renk seceneklerimiz mevcut</p>:"" }
			<ul>
				<li>Lorem, ipsum.</li>
				<li>Accusantium, libero?</li>
				<li>Provident, reiciendis.</li>
			</ul>
		</div>
	</div>; 



var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);