// export enum Activity {
//   Backend = 'Backend',
//   Design = 'Design',
//   Frontend ='Frontend',
//   Testing = 'Testing',
//   Administration = 'Administration'
// }

export default interface Job {
  id: number;
  title: string;
  level: string;
  salary: number;
  company: string;
  avatar: string;
  rating: string;
  activity: string[];
  created_at: string;
  is_salary: boolean;
  skills: string[];
  currency: string;
}
