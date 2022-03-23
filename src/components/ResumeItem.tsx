import React, { FC } from 'react';
import Resume, { Level } from '../types/Resume';
import styled from 'styled-components'

  const Body = styled.div`
  width: 400%
  `

  const ResumeItem: FC<Resume> = ({ name, level,tags, experience }) => {
    return (
      <Body>
        <h2>{name}</h2>

        <h3>{level}</h3>
  
        <h3>
          {tags.map(tag=><React.Fragment key={tag}><span>{tag}</span>, </React.Fragment>)}
        </h3>
  
        <h4>Experience: {experience}</h4>
        <hr /> 
      </Body>
    );
  };
  
  export default ResumeItem;
  