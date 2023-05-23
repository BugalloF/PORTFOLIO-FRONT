import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './projects.css'
import { useTranslation } from 'react-i18next';
import {  useState } from "react";
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import github from '../../assets/icons/social-github-svgrepo-com.svg'
import world from '../../assets/icons/world-1-svgrepo-com.svg'
import Button from '@mui/material/Button';

function Projects({projects,MEDIA_URL,openLightbox,toggleSection,expandedSection}){

   const { t } = useTranslation();


   const handleButtonClick = (url) => {
        window.open(url, '_blank');
      };

    const [expandedProject, setExpandedProject] = useState({});
    const toggleProject = (ProjectName) => {
        setExpandedProject({
          ...expandedProject,
          [ProjectName]: !expandedProject[ProjectName],
        });
    };

    let buttonStyles = {}
    if(window.innerWidth<800){
       buttonStyles = {
        color: 'white',             // Cambiar el color del texto a blanco
        borderColor:'white',
        width:'135px',
        height:'50px',
        padding:'0px',
        'img':{
          width:'15px'
        },
        ':hover': {
          transform: 'scale(1.5)',  // Aplicar escala en el hover
          color:'green'
        },
      };

    }
    else{
       buttonStyles = {
        color: 'white',             // Cambiar el color del texto a blanco
        borderColor:'white',
        width:'150px',
        padding:'10px',
        'img':{
          width:'50px'
        },
        ':hover': {
          transform: 'scale(1.5)',  // Aplicar escala en el hover
          color:'green'
        },
      };
    }

    return(
        <div className='project_base' >
            <div className='expand-projects' onClick={()=>toggleSection('Hide_Projects')} >
                        <h1>{t('projects')}</h1>
                        {expandedSection['Hide_Projects'] ?
                                    <img src={minus}/>
                                    :
                                    <img src={plus}/>
                        }        
              </div>
            {
              expandedSection['Hide_Projects'] ?
              <div>

            {
              projects?.map((project,idx) => (
                <div key={project.id} className={'project_container'} >

                  <div className='projects_left' >
                    <h3>{project.title}</h3>
                    <h5>{project.started} - {project.ended == null ? 'Actualidad' : project.ended}</h5>
                    <img src={`${MEDIA_URL}${project.logo}`} alt="" />
                  {expandedProject[project.title] ?
                    <button onClick={()=>toggleProject(project.title)}><img src={minus}/></button>
                    :
                    <button onClick={()=>toggleProject(project.title)}><img src={plus}/></button>
                  }
                  </div>
                  <div className={`project_row_middle`}>
                     <p>{project.description}</p>
                     <div className='middle_row'>
                        {
                          project.url_back ?
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_back)}>
                            <img src={github} alt="" style={{ width: '20px', height: '20px' }}
                            />
                            &nbsp;
                            {project.url_front ? 'Backend' : t('repositories')}
                          </Button>
                           :
                           <></>
                        }
                         {
                          project.url_front ? 
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_front)}>
                            <img src={github} alt="" style={{ width: '20px', height: '20px' }}/>
                            &nbsp;
                            FrontEnd
                          </Button>
                          :
                          <></>
                        }
                        {
                          project.url_deploy ? 
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_deploy)}>
                            <img src={world} alt="" style={{ width: '20px', height: '20px' }}/>
                            &nbsp;
                            Deploy
                          </Button> 
                          :<></>
                        }                        
                     </div>

                     { expandedProject[project.title] ?
                    <div className={'logo-container-projects'}>
                                    {project.technologies.map((item,index)=>{
                                      return<div key={index} className="logo-wrapper-projects">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image-projects" />
                                       </div>
                                    })}
                      </div> 
                      : 
                      <div className='logo-container-projects-hidden'>
                           {project.technologies.map((item,index)=>{
                                        return<div key={index} className="logo-wrapper-projects">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image-projects" />
                                       </div>
                                    })}
                      </div>
                      }
                  </div>

                  <Carousel
                     showStatus={false}
                     showArrows={true}
                     showThumbs={false}
                     className="custom-carousel"
                     infiniteLoop={true}
                     >
                    {project.images.map((item,index) => (
                      <div key={item.id} onClick={() => openLightbox(idx,index)} className='project_images'>
                        <img src={`${MEDIA_URL}${item.image}`} alt={`${project.title} img`} id={`image-${index}`}/>
                        <p>Click y zoom para más detalle.</p>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )).sort((a, b) => b.ended - a.ended).reverse()
            }
            </div>
            :

            // Acá se repite el componente pero es para la animación
            <div>

            {
              projects?.map((project,idx) => (
                <div key={project.id} className={'project_container-hidden'} >

                  <div className='projects_left' >
                    <h3>{project.title}</h3>
                    <h5>{project.started} - {project.ended == null ? 'Actualidad' : project.ended}</h5>
                    <img src={`${MEDIA_URL}${project.logo}`} alt="" />
                  {expandedProject[project.title] ?
                    <button onClick={()=>toggleProject(project.title)}><img src={minus}/></button>
                    :
                    <button onClick={()=>toggleProject(project.title)}><img src={plus}/></button>
                  }
                  </div>
                  <div className={`project_row_middle`}>
                     <p>{project.description}</p>
                     <div className='middle_row'>
                        {
                          project.url_back ?
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_back)}>
                            <img src={github} alt="" style={{ width: '20px', height: '20px' }}
                            />
                            &nbsp;
                            {project.url_front ? 'Backend' : t('repositories')}
                          </Button>
                           :
                           <></>
                        }
                         {
                          project.url_front ? 
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_front)}>
                            <img src={github} alt="" style={{ width: '20px', height: '20px' }}/>
                            &nbsp;
                            FrontEnd
                          </Button>
                          :
                          <></>
                        }
                        {
                          project.url_deploy ? 
                          <Button variant="outlined" style={buttonStyles} onClick={()=>handleButtonClick(project.url_deploy)}>
                            <img src={world} alt="" style={{ width: '20px', height: '20px' }}/>
                            &nbsp;
                            Deploy
                          </Button> 
                          :<></>
                        }                        
                     </div>

                     { expandedProject[project.title] ?
                    <div className={'logo-container-projects'}>
                                    {project.technologies.map((item,index)=>{
                                      return<div key={index} className="logo-wrapper-projects">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image-projects" />
                                       </div>
                                    })}
                      </div> 
                      : 
                      <div className='logo-container-projects-hidden'>
                           {project.technologies.map((item,index)=>{
                                        return<div key={index} className="logo-wrapper-projects">
                                         <img src={`${MEDIA_URL}${item.logo}`} alt={item.description} className="logo-image-projects" />
                                       </div>
                                    })}
                      </div>
                      }
                  </div>

                  <Carousel
                     showStatus={false}
                     showArrows={true}
                     showThumbs={false}
                     className="custom-carousel"
                     infiniteLoop={true}
                     >
                    {project.images.map((item,index) => (
                      <div key={item.id} onClick={() => openLightbox(idx,index)} className='project_images'>
                        <img src={`${MEDIA_URL}${item.image}`} alt={`${project.title} img`} id={`image-${index}`}/>
                        <p>Click y zoom para más detalle.</p>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )).sort((a, b) => b.ended - a.ended).reverse()
            }
            </div>
            }



        </div>
    )

}

export default Projects