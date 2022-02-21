import { Link } from "react-router-dom";
function Cabecera (data) {
    var carrito=[];
    var precioTotal = 0;
    var p = 0;

    
    for (let producto of data.carrito) {
		let indice = p;
		carrito.push(
			<li class="single-cart-list">
				<a class="photo">
					<img src={producto.imagen} class="cart-thumb" alt="image" />
					
				</a>
				<div class="cart-list-txt">
					<p>{producto.cantidad} x {producto.nombre} <br></br> <span class="price">$ {producto.precio}</span></p>
				</div>
				<div class="cart-close">
					<span class="lnr lnr-cross" onClick={()=>{
						data.borrar(indice);
						localStorage.setItem('carrito', JSON.stringify(data.carrito));
					}}></span>
				</div>
			</li>
		);
		precioTotal += producto.cantidad * producto.precio;
		p++;
	}
    return (
    <header id="home" class="welcome-hero">
        <div class="top-area">
			<div class="header-area">
				<nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

					<div class="top-search">
						<div class="container">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-search"></i></span>
								<input type="text" class="form-control" placeholder="Search"/>
								<span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
							</div>
						</div>
					</div>

					<div class="container">            
						<div class="attr-nav">
							<ul>
								<li class="search">
									<a><span class="lnr lnr-magnifier"></span></a>
								</li>
								<li class="nav-setting">
									<a><span class="lnr lnr-cog"></span></a>
								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" >
										<span class="lnr lnr-cart"></span>
										<span class="badge badge-bg-1">{data.carrito.length}</span>
									</a>
									<ul class="dropdown-menu cart-list s-cate">
										{carrito}
										<li class="total">
											<span>Total: ${precioTotal}</span>
                                            <button class="btn-cart pull-right"><Link to="basket">view cart</Link></button>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
								<i class="fa fa-bars"></i>
							</button>
							<Link to="" class="navbar-brand">Galaxia<span>motor</span>.</Link>

						</div>
						<div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li><Link to="/">home</Link></li>
				                    <li><Link to="basket">basket</Link></li>
				                </ul>
				        </div>
					</div>
				</nav>
			</div>
			<div class="clearfix"></div>
		</div>
    </header>);
    
}
 
export default Cabecera;