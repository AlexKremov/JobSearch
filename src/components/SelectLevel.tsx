import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Level } from "../types/Resume";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// type Props = {
//   level: keyof typeof Level | '',
//   setLevel(param: string): void,
//   tags: string[] | ''
// };

export default function BasicSelect({ level, handleSelectlevel }) {
  const handleChange = (event: SelectChangeEvent) => {
    handleSelectlevel(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          label="Select level"
          onChange={handleChange}
        >
          <MenuItem value={Level.Junior}>{Level.Junior}</MenuItem>
          <MenuItem value={Level.Middle}>{Level.Middle}</MenuItem>
          <MenuItem value={Level.Senior}>{Level.Senior}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
