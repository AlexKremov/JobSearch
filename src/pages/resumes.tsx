import MainLayout from "../layouts/mainlayout";
import styled from "styled-components";
import SelectLevel from "../components/SelectLevel";
import ResumeItem from "../components/ResumeItem";
import { useResumes } from "../init/useResumes";
import SelectTags from "../components/SelectTags";
import SelectExperience from "../components/SelectExperience";

const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ResumeFilters = styled.div`
  padding-left: 45%;
  display: block;
`;

export default function Resumes() {
  const {
    list,
    search,
    handleSelectTags,
    handleSelectExperience,
    handleSelectlevel,
  } = useResumes();

  return (
    <MainLayout>
      <Body>
        <div>
          {list.map((resume) => (
            <ResumeItem key={resume.id} {...resume} />
          ))}
        </div>
        <ResumeFilters>
          <SelectTags tags={search.tags} handleSelectTags={handleSelectTags} />
          <SelectLevel
            level={search.level}
            handleSelectlevel={handleSelectlevel}
          />
          <SelectExperience
            experience={search.experience}
            handleSelectExperience={handleSelectExperience}
          />
        </ResumeFilters>
      </Body>
    </MainLayout>
  );
}
