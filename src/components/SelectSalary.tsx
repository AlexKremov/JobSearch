import TextField from '@mui/material/TextField';

type Props = {
  salary: number
  handleSelectSalary(value: number): void
};

export default function SelectSalary({ salary, handleSelectSalary }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSelectSalary(Number(event.target.value));
  };

  return (
    <TextField
      size="small"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      sx={{ m: 1 }}
      type="number"
      onChange={handleChange}
      value={salary}
    />
  );
}
