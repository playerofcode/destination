import {useState} from 'react'
import {Link} from "react-router-dom";
import NavItem from './NavItem';
import '../index.css'
const Navbar = () => {
    const [hide,setHide]=useState(false);
    const [menu,setMenu]=useState([
    {
      href:"/",
      name:"Home"
    },
    {
      href:"/about",
      name:"About"
    },
    {
      href:"/destination-wedding",
      name:"Destination Wedding"
    },
    {
      href:"/services",
      name:"Services"
    },
    {
      href:"/contact",
      name:"Contact"
    },
    ]);
    const hideMenu = () =>{
      setHide(!hide);
    }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container">
    <Link class="navbar-brand" to="/">
      <img src="../images/logo_main.png" style={{height:"50px"}}/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setHide(!hide)}>
      {/* <span class="navbar-toggler-icon"></span> */}
      <i className={`fa ${hide ? "fa-xmark" : "fa-bars"}`}></i>
    </button>
    <div class={`collapse navbar-collapse ${hide ? "show" : ""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
      {
        menu.map((menu,index)=>{
          return(
            <NavItem href={menu.href} name={menu.name} key={index} hideMenu={hideMenu}/>
          )
        })
      }
      </ul>
 
    </div>
  </div>
</nav>
    <a href="https://wa.me/919369213200">
    <div className='whatsapp_icon'>
      <i className='fab fa-whatsapp'></i>
    </div>
    </a>
    </>
  )
}

export default Navbar