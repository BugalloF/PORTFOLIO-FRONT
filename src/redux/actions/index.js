//Actions/index.js

import axios from "axios";
import {GET_EDUCATION,GET_JOBS,GET_PROJECTS,GET_SKILLS} from "./Types"

const {REACT_APP_API_URL} = process.env
export function FetchEducation(language) {
  return async function (dispatch) {
    try {
      let getEducations = (await axios.get(`${REACT_APP_API_URL}/education/?lan=${language}`)).data;
      return dispatch({
        type: GET_EDUCATION,
        payload: getEducations,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function FetchJobs(language) {
  return async function (dispatch) {
    let getJobs = (await axios.get(`${REACT_APP_API_URL}/jobexperience/?lan=${language}`)).data;
    return dispatch({ type: GET_JOBS, payload: getJobs });
  };
}

export function FetchProjects(language) {
    return async function (dispatch) {
      let getProjects = (await axios.get(`${REACT_APP_API_URL}/project/?lan=${language}`)).data;
      return dispatch({ type: GET_PROJECTS, payload: getProjects });
    };
  }


export function FetchSkills(language) {
    return async function (dispatch) {
      let getSkills = (await axios.get(`${REACT_APP_API_URL}/skills/?lan=${language}`)).data;
      return dispatch({ type: GET_SKILLS, payload: getSkills });
    };
  }