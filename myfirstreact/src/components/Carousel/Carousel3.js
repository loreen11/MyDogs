const Carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel ">
       {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
        {/The slideshow/}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="imgCar" src="img/dog-12.webp" />
        </div>
        <div className="carousel-item">
          <img className="imgCar" src="img/Cond.jpg" />
        </div>
        <div className="carousel-item">
          <img className="imgCar" src="img/aocl.jpg" />
        </div>
      </div>

       {/* Left and right controls */}
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Carousel;
