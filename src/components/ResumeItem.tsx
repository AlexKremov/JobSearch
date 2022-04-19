import React, { FC } from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Resume from '../types/Resume';

const Body = styled.div`
    width: 300%;
`;

const ResumeItem: FC<Resume> = ({
  name, level, tags, experience, avatar
}) => (
  <Body>
    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 88, height: 88 }} />
    <h2>{name}</h2>

    <h3>{level}</h3>

    <h3>
      {tags.map((tag) => (
        <React.Fragment key={tag}>
          <span>{tag}</span>
          ,
          {' '}
        </React.Fragment>
      ))}
    </h3>

    <h4>
      Experience:
      {experience}
    </h4>
    <hr />
  </Body>
);

export default ResumeItem;
