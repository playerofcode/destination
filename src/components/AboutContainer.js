import AboutItem from './AboutItem';
const AboutContainer = () =>{
	return(
		<>
			<div className="container">
				<div className="row py-4">
					<div className="col-md-12">
					<h3 className='text-center fw-bold mb-4' style={{color:'#7B2B88'}}>About Us</h3>
					</div>
					<div className="row">
						<AboutItem img="./images/banner.jpg" heading="Destination Weddings in India" content="Event Planet India is one of the leading EVENT MANAGEMENT companies based in Lucknow that also travels across the country and internationally to offer its professional assistance, innovative ideas, creativity and technology to craft memorable experiences.Since its inception in 2016, Event Planet India has emerged as a pioneer in Weddings, Birthday Parties, Corporate Events, Government Events, Entertainment Events, Sports Events and many more. Within some years, it has managed to pull off 230+ events till march 2022."/>
					</div>
				</div>
			</div>
		</>
	);
}
export default AboutContainer;