import ServiceItem from './ServiceItem';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ServiceContainer = () =>{
	const [data,setData]=useState([]);
	console.log(data);
	const [loading,setLoading]=useState(true);
		const APIData = async()=>{
			try {
			  const response = await axios.get('https://eventplanet.in/api/auth/destination_wedding_services');
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
		<div className="container">
		<div className="row py-4">
				<div className="col-md-12">
					<h3 className='text-center fw-bold' style={{color:'#7B2B88'}}>Our Services</h3>
				</div>
			</div>
			<div className="row">
			{loading && (
				<div className='row my-4'>
			<div className='col-md-3 text-center'>
				<Skeleton circle height={70} width={70} containerClassName="avatar-skeleton"/>
				<Skeleton height={30}/>
				<Skeleton count={3} />
			</div>
			<div className='col-md-3 text-center'>
			<Skeleton circle height={70} width={70} containerClassName="avatar-skeleton"/>
				<Skeleton height={30}/>
				<Skeleton count={3} />
		</div>
		<div className='col-md-3 text-center'>
		<Skeleton circle height={70} width={70} containerClassName="avatar-skeleton"/>
				<Skeleton height={30}/>
				<Skeleton count={3} />
	</div>
	<div className='col-md-3 text-center'>
	<Skeleton circle height={70} width={70} containerClassName="avatar-skeleton"/>
				<Skeleton height={30}/>
				<Skeleton count={3} />
</div>
</div>
			)}
			{
				data.map((item)=>{
					return(
						<ServiceItem icon={item.image} title={item.title} key={item.id} content={item.content}/>
					);
				})
			}
			</div>
		</div>
	);
}
export default ServiceContainer;