import {Link} from 'react-router-dom'
const DestinationItem = ({src,slug}) =>{
	return(
		<>
		
		<div className="col-md-3 col-sm-6 col-6" >
			<Link to={`/destination-wedding/${slug}`}><img src={src} className="img-fluid" data-aos="zoom-in"/></Link>
		</div>
		
		</>
	);
}
export default DestinationItem;