import React,{useRef,useState} from 'react'
import './contact.scss'
import { motion,useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    }
  }
}

export const Contact = () => {

  const[error,setError]=useState(null)
  const [sent,setSent]=useState(false)
  const ref=useRef()
  const formRef=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b97o4nr', 'template_4ssguke', formRef.current, {
        publicKey: 'tXr3Y_Rbpt5C9OAeg',
      })
      .then(
        () => {
          setError(false)
          setSent(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true)
          setSent(true)
          console.log('FAILED...', error.text);
        },
      );
  };


  const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className='textContainer' variants={variants}>
        <motion.h1>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Sample Street , New York</span>
        </motion.div>
        <motion.div className="item" variants={variants} >
          <h2>Phone</h2>
          <span>+91 893 824 9842</span>
        </motion.div>
      </motion.div>

      {/* form starts here */}
      <div className="formContainer">
        {/* <motion.div className="phoneSVG" initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration:1,delay:3}}> */}
        {/* <svg  fill="#ffffff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.442 27.442" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> 
          <motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition  d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546 c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481 s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469 c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z M19.995,21.1H7.448V3.373h12.547V21.1z">
            </motion.path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>
          </svg> */}
        {/* </motion.div> */}
        <motion.form initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.3}} ref={formRef} >
          <input type="text"  placeholder='Name' name='from_name' />
          <input type="email" required placeholder='Email' name="email" />
          <textarea rows={8} placeholder='Message' name='message'/>
          <button onClick={sendEmail}>Submit</button>
          {sent?(error?"Message Failed":"Message Sent Successfully ") :" "}
        </motion.form>
      </div>
    </motion.div>
  )
}
