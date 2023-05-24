import './skills.css'
import { useTranslation } from 'react-i18next';
import SoftSkillsCard from '../SoftSkillsCard/index.jsx';
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'

function Skills ({skills,soft_skills,toggleSection,expandedSection}){
    const { t } = useTranslation();
    const {REACT_APP_API_MEDIA} = process.env
    return(
     <div className='skills_container'>
        <div className='expand' onClick={()=>toggleSection('Hide_Skills')}>

            <h1>{t('skills')}</h1>
            {expandedSection['Hide_Skills'] ?
                        <img src={minus} alt='expand'/>
                        :
                        <img src={plus} alt='expand'/>
                    }        

        </div>
        { 
        expandedSection['Hide_Skills'] ?
            <div className="grid-container">
            
            {
                skills.map(skill => { 
                    if(!skill.is_soft_skill){
                        return <div className='skill'>
                        <img src={`${REACT_APP_API_MEDIA}${skill.logo}`} alt={skill.title} />
                        <h5>{skill.title}</h5>
                        </div>
                        }
                    return <></>
                    })
                    
                    
            }
            </div>
        :
        <div className="grid-container-hidden">
            
            {
                skills.map(skill => { 
                    if(!skill.is_soft_skill){
                        return <div className='skill'>
                        <img src={`${REACT_APP_API_MEDIA}${skill.logo}`} alt={skill.title} />
                        <h5>{skill.title}</h5>
                        </div>
                        }
                    return <></>
                    })
                    
                    
            }
        </div>    
        }
        <div className='expand' onClick={()=>toggleSection('Hide_Soft_Skills')}>
            <h1>{t('soft_skills')}</h1>
            {expandedSection['Hide_Soft_Skills'] ?
            <img src={minus} alt='expand'/>
            :
            <img src={plus} alt='expand'/>
            }        
        </div>

        {
        expandedSection['Hide_Soft_Skills'] ?
                <div className='grid-container-soft'>
                    
                    {
                        soft_skills.map(skill => { 
                            if(skill.is_soft_skill){
                                return <SoftSkillsCard
                                    title={skill.title}
                                    img={`${REACT_APP_API_MEDIA}${skill.logo}`}
                                    description={skill.description}
                                />
                                }
                                return <></>
                            })
                    }
                </div>
            :
            <div className='grid-container-soft-hidden'>
                    
                    {
                        soft_skills.map(skill => { 
                            if(skill.is_soft_skill){
                                return <SoftSkillsCard
                                    title={skill.title}
                                    img={`${REACT_APP_API_MEDIA}${skill.logo}`}
                                    description={skill.description}
                                />
                                }
                                return <></>
                            })
                    }
            </div>
        
        }

    </div>
)}


export default Skills