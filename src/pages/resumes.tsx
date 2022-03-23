import MainLayout from '../layouts/mainlayout';
import styled from 'styled-components';

import ResumeItem from '../components/ResumeItem';
import { useResumes } from '../init/useResumes';
import SelectTags from '../components/SelectTags';




const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default function Resumes() {
  const { list, search, onUpdateTags } = useResumes();
    return (
      <MainLayout>
        <Body>
          <div>
          {list.map((resume) => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
          </div>
          <SelectTags
        selectedTags={search.tags}
        onUpdateTags={onUpdateTags}
      />
        </Body>
      </MainLayout>
    );
  }
  