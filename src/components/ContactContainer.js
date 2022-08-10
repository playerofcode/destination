import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
const ContactContainer = () =>{
	return(
		<>
		<div className="container">
			<div className="row py-4">
					<div className="col-md-12">
					<h3 className='text-center fw-bold mb-4' style={{color:'#7B2B88'}}>Contact Us</h3>
					</div>
			<div className="row">
				<div className="col-md-6">
					<ContactInfo icon="fa fa-map-marker" info="Lucknow, India"/>
					<ContactInfo icon="fa fa-phone" info="+91 8188088878"/>
					<ContactInfo icon="fa fa-envelope" info="info@eventplanet.in"/>
				</div>
				<div className="col-md-6">
					<ContactForm />
				</div>
			</div>
			</div>
		</div>
		</>
	);
}
export default ContactContainer