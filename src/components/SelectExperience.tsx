import * as React from 'react';
import styled from 'styled-components';
import { getResumes } from '../api/queries';
import { useDispatch, useSelector } from 'react-redux';
import { setResumes } from '../init/resumes';


const InpurSearch = styled.input`
  height: 40px;
  margin-left: 10px;
`

export default function ExperienceSelect({experience, setExperience, level, tags}) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.target.value)
    setExperience(event.target.value);
    getResumes({ level, tags, experience: event.target.value })
      .then(
        res => {
          dispatch(setResumes(res.data))
        }
      )
  }




  return <InpurSearch placeholder="Expirience" value={experience} type="number" onChange={handleChange} />;
}

