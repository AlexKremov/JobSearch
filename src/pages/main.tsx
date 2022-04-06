import styled from "styled-components";
import MainLayout from "../layouts/mainlayout";
import { useJobs } from "../init/useJobs";
import JobItem from "../components/JobItem";
import SelectSalary from "../components/SelectSalary";
import SelectCurrency from "../components/SelectCurrency";
import SelectLevel from "../components/SelectLevel";
import SelectActivity from "../components/SelectActivity";
import SelectSkills from "../components/SelectSkills";
import Pagination from "@mui/material/Pagination";

const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Filters = styled.div`
  padding-left: 300px;
`;
const SalaryField = styled.div`
  display: flex;
`;

function App() {
  const {
    list,
    search,
    handleSelectlevel,
    handleSelectCurrency,
    handleSelectSalary,
    handleSelectActivity,
    handleSelectSkills,
    handleChangePage,
    total,
  } = useJobs();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handleChangePage(value);
  };

  return (
    <MainLayout>
      <Body>
        <div>
          <Pagination count={Math.ceil(total / 25)} onChange={handleChange} />
          {list.map((job) => (
            <JobItem key={job.id} {...job} />
          ))}
        </div>
        <Filters>
          <SelectActivity handleSelectActivity={handleSelectActivity} />
          <SelectLevel
            level={search.level}
            handleSelectlevel={handleSelectlevel}
          />
          <SalaryField>
            <SelectSalary
              salary={search.salary}
              handleSelectSalary={handleSelectSalary}
            />
            <SelectCurrency
              currency={search.currency}
              handleSelectCurrency={handleSelectCurrency}
            />
          </SalaryField>
          <SelectSkills handleSelectSkills={handleSelectSkills} />
        </Filters>
      </Body>
    </MainLayout>
  );
}

export default App;
