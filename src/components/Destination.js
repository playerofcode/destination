import DestinationItem from './DestinationItem';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useState,useEffect} from 'react'
const Destination = () =>{
	const [data,setData]=useState([]);
	const [loading,setLoading]=useState(true);
		const APIData = async()=>{
			try {
			  const response = await axios.get('https://eventplanet.in/api/auth/destination_wedding');
			  setData(response.data.data);
			  setLoading(false);
			} catch (error) {
			  console.error("Error get "+error);
			}
		  }
		  useEffect(() => {
			APIData();
		  },[]);
	return(
		<>	
		<section style={{padding:'50px 0'}}>
		<div className="container">
		<div className="row py-4">
				<div className="col-md-12">
					<h3 className='text-center fw-bold' style={{color:'#7B2B88'}}> Our Destination Wedding Location</h3>
				</div>
			</div>
			<div className="row">
			{loading && <Skeleton count={5}/>}
			{
				data.map((item)=>{
					return (<DestinationItem src={item.image} slug={item.slug} key={item.id}/>)
				})
			}
			</div>
		</div>
		</section>	
		</>
	);
}
export default Destination;