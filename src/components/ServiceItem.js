const ServiceItem = ({icon,title,content}) =>{
	return(
		<>		
		<div className="col-md-3 col-sm-6 col-12">
			<div className="card border-0" data-aos="zoom-in" >
				<div className="card-body text-center">
					<img src={icon} alt={title} style={{height:'50px',marginBottom:'30px'}}/>
					<h3 style={{fontSize:'18px',color:'#BE2168'}}>{title}</h3>
					<p className="text-muted" style={{fontSize:'12px'}}>{content}</p>
				</div>
			</div>
		</div>
		</>
		);
}
export default ServiceItem;