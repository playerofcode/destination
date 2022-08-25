import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './../index.css';
const ContactForm = () => {

    const [data,setData]=useState({
        name:'',
        email:'',
        subject:'',
        mobno:'',
        message:''
    });
    const formHandler = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
    }
    const SubmitHandler = () =>{
        const {name,email,mobno,subject,message}= data;
        if(name.length < 4){
         toast.error('Name should be atleast 4 characters');
        }else if(!RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
         toast.error('Invalid email');
        }else if(!RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/).test(mobno)){
            toast.error('Invalid Mobile Number');
        }else if(subject.length < 4){
         toast.error('Subject should be atleast 4 characters');
        }else if(message.length < 55){
         toast.error('Message should be atleast 55 characters');
        }
        else{
            axios.post('https://eventplanet.in/api/auth/destination_wedding_enquiry', data)
              .then((response) => {
                console.log(response.data);
              }).catch(error=>console.log(error));
        //  toast.success('Form submitted successfully.');
        //  setData({
        //     name:'',
        //     email:'',
        //     mobno:'',
        //     subject:'',
        //     message:''
        // });
        }
    }
  return (
    <>
                <form className="contact_form" method='post'>
                    <div className='form-group'>
                        <input type="text" name="name" className='form-control' onChange={formHandler} value={data.name} placeholder='Enter Name'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name="email" className='form-control' onChange={formHandler}  value={data.email} placeholder='Enter Email'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name="mobno" className='form-control' onChange={formHandler}  value={data.mobno} placeholder='Enter Mobile Number'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name="subject" className='form-control' onChange={formHandler}  value={data.subject} placeholder='Enter Subject'/>
                    </div>
                    <div className='form-group'>
                        <textarea type="text" name="message" className='form-control' onChange={formHandler}  value={data.message} placeholder='Write Your Message...'>
                        </textarea>
                    </div>
                    <div className='form-group mt-3 text-center'>
                        <input type="button" value="Submit" className='btn btn-success btn-sm custom_btn' onClick={SubmitHandler} />
                    </div>
                </form>
    <ToastContainer />
    </>
  )
}

export default ContactForm