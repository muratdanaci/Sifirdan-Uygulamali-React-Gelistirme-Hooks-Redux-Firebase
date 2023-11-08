var root = ReactDOM.createRoot(document.getElementById("root"));


var products = [
	{
		id: 1,
		name: "iPhone 15 Pro",
		price: 50000
	},
	{
		id: 2,
		name: "iPhone 16",
		price: 60000
	},
	{
		id: 3,
		name: "iPhone 17",
		price: 70000
	}
];

var selectedProducts = [];

function addProduct(event, p_name) {
	console.log(event, p_name);
	if(!selectedProducts.includes(p_name)) {
		selectedProducts.push(p_name);
	}
	renderApp();
}

function renderApp() {
	var template = 
		<div>
			<h1 id="header">Ürün Listesi</h1>
			<h3>Secilen Urunler: { selectedProducts.length}</h3>
			{
				products.map((product,index) => (
					<div className="product-details" key={product.id}>
						{ <h2>{ product.name }</h2> }
						{ product.price }
						<button type="button" id={index} onClick={(event) => {addProduct(event.target, product.name);}}>Ekle</button>
					</div>
				))
			}
		</div>; 
	root.render(template);
}

renderApp();