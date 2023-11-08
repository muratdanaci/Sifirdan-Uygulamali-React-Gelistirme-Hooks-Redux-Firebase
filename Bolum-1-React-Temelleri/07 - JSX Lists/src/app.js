var products = [
	{
		id: 1,
		name: "iPhone 15 Pro",
		price: 50000,
		description: "Iyi telefon",
		colors: ["red", "blue", "green", "white", "black"]
	},
	{
		id: 2,
		name: "iPhone 16",
		price: 60000,
		description: "Iyi telefon",
		colors: ["silver", "red", "green", "white"]
	}
];

function formatPrice(product) {
	return <p>{ product.price } TL</p>;
}


var template = 
	<div>
		<h1 id="header">Ürün Listesi</h1>
		{
			products.map(product => (
				<div className="product-details" key={product.id}>
					{ (product.name && product.name.length > 3) ? <h2>{ product.name }</h2> : "Ürün adı girilmemiştir." }
					{ (product.price && product.price > 0) && formatPrice(product) }
					{ product.description && <p>{ product.description }</p> }
					{ product.colors.length > 0 ? <p>Renk seceneklerimiz mevcut</p>:"" }
					<ul>
						{
							product.colors.map((color, index) => (<li key={index}>{ color }</li>))
						}
					</ul>
				</div>
			))
		}
	</div>; 



var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);