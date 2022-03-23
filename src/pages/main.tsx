import styled from 'styled-components';
import MainLayout from '../layouts/mainlayout';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useJobs } from '../init/useJobs';
import JobItem from '../components/JobItem';
import TextField from '@mui/material/TextField';
import BasicSelect from '../components/Cash'
import LevelSelect from '../components/Level';

const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Filters = styled.div`
padding-left: 50%;
`
const SalaryField = styled.div`
display: flex;
`


function App() {
  const { list } = useJobs();

    return (
      <MainLayout>
        <Body>
          <div>
        {list.map((job) => (
          <JobItem
            key={job.id}
            title={job.title}
            salary={job.salary}
            company={job.company}
          />
        ))}
        </div>
        <Filters>
          <FormGroup sx={{  m: 1}}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Frontend"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Backend"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Applications"
            />
            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Software development"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Testing"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Administration"
            />
          </FormGroup>
          <LevelSelect />
          <SalaryField>
          <TextField size='small' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{  m: 1}} type='number' />
          <BasicSelect />
          </SalaryField>
          </Filters>
        </Body>
      </MainLayout>
    );
}

export default App;