import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const Filters = styled.div`
margin-left: 200%;
`

const names = ['react', 'php', 'typescript', 'redux', 'html', 'css'];

type Props = {
  selectedTags: string[],
  onUpdateTags(param: string[]): void
};

export default function MultipleSelectCheckmarks({selectedTags, onUpdateTags }: Props) {
  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;

    onUpdateTags(typeof value === 'string' ? value.split(',') : value);
  };

  return (


      <div>
      <Filters>
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tags</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTags}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedTags.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </Filters>
      </div>

  );
}
