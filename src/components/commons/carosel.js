import React from 'react';
import { Link } from 'react-router-dom';

const Carosel = () => {
  return (
    // <div className="box carosel-size" style={{flex:0.1}}>
    //   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //     <ol className="carousel-indicators">
    //       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //     </ol>
    //     <div className="carousel-inner d-inline-block">
    //       <div className="carousel-item card active">
    //         <img className="d-block w-100" src="https://lorempixel.com/800/400/food/1" alt="First slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>My Caption Title (1st Image)</h5>
    //           <p>The whole caption will only show up if the screen is at least medium size.</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item card">
    //         <img className="d-block w-100" src="https://lorempixel.com/800/400/food/2" alt="Second slide" />
    //       </div>
    //       <div className="carousel-item card">
    //         <img className="d-block w-100" src="https://lorempixel.com/800/400/food/3" alt="Third slide" />
    //       </div>
    //     </div>
    //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </div>
    <div className="carosel-size header-text">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg> */}
            <img className="d-block w-100" src="https://lorempixel.com/800/400/food/1" alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"/><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg> */}
            <img className="d-block w-100" src="https://lorempixel.com/800/400/food/2" alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"/><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
            <img className="d-block w-100" src="https://lorempixel.com/800/400/food/3" alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          <div className="carousel-item height:400px">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"/><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
            <img className="d-block w-100" src={require("../../assets/img/food.jpg")} alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
              <h5>Fourth slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carosel;