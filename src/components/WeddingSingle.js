import {useParams, useNavigate} from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import axios from 'axios';
import {useState,useEffect} from 'react'
const WeddingSingle = () => {
    const navigate = useNavigate();
    let {slug} = useParams();
    const [data,setData]=useState([]);
	  const [loading,setLoading]=useState(true);
		const APIData = async()=>{
			try {
			  const response = await axios.get(`https://eventplanet.in/api/auth/destination_wedding?slug=${slug}`);
			  setData(response.data.data);
			  setLoading(false);
			} catch (error) {
			  console.error("Error get "+error);
			}
		  }
		  useEffect(() => {
			APIData();
		  },[data]);
  return (
    <>
    <Breadcrumb page="Destination Wedding"/>
    <div className='container'>
    <div className="row py-4" style={{textAlign:"justify"}}>
    <button onClick={() => navigate(-1)} className="btn btn-sm" style={{width:'100px'}}><i className='fa fa-arrow-left'></i> &nbsp;Go back</button> 
    {loading && (<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>)}
      {
        data.map((item)=>{
          return(
            <div className="col-md-12" key={item.id}>
					<h3 className='text-center fw-bold' style={{color:'#7B2B88'}}>{item.title}</h3>
          <img src={item.image} className='img-fluid rounded ' alt={item.title} style={{height:"200px",float:'left',margin:'20px'}}/>
          <div dangerouslySetInnerHTML={{__html:item.content}}></div>
				</div>
          )
        })
      }
				
	</div>
    </div>
    </>
  )
}

export default WeddingSingle