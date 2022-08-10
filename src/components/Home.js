import {Link} from "react-router-dom";
import Destination from './Destination'
import ServiceContainer from './ServiceContainer'
import AboutContainer from './AboutContainer'
import ContactContainer from './ContactContainer'
const Home = () =>{
	return(
		<>
		<div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
          <div className='home_banner'>
              <div className='overlay_home'>
                <h1 className='text-white ' data-aos="fade-in">Hi! Welcome to Destination Weddings</h1>
                <p className='text-center text-white'>“Good fortune is what happens when opportunity meets with planning.”</p>
                <Link to="/destination-wedding" className='btn btn-success custom_btn' data-aos="zoom-in">Choose Destination &nbsp; <i className='fas fa-briefcase'></i></Link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <AboutContainer/>
    <Destination/>
    <ServiceContainer/>
    <ContactContainer/>
		</>
	);
}
export default Home;