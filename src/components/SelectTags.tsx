
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import { getResumes } from '../api/queries';
import { useDispatch, useSelector } from 'react-redux';
import { setResumes } from '../init/resumes';

const names = ['react', 'php', 'typescript', 'redux', 'html', 'css'];

export default function MultipleSelectCheckmarks({tags, setTags, level, experience}) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const selectedTags = typeof value === 'string' ? value.split(',') : value
    setTags(
      selectedTags
    );
    getResumes({ level, tags: selectedTags, experience} )
      .then(
        res => {
          dispatch(setResumes(res.data))
        }
      )
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tags.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}