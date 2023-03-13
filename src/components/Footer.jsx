import React from "react";
import { styles } from "../styles";
import insta from '../assets/insta.png'
import { github } from "../assets";
import linkdin from '../assets/linkdin.png'
import gmail from '../assets/gmail.png'

const Footer = () => {
  return (
    <div className={`mt-12  rounded-[20px]`}>     
    <div className={`-mt-5 pb-14 ${styles.padd} flex flex-wrap justify-center`}>
      
    <div className='flex flex-row flex-wrap justify-center gap-6'> 
                <a href="https://github.com/saurabh-sin">
                <img src={github} alt='Github' className='w-10 h-10 object-contain'/>
                </a>
                <a href="mailto:sbhsingh6202@gmail.com">
                <img src={gmail} alt='Gmail' className='w-10 h-10 object-contain'/>
                </a>
                <a href="https://www.linkedin.com/in/saurabh-singh-3b6907195/">
                <img src={linkdin} alt='Linkdin' className='w-10 h-10 object-contain'/>
                </a>
                <a href="https://www.instagram.com/irascible_brain/">
                <img src={insta} alt='Instagram' className='w-10 h-10 object-contain'/>
                </a>
    
        </div>
     </div>
  </div>
  )
}

export default Footer