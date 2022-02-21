
function Productos(data) {
	var final = [];
    
		for (let  producto of data.data) {
			final.push(
				<div class="col-md-3 col-sm-4">
				<div class="single-new-arrival">
					<div class="single-new-arrival-bg">
						<img src={producto.imagen} alt="new-arrivals images"/>
						<div class="single-new-arrival-bg-overlay"></div>
						<div class="sale bg-1">
							<p>New</p>
						</div>
						<div class="new-arrival-cart">
							<button onClick={()=>{
								let comprobador = true
								let indice = 0
								for(let coche of data.carrito){
									if(coche.nombre == producto.nombre){
										data.aumentocantidad(indice)
										localStorage.setItem('carrito', JSON.stringify(data.carrito));
										comprobador = false
									}
									indice++
								}
								if(comprobador){
									data.anadir(producto);
									localStorage.setItem('carrito', JSON.stringify(data.carrito));
								}
								}}>
								Agregar al carrito
							</button>
							<p class="arrival-review pull-right">
								<span class="lnr lnr-heart"></span>
								<span class="lnr lnr-frame-expand"></span>
							</p>
						</div>
					</div>
					<h4><a href="#">{producto.nombre}</a></h4>
					<p class="arrival-product-price">${producto.precio}</p>
					</div>
				</div>
				);
		}
        return (
            <section id="new-arrivals" class="new-arrivals">
				<div class="container">
					<div class="section-header">
						<h2>products</h2>
					</div>
					<div class="new-arrivals-content">
						<div class="row">
							{final}
						</div>
					</div>
				</div>
			</section>
        );
    }
 
export default Productos;