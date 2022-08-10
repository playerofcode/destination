import React from 'react'

const Footer = () => {
  return (
<div className="container-fluid p-0">
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: '#1c2331'}}>
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: '#6351ce'}}>
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="https://business.facebook.com/event.planet.india/?ref=py_c" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/EventPlanet4?t=INTPaTinc9-Kfuu4Qc75zQ&s=09" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/event_planet_india/" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/event-planet-9a475219b/" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Destination Wedding</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}/>
            <p className='justify text-white'>
           We understand the importance of your special events, so we promise you to make your Event Memorable. We as a company offer our clients the best services, with the help of an amazing team.
            </p>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Destination Wedding</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" className="text-white">Destination Wedding in Lucknow</a>
            </p>
            <p>
              <a href="#!" className="text-white">Destination Wedding in Udaipur</a>
            </p>
            <p>
               <a href="#!" className="text-white">Destination Wedding in Delhi</a>
            </p>
            <p>
               <a href="#!" className="text-white">Destination Wedding in Agra</a>
            </p>
            <p>
               <a href="#!" className="text-white">Destination Wedding in Jaipur</a>
            </p>
            
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p><i className="fas fa-home mr-3"></i>  LUCKNOW, UP, 226010</p>
            <p><i className="fas fa-envelope mr-3"></i> info@eventplanet.in</p>
            <p><i className="fas fa-phone mr-3"></i> +91 8188088878</p>
          </div>
        </div>
      </div>
    </section>
    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2022 Copyright &nbsp; <a className="text-white" href="@">Event Planet Team</a
        >
    </div>
  </footer>
</div>
  )
}

export default Footer