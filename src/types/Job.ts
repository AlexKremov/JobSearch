export default interface Job {
  id: number;
  title: string;
  level: string;
  salary: number;
  company: string;
  avatar: string;
  rating: number;
  activity: string[];
  created_at: string;
  is_salary: boolean;
  skills: string[];
  currency: string;
}
