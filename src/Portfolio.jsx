import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchEducation,FetchJobs,FetchProjects,FetchSkills} from "./redux/actions";
import { useParams } from 'react-router-dom';
import Background from "./components/Framer/index.jsx";
import Hello from "./components/Hello/Hello.jsx";
import Header from "./components/Header/index.jsx";
import Lightbox from 'react-image-lightbox';
import Education from "./components/Education/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Jobs from "./components/Jobs/index.jsx";
import Skills from "./components/Skills/index.jsx";
import About from "./components/About/index.jsx";
import Footer from "./components/Footer/index.jsx";
import MouseEffect from "./components/MouseEffect/index.jsx";
import './Portfolio.css'

function Portfolio(){
    const dispatch = useDispatch();
    const [animationComplete, setAnimationComplete] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxProjectIndex, setLightboxProjectIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const {REACT_APP_API_MEDIA} = process.env
    const {lan} = useParams()
    
    const openLightbox = (idx,index) => {
      setLightboxProjectIndex(idx)
        setLightboxIndex(index);
        setLightboxOpen(true);
        setScrollPosition(window.pageYOffset)
        
      };
    const closeLightbox = () => {
        setLightboxOpen(false);
        window.scrollTo(0,scrollPosition)
      };

    const [expandedSection, setExpandedSection] = useState({
      Hide_Jobs:true,
      Hide_Skills:true,
      Hide_Soft_Skills:true,
      Hide_Education:true,
      Hide_Projects:true
    });
    const toggleSection = (SectionName) => {
        setExpandedSection({
          ...expandedSection,
          [SectionName]: !expandedSection[SectionName],
        });
    };

    useEffect(() => {
          dispatch(FetchEducation(lan));
          dispatch(FetchJobs(lan));
          dispatch(FetchProjects(lan));
          dispatch(FetchSkills(lan));
          setTimeout(() => {
            setAnimationComplete(true)
          }, 2000);
          return () => {
            window.scrollTo(0,0); 
          };
        }, [dispatch,lan])

    const jobs_arr = useSelector(state=>state.jobs)
    const skills_arr = useSelector(state=>state.skills)
    const education_arr = useSelector(state=>state.education)
    const projects_arr = useSelector(state=>state.projects)
    
    return (
      
      !animationComplete ? <Hello/> :

      !lightboxOpen? 
      <div>
        <div className='container'>
        <Background/>
        <MouseEffect/>
          <Header
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          />

          <About
          MEDIA_URL={REACT_APP_API_MEDIA}
          lan={lan.toLowerCase()}
          />

          <Skills
            skills={skills_arr}
            MEDIA_URL={REACT_APP_API_MEDIA}
            expandedSection={expandedSection}
            toggleSection={toggleSection}
          />

          <Education
            education={education_arr} 
            MEDIA_URL={REACT_APP_API_MEDIA}
            expandedSection={expandedSection}
            toggleSection={toggleSection}
          />
          <Jobs
            jobs={jobs_arr}
            MEDIA_URL={REACT_APP_API_MEDIA}
            expandedSection={expandedSection}
            toggleSection={toggleSection}
          />
          <Projects
            projects={projects_arr}
            openLightbox={openLightbox}
            MEDIA_URL={REACT_APP_API_MEDIA}
            expandedSection={expandedSection}
            toggleSection={toggleSection}
          />

          <Footer
          />
         
        </div>
      </div>
      :   

      <Lightbox
      closeOnClickOutside={true}
      closeOnBackdropClick={true}
      mainSrc={`${REACT_APP_API_MEDIA}${projects_arr[lightboxProjectIndex].images[lightboxIndex].image}`}
      onCloseRequest={()=>closeLightbox()}
      imagePadding={100}
      />  
      
    )     
}       

export default Portfolio