import * as React from 'react';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PhoneIcon from '@material-ui/icons/Phone';
import BookIcon from '@material-ui/icons/Book';
import LanguageIcon from '@material-ui/icons/Language';
import './about.css';
import { useTranslation } from 'react-i18next';

function About({ MEDIA_URL, lan }) {
    const { t } = useTranslation();
    let isMobile = window.innerWidth < 800;
    
    const buttonStyles = {
        color: 'white',
        borderColor: 'white',
        width: '150px',
        padding: '10px',
        ':hover': {
            transform: 'scale(1.5)',
            color: 'green'
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
                {isMobile ? <img src={`${MEDIA_URL}/media/cv/CV.jpg`} alt="Fermin" /> : null}
                <h1>{t('about')}</h1>
                <h5>{t('about_desc')}</h5>
                
                <div className='buttons-container'>
                    <Button variant="outlined" startIcon={<PictureAsPdfIcon />} style={buttonStyles} onClick={() => window.open(`${MEDIA_URL}/media/cv/FB_${lan}.pdf`)}>
                        CV
                    </Button>
                    <Button variant="outlined" startIcon={<PhoneIcon />} style={buttonStyles} onClick={scrollToBottom}>
                        {t('contact')}
                    </Button>
                    <Button variant="outlined" startIcon={<BookIcon />} style={buttonStyles} onClick={() => window.open(`${MEDIA_URL}/media/cv/UNLP.pdf`)}>
                        {t('studies')}
                    </Button>
                    <Button variant="outlined" startIcon={<LanguageIcon />} style={buttonStyles} onClick={() => window.open(`${MEDIA_URL}/media/cv/Kaplan.pdf`)}>
                        Kaplan
                    </Button>
                </div>
            </div>
            {!isMobile ? <img src={`${MEDIA_URL}/media/cv/CV.jpg`} alt="Fermin" /> : null}
        </div>
    );
}

export default About;
