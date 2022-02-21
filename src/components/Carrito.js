function Carrito (data){
    var carrito = [];
	var p = 0;
    
		for (let  producto of data.carrito) {
			let indice = p;
			carrito.push(
				<div class="col-md-3 col-sm-4">
				<div class="single-new-arrival">
					<div class="single-new-arrival-bg">
						<img src={producto.imagen} alt="new-arrivals images"/>
						<div class="single-new-arrival-bg-overlay"></div>
						<div class="cart-close">
							<span class="lnr lnr-cross" onClick={()=>{
								data.borrar(indice);
								localStorage.setItem('carrito', JSON.stringify(data.carrito));
							}}></span>
						</div>
					</div>
					<h4><a href="#">{producto.cantidad} X {producto.nombre}</a></h4>
					<button onClick={()=>{
							if (producto.cantidad == 1) {
								data.borrar(indice);
								localStorage.setItem('carrito', JSON.stringify(data.carrito));
							}else{
								data.disminuyecantidad(indice);
								localStorage.setItem('carrito', JSON.stringify(data.carrito));
							}
					}}>-</button>
					<p class="arrival-product-price">${producto.precio}</p>
					<button onClick={()=>{
						data.aumentocantidad(indice)
						localStorage.setItem('carrito', JSON.stringify(data.carrito));
					}}>+</button>
					</div>
				</div>
				);
			p++;
		}
        return (
            <section id="new-arrivals" class="new-arrivals">
				<div class="container">
					<div class="section-header">
						<h2>basket</h2>
					</div>
					<div class="new-arrivals-content">
						<div class="row">
							{carrito}
						</div>
					</div>
				</div>
			</section>
        );
    
}

export default Carrito;