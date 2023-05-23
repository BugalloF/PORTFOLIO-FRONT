import './header.css'
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import closeAll from '../../assets/icons/eye-closed-svgrepo-com.svg'
import openAll from '../../assets/icons/eye-open-svgrepo-com.svg'
import { useState } from 'react';

function Header({expandedSection,setExpandedSection}){
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const currentURL = window.location.pathname.slice(-2);
    const HandleButtonLan= (actualLan)=>{
      if (actualLan === 'en'){
        i18n.changeLanguage('es') 
        navigate('/es')
      }  
      else{
        i18n.changeLanguage('en')
        navigate('/en')
      }      
    }
    const [eye,setEye]= useState(2)

    const setValueSections=(objeto,boolean,eye)=>{
      setEye(eye)
      for (const propiedad in objeto) {
      if (objeto.hasOwnProperty(propiedad) && objeto[propiedad] === false) {
        break; // Si encontramos al menos una propiedad en false, salimos del bucle
      }
    }
      const propiedades = Object.keys(objeto);
      const obj={}
      for (const propiedad of propiedades) {
        obj[propiedad] = boolean;
      }
      setExpandedSection(obj)
    }
  return (

      <div className="header">
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Escudo_de_Estudiantes_de_La_Plata.svg" alt="EDLP" style={{width:'100%'}}/>
        </div>
        <div className='show-hide'>
       {eye === 1 ?   
          <button onClick={()=>setValueSections(expandedSection,true,2)}> <img src={openAll} alt="" className={eye === 2 && 'disabledd'}/></button>
          :
          <button onClick={()=>setValueSections(expandedSection,false,1)}> <img src={closeAll} className={eye === 1 && 'disabledd'} alt="" /></button>
       }
        </div>
        <div className='header_row'>
          <button
            type="button"
            className={`btn-lan`}
            onClick={() =>HandleButtonLan(currentURL.toLowerCase())}
            disabled={i18n.language === 'es'}
          >
            <img src="https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg" alt="" className={i18n.language === 'es' && 'disabled'}/>
          </button>
          <button
            type="button"
            className={`btn-lan`}
            onClick={() => HandleButtonLan(currentURL.toLowerCase())}
            disabled={i18n.language === 'en'}
          >
            <img src="https://www.svgrepo.com/show/237250/england.svg" alt="" className={i18n.language === 'en' && 'disabled'}/>
          </button>

        </div>
      </div>

    )

}


export default Header