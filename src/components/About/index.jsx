import * as React from 'react';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PhoneIcon from '@material-ui/icons/Phone';
import './about.css'
import { useTranslation } from 'react-i18next';
function About({MEDIA_URL,lan}){
    const { t } = useTranslation();
    let isMobile = window.innerWidth < 800 ? true : false
    const buttonStyles = {
        color: 'white',             // Cambiar el color del texto a blanco
        borderColor:'white',
        width:'150px',
        padding:'10px',
        ':hover': {
          transform: 'scale(1.5)',  // Aplicar escala en el hover
          color:'green'
        },
      };
      const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      };
    return (
    <div className='about_row'>
        <div className='about_left'>
            <h1>Fermin Bugallo</h1>
            {isMobile ? <img src={`${MEDIA_URL}media/cv/CV.jpg`} alt="Fermin" /> : <></> }
            {/* <img src="https://www.svgrepo.com/show/42915/hello-speech-bubble-handmade-chatting-symbol.svg" alt="" /> */}
            <h1>{t('about')}</h1>
            <h5>{t('about_desc')}</h5>
            <div className='about_row'>
            <Button variant="outlined" startIcon={<PictureAsPdfIcon/>} style={buttonStyles} onClick={()=>window.open(`${MEDIA_URL}media/cv/FB_${lan}.pdf`)}>
              CV
                </Button>
                <Button variant="outlined" startIcon={<PhoneIcon />} style={buttonStyles} onClick={scrollToBottom}>
                {t('contact')}
                </Button>
            </div>
        </div>
        {!isMobile ? <img src={`${MEDIA_URL}media/cv/CV.jpg`} alt="Fermin" /> : <></> }
        
    </div>)
}

export default About