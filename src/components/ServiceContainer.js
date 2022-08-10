import ServiceItem from './ServiceItem';
import {useState} from 'react'
const ServiceContainer = () =>{
	const [data,setData]=useState([
			{
				icon:"./images/service/service1.png",
				title:"VENUE SELECTION",
				content:"We would find the perfect Indian wedding location for your wedding. The venue should be such that it blends well"
			},
			{
				icon:"./images/service/service2.png",
				title:"INVITATION",
				content:"Being a host, one has to send invitation cards to the guest for the very special day of your life."
			},
			{
				icon:"./images/service/service3.png",
				title:"BRIDAL MAKEUP'S",
				content:"Every bride dreams of her wedding day and wants to be at her best appearance on that particular day."
			},
			{
				icon:"./images/service/service4.png",
				title:"Wedding Decoration",
				content:"Create an amazing atmosphere tailored to how you envision your special day with extraordinary."
			},
			{
				icon:"./images/service/service5.png",
				title:"CATERING",
				content:"As one of the leading wedding planning specialists, Indian Wedding Planners has built a good reputation."
			},
			{
				icon:"./images/service/service6.png",
				title:"TRANSPORTATION",
				content:"Planning weddings can be stressful. Making transportation arrangements for not only you and your fiance."
			},
			{
				icon:"./images/service/service7.png",
				title:"HOSPITALITY",
				content:"Hospitality plays a vital role in any wedding. The marriage ceremony is elaborate now a days and spans over a few days."
			},
			{
				icon:"./images/service/service8.png",
				title:"PHOTOGRAPHERS",
				content:"Weddings today are more of a photo opportunity than just being a marriage. In fact the photographer and videographer."
			},
			{
				icon:"./images/service/service9.png",
				title:"ENTERTAINMENT",
				content:"There is no wedding without music, dance, dholaks or bells. There are all sorts of enriching events spread over 2-3 days."
			},
			{
				icon:"./images/service/service10.png",
				title:"SECURITY",
				content:"Weddings can present a unique security opportunity. Although mostly a happy occasion."
			},
			{
				icon:"./images/service/service11.png",
				title:"HONEYMOON-PACKAGES",
				content:"Start your married life in a perfect way by choosing a package from our excellent range of Honeymoon Packages Services."
			}

		]);
	return(
		<div className="container">
		<div className="row py-4">
				<div className="col-md-12">
					<h3 className='text-center fw-bold' style={{color:'#7B2B88'}}>Our Services</h3>
				</div>
			</div>
			<div className="row">
			{
				data.map((item,index)=>{
					return(
						<ServiceItem icon={item.icon} title={item.title} key={index} content={item.content}/>
					);
				})
			}
			</div>
		</div>
	);
}
export default ServiceContainer;