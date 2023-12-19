import React from 'react'
import ImageSlider from './imageSlider'
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer'

function LandingPage() {
  return (
   <React.Fragment>
        <div className="container-fluid px-0">
            <ImageSlider/>
            <HomePageProductContainer/>
        </div>
   </React.Fragment>
  )
}

export default LandingPage; 