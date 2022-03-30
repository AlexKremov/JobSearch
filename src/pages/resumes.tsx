import MainLayout from "../layouts/mainlayout";
import styled from "styled-components";
import SelectLevel from "../components/SelectLevel";
import ResumeItem from "../components/ResumeItem";
import { useResumes } from "../init/useResumes";
import SelectTags from "../components/SelectTags";
import SelectExperience from "../components/SelectExperience";
import { useState } from "react";

const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ResumeFilters = styled.div`
  padding-left: 50%;
  display: block;
`;

export default function Resumes() {
  const { list  } = useResumes();
  const [level, setLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <MainLayout>
      <Body>
        <div>
          {list.map((resume) => (
            <ResumeItem key={resume.id} {...resume} />
          ))}
        </div>
        <ResumeFilters>
          <SelectTags tags={tags} setTags={setTags} level={level} experience={experience} />
          <SelectLevel level={level} setLevel={setLevel} tags={tags} experience={experience} />
          <SelectExperience level={level} tags={tags} setExperience={setExperience} experience={experience} />
        </ResumeFilters>
      </Body>
    </MainLayout>
  );
}
