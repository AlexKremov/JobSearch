import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import Job from '../types/Job';

const Body = styled.div`
    margin-bottom: 20px;
    margin-top: 30px;
`;

const JobItem: FC<Job> = ({
  title,
  company,
  salary,
  avatar,
  currency,
  rating,
  activity,
  skills,
  created_at,
}: Job) => (
  <div>
    <Body>
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{ width: 88, height: 88 }}
      />
      <h1>{title}</h1>
      <h3>{company}</h3>
      <h4>
        {activity.map((res) => (
          <React.Fragment key={res}>
            <span>{res}</span>
            ,
            {' '}
          </React.Fragment>
        ))}
      </h4>
      <h3>
        {skills.map((res) => (
          <React.Fragment key={res}>
            <span>{res}</span>
            ,
            {' '}
          </React.Fragment>
        ))}
      </h3>
      <span>
        Salary from:
        {' '}
        {salary}
        {' '}
        {currency}
      </span>
      <h5>
        rating:
        {rating}
      </h5>
      <p>{created_at}</p>
      <hr />
    </Body>
  </div>
);

export default JobItem;
