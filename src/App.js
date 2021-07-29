import C01componentes from "./componentes/C01componentes";
import C02contador from "./componentes/C02contador";
import C03compCss from "./componentes/C03compCss";
import C04estado from "./componentes/C04estado";
import C05dobleestado from "./componentes/C05dobleestado";
import C06variable from "./componentes/C06variable";
import C07operador from "./componentes/C07operador";
import C08matriz from "./componentes/C08matriz";

function App() {
  return (
    <div className= "container">
      <C01componentes></C01componentes>
      <hr/>
      <C02contador></C02contador>
      <hr/>
      <C03compCss></C03compCss>
      <hr/>
      <C04estado></C04estado>
      <hr/>
      <C05dobleestado></C05dobleestado>
      <hr/>
      <C06variable xVariable="Hola mundo...desde React"/>
      <hr/>
      <C07operador sEdad='20'></C07operador>
      <hr/>
      <C08matriz ></C08matriz> 

      <header className="row bg-secondary">
		(Header - Cabecera)
    <img src="https://i.ibb.co/FWQBtf8/header.jpg" class="img-fluid" alt="..."></img>
	</header>

	<nav className="row bg-primary">
		(nav-menu)
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item bg-primary ">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>

    

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
			Articulo 1
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
					<img src="https://i.ibb.co/5Yc7kMz/galeria2.jpg" className="d-block w-100" alt="..."></img>
					<div className="carousel-caption d-none d-md-block">
					  <h5>First slide label</h5>
					  <p>Some representative placeholder content for the first slide.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/dmLG8r6/galeria3.jpg" className="d-block w-100" alt="..."></img>
					<div className="carousel-caption d-none d-md-block">
					  <h5>Second slide label</h5>
					  <p>Some representative placeholder content for the second slide.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/1ZXzSVb/galeria1.jpg" className="d-block w-100" alt="..."></img>
					<div className="carousel-caption d-none d-md-block">
					  <h5>Third slide label</h5>
					  <p>Some representative placeholder content for the third slide.</p>
					</div>
				  </div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			  </div>
		</article>
		
		<article className="col-md-4 bg-secondary">
			Articulo 2
      <div className="card" style={{width:300}}>
  <img src="https://i.ibb.co/vxhSHs2/colibri.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		</article>

		<aside className="col-md-2 bg-primary">
			aside
      <button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>
		</aside>
	</section>

	<footer className="row bg-dark text-light">
		footer
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30619.669454096223!2d-71.55837495903286!3d-16.401515055836942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1627242855079!5m2!1ses-419!2spe" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
	</footer>

    </div>
  );
}

export default App;
