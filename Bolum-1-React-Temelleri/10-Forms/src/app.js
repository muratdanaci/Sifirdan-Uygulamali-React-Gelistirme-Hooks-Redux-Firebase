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

function saveProduct(event) {
	event.preventDefault();
	var p_name = event.target.elements.p_name.value;
	var p_price = event.target.elements.p_price.value;
	var product = {
		name: p_name,
		price: p_price
	}
	products.push(product);
	event.target.elements.p_name.value = "";
	event.target.elements.p_price.value = "";
	renderApp();
}

function renderApp() {
	var template = 
		<div>
			<h1 id="header">Ürün Listesi</h1>
			<h3>Seçilen Ürünler: { selectedProducts.length}</h3>
			<form onSubmit={saveProduct}>
				<input type="text" name="p_name" id="p_name" />
				<input type="text" name="p_price" id="p_price" />
				<button type="submit">Ürün Ekle</button>
			</form>
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