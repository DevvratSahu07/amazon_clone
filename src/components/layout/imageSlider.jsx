import React from 'react'
import { Link } from 'react-router-dom'
function imageSlider() {
  return (
    <React.Fragment>
      {/* <!-- Image Slider Starts --> */}
      <div id="amazonImageSlider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/"><img src="assets/img/slider/slide01.png" className="d-block w-100" height="500" alt="slide image 01"/></Link>
          </div>
          <div className="carousel-item">
            <Link to="/"><img src="assets/img/slider/slide02.png" className="d-block w-100" height="500" alt="slide image 02"/></Link>
          </div>
          <div className="carousel-item">
            <Link to="/"><img src="assets/img/slider/slide03.png" className="d-block w-100" height="500" alt="slide image 03"/></Link>
          </div>
          <div className="carousel-item ">
            <Link to="/"><img src="assets/img/slider/slide04.png" className="d-block w-100" height="500" alt="slide image 04"/></Link>
          </div>
          <div className="carousel-item">
            <Link to="/"><img src="assets/img/slider/slide05.png" className="d-block w-100" height="500" alt="slide image 05"/></Link>
          </div>
        </div>
        <a className="carousel-control-prev" href="#amazonImageSlider" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#amazonImageSlider" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> 
      {/* <!-- Image Slider Ends --> */}
      </React.Fragment>
  )
}

export default imageSlider