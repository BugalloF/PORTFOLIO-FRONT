import {motion} from 'framer-motion'
import Code from '../../assets/framer/code-1115-svgrepo-com.svg'
import Love from '../../assets/framer/heart-svgrepo-com.svg'

import './framer.css'
function Background(){
    return(
        <div className='background'>
            <motion.img 
            src={Code}
            initial={{ scale: 0.1, opacity: 1,rotate:0}}
            animate={{scale: [0.05, 0.1, 0.05,0.05, 0.1, 0.05]}}
            transition={{duration:0.7,repeat:Infinity, repeatType:'reverse',repeatDelay: 5,}}
            className='pos code'
            />

            <motion.img 
            src={Love}
            initial={{ scale: 0.1, opacity: 1}}
            animate={{scale: [0.1, 0.2, 0.1,0.1, 0.2, 0.1] }}
            transition={{duration:0.7,repeat:Infinity, repeatType:'reverse',repeatDelay: 5,}}
            className='pos love'
            />

            

           
        </div>
    )
}

export default Background