import React, { useRef,useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
function Contact() {
  const formRef=useRef()
  const[sent,setSent]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current,process.env.REACT_APP_PUBLIC_KEY)
  .then((result) => {
      console.log(result.text)
      setSent(true);
  }, (error) => {
    
      console.log(error.text);
  });
  }
  return (
    <div className='contact'>
        <div className='left'>
            <h1>Connect with me </h1>
            <div className='socials'>
            <a href='https://instagram.com/bran_dyatieni' className='fa fa-instagram'/>
            <a href='https://github.com/brandy-atieno' className='fa fa-github'/>
            <a href='https://www.linkedin.com/in/brandy-atieno-2a2b2c2d2e4' className='fa fa-linkedin'/>
</div>

        </div>
        <div className='right'>
          <p>Get in touch </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name'/><br />
            <input type='text' placeholder='Subject' name='user_subject'/><br />
            <input type='text' placeholder='Email' name='user_email'/><br />
           <br /> <textarea rows='5' placeholder='Message' name='message'/>
            <button>Submit</button>
{sent && 'I will respond soon'}
          </form>
        </div>
    </div>
  )
  }

export default Contact