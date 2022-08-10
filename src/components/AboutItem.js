const AboutItem = ({img,heading,content}) =>{
	return(
		<>
		<div className="col-lg-6 col-md-6 col-sm-12 col-12">
			<img src={img} alt={heading} className="img-fluid rounded" data-aos="zoom-in-right"/>
		</div>
		<div className="col-lg-6 col-md-6 col-sm-12 col-12">
		<h3 className='text-center fw-bold' style={{color:'#7B2B88'}} data-aos="fade-out">{heading}</h3>
		<p style={{textAlign:'justify'}} className="text-muted" data-aos="fade-out">{content}</p>
		</div>
		</>
	);
}
export default AboutItem;