import {useState,useEffect} from 'react'
import '../index.css'
const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const listenToScroll = () =>{
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
       if(winScroll > heightToHidden){
        setIsVisible(true)
       } else {
        setIsVisible(false);
       }
    }
    useEffect(() => {
      window.addEventListener("scroll",listenToScroll);
      return () => {
        window.removeEventListener("scroll",listenToScroll);
      }
    },[])
    
    const goToBtn = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });
    }
  return (
    <>
    {
        isVisible && (
            <div className='go_to_top' onClick={goToBtn}>
            <i className='fa fa-arrow-up'></i>
            </div>
        )
    }
    </>
            
  )
}

export default GoToTop