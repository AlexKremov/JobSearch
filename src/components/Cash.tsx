import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 , m: 1}}>
      <FormControl size='small' fullWidth>
        <InputLabel id="demo-simple-select-label">{age}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'RUB'}>RUB</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
