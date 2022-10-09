import React from 'react'
import './about.css'
import h1 from '../../img/IMG-20201122-WA0067.jpg'
import h2 from '../../img/IMG-20201122-WA0043.jpg'
import h3 from '../../img/IMG-20201122-WA0078.jpg'

function About() {
  return (
    <div className='about'>
       <div className="left">
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={h1}  alt="..."/>
    </div>
       <div className="carousel-item">
      <img src={h2} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={h3} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>
       <div className="right">
        <h1>About Me</h1>
        <p>I am passionate about technology especially its  multi-faceted trait that facilitates intergration,innovation and creativity in every sector in the economy as well as in the society.An active learner skilled in Reactjs and Nodejs.A developer is always learning a new framework or a different programming language to either upskill,keep upto-to dated with changes or to make a career shift as such i identify with the mentioned it is only factual to state that adaptability,flexibilty and coachabilty define me as well.I love nature and hiking especially with friends is one of my hobbies besides watching documentaries and biographies,listening to podcats and poetry.</p>
       </div>


    </div>
  )
}

export default About