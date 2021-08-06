import React from 'react'
const aside = () => {
    return(
        <div className="ventana">
<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver video</button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/91I8sSLrEok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</div>
    )
}
export default aside