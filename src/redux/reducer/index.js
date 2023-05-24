import {GET_EDUCATION,GET_JOBS,GET_PROJECTS,GET_SKILLS,GET_SOFT_SKILLS} from '../actions/Types'

const initialState = {
    skills:[],
    soft_skills:[],
    jobs:[],
    education:[],
    projects:[]
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SKILLS:
            return {
                ...state,
                    skills:action.payload
            }
        case GET_SOFT_SKILLS:
            return{
                ...state,
                    soft_skills:action.payload
            }
        case GET_JOBS:
            return {
                ...state,
                    jobs:action.payload
                }
        case GET_EDUCATION:
            return {
                ...state,
                    education:action.payload
                    }
        case GET_PROJECTS:
            return {
                ...state,
                     projects:action.payload
            }
      default:
        return state;
    }
  }