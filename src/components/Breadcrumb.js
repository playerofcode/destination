import React from 'react'
import '../index.css'
import {Link} from "react-router-dom";
const Breadcrumb = ({page}) => {
  return (
    <section className='py-3' class='page_info_section'>
        <div className='overlay'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <nav aria-label="breadcrumb" className='p-2'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/" style={{color:'deeppink'}}>Home</Link></li>
                    <li class="breadcrumb-item" aria-current="page">{page}</li>
                </ol>
             </nav>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Breadcrumb