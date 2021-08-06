import articulo1 from "./componentes/articulo1";
import articulo2 from "./componentes/articulo2";
import aside from "./componentes/aside";
import caberecera from "./componentes/caberecera";
import footer from "./componentes/footer";
import menu from "./componentes/menu";


function App() {
  return (
    <div className= "container">
      <header className="row bg-secondary">
      <div className="caberecera">
        <img src="https://i.ibb.co/GHMc6S5/portada.png" alt="portada"  class="img-fluid" alt="..."></img>
        </div>
      </header>

	<nav className="row bg-primary">
		(nav-menu)
    <div className="cabecera">
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://ncmisitioweb.epizy.com/">Pagina web</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cursos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Photshop</a></li>
            <li><a className="dropdown-item" href="#">Corel Draw</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Adobe Illustrator</a></li>
          </ul>
        </li>
        <li className="nav-item bg-primary ">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Registro</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</div>
  </nav>

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/zXNdxgh/1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/RvpqQRy/4.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/pwbjwkm/3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
</div>
     
		</article>
		
		<article className="col-md-4 bg-secondary">
    <div className="card" style={{width:300}}>
  <img  src="https://i.ibb.co/Wg93vRd/2.jpg" border="0"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vision</h5>
    <p className="card-text">Un diseñador gráfico es un profesional de la comunicación visual. Su misión va más allá de realizar bocetos, dibujos y diseños; ya que tiene como principal objetivo plasmar en imágenes los mensajes que se quieren trasmitir.</p>
    <a href="#" className="btn btn-primary">Ver mas</a>
  </div>
</div>
      
		</article>

		<aside className="col-md-2 bg-primary">
    <button type="button" class="btn btn-primary">1</button>
<button type="button" class="btn btn-secondary">2</button>
<button type="button" class="btn btn-success">3</button>
<button type="button" class="btn btn-danger">4</button>

<button type="button" class="btn btn-link">Link</button>

<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver video</button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/91I8sSLrEok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
		</aside>
	</section>

	<footer className="row bg-dark text-light">
  <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.23186355165!2d-71.50492048565594!3d-16.413046542845894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b12987d52d9%3A0x62194c284627f913!2sSalaverry%20301%2C%20Arequipa%2004007!5e0!3m2!1ses!2spe!4v1628231720968!5m2!1ses!2spe" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div className="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/91I8sSLrEok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

	</footer>

</div>
  );
}
export default App;
