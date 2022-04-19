import styled from 'styled-components';
import MainLayout from '../layouts/mainlayout';
import AverageMonthlySalary from '../components/LineChart';
import ActivitySalaty from '../components/BarChart';
import CompaniesRaiting from '../components/PieChart';
import { useJobs } from '../init/useJobs';

const Pie = styled.div`
    display: flex;
`;

export default function Salaries() {
  const { list } = useJobs();
  return (
    <MainLayout>
      <main style={{ padding: '1rem 0' }}>
        <AverageMonthlySalary />
        <ActivitySalaty />
        <Pie>{list.length > 0 && <CompaniesRaiting list={list} />}</Pie>
      </main>
    </MainLayout>
  );
}
