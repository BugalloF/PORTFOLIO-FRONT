import { useTranslation } from 'react-i18next';
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import './jobs.css'

function Jobs({jobs,MEDIA_URL,toggleSection,expandedSection}){
    const { t } = useTranslation();

    return(
        <div className="jobs_container" onClick={()=>toggleSection('Hide_Jobs')}>
            <div className='jobs_h1' >
                <div className='expand-jobs' >
                        <h1>{t('jobs')}</h1>
                        {expandedSection['Hide_Jobs'] ?
                                    <img src={minus} alt='expand'/>
                                    :
                                    <img src={plus} alt='expand'/>
                        }        
                    </div>
                
                {/* Si es mobile, no quiero que se muestre nada */}
                {!window.innerWidth<800?  expandedSection['Hide_Jobs'] ?   
                 <h1 className='show_jobs_h1'>{t('technologies')}</h1>
                 :
                 <h1 className='hide_h1'>{t('technologies')}</h1>
                :<></>
                }



            </div>
            {
                expandedSection['Hide_Jobs'] ?
            <div>
                {
                    jobs?.map((el,i)=>{
                        return(
                            <div key={i} className='jobs_row'>
                                <div className='jobs_left'>
                                    <h3>{el.company}</h3>
                                    <h5>{el.started} - {el.ended == null ? 'Actualidad' : el.ended}</h5>
                                    <img src={`${MEDIA_URL}${el.logo}`} alt={`${el.company} img`} />
                                </div>
                                <p>{el.description}</p>
                                <div className='logo-container'>
                                    {el.technologies.map((item,index)=>{
                                        return<div key={index} className="logo-wrapper">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image" />
                                       </div>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                :
                <div>
                {
                    jobs?.map((el,i)=>{
                        return(
                            <div key={i} className='jobs_row-hidden'>
                                <div className='jobs_left'>
                                    <h3>{el.company}</h3>
                                    <h5>{el.started} - {el.ended == null ? 'Actualidad' : el.ended}</h5>
                                    <img src={`${MEDIA_URL}${el.logo}`} alt={`${el.company} img`} />
                                </div>
                                <p>{el.description}</p>
                                <div className='logo-container'>
                                    {el.technologies.map((item,index)=>{
                                        return<div key={index} className="logo-wrapper">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image" />
                                       </div>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            } 
        </div>
    )

}

export default Jobs