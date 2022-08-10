const ContactInfo = ({icon,info}) =>{
	return(
		<div className="card m-2 shadow-sm" data-aos="fade-in">
			<div className="card-body">
				
				<h6> <i className={`${icon} fa-2x`} style={{color:'#7B2B88'}}></i> {info}</h6>
			</div>
		</div>
	);
}
export default ContactInfo;