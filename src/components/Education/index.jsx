import './education.css'
import { useTranslation } from 'react-i18next';
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'

function Education({education,MEDIA_URL,expandedSection,toggleSection}){
    const { t } = useTranslation();
    return(
        <div className="educ_container">
            <div className='educ_h1' onClick={()=>toggleSection('Hide_Education')}>
                <div className='expand-educ' >
                    <h1>{t('education')}</h1>
                    {expandedSection['Hide_Education'] ?
                                <img src={minus}/>
                                :
                                <img src={plus}/>
                    }        
                </div>
                {
                    expandedSection['Hide_Education'] ? 
                        <h1 className='show_jobs_h1'>{t('institute')}</h1>
                        :
                        <h1 className='hide_h1'>{t('institute')}</h1>
                }

            </div>
            <div>
                {expandedSection['Hide_Education'] ?
                        education?.map((el,i)=>{
                            return(
                                <div key={i} className='row'>
                                    <div className='left'>
                                        <h3>{el.degree}</h3>
                                        <h3>{el.started} - {el.ended == null ? 'Actualidad' : el.ended}</h3>
                                    </div>
                                    <p>{el.description}</p>
                                    <img src={`${MEDIA_URL}${el.image}`} alt="img" />
                                </div>
                            )
                        }).sort((a, b) => new Date(a.started) - new Date(b.started)).reverse()
                        
                    :
                    <div>
                        {education?.map((el,i)=>{
                            return(
                                <div key={i} className='row-hidden'>
                                    <div className='left'>
                                        <h3>{el.degree}</h3>
                                        <h3>{el.started} - {el.ended == null ? 'Actualidad' : el.ended}</h3>
                                    </div>
                                    <p>{el.description}</p>
                                    <img src={`${MEDIA_URL}${el.image}`} alt="img" />
                                </div>
                            )
                        }).sort((a, b) => new Date(a.started) - new Date(b.started)).reverse()
                        }
                    </div>
                }
            </div>
        </div>
    )

}

export default Education