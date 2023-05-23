import './footer.css'
import { useTranslation } from 'react-i18next';
import github from '../../assets/icons/social-github-svgrepo-com.svg'
import linkedin from '../../assets/icons/linkedin-svgrepo-com.svg'
function Footer(){
    const { t } = useTranslation();
    return <div className='footer'>
        <h3>Email: bugallof@gmail.com</h3>
        <p>© | {t('thanks')} </p>
            <div className='moreinfo'>
              <button onClick={()=>window.open('https://www.linkedin.com/in/fermin-bugallo-7aa0021b5/')}>
                  <img src={linkedin} alt="LinkedIn" />
              </button>
             <button onClick={()=>window.open('https://github.com/BugalloF/')}>
                  <img src={github} alt="Github" />
              </button>
            </div>
    </div>
}


export default Footer