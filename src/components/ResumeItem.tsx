import React, { FC } from 'react';
import Resume from '../types/Resume';
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';

  const Body = styled.div`
  width: 400%
  `

  const ResumeItem: FC<Resume> = ({ name, level,tags, experience, avatar }) => {
    return (
      <Body>
        <Avatar alt="Remy Sharp" src={avatar} />
        <h2>{name}</h2>

        <h3>{level}</h3>

        <h3>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>,{" "}
            </React.Fragment>
          ))}
        </h3>

        <h4>Experience: {experience}</h4>
        <hr />
      </Body>
    );
  };
  
  export default ResumeItem;
  