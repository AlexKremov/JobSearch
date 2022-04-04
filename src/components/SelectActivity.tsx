import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

// const names = ["Frontend", "Backend", "Applications", "Software", "Testing", "Administration"];
const names = {
  frontend: "Frontend",
  backend: "Backend",
  applications: "Applications",
  software: "Software",
  twsting: "Testing",
  administration: "Administration",
};
type Props = {
  handleSelectActivity(value: string[]): void;
};

export default function SelectActivity({ handleSelectActivity }: Props) {
  const [listGroup, setListGroup] = React.useState({
    frontend: false,
    backend: false,
    applications: false,
    software: false,
    twsting: false,
    administration: false,
  });

  return (
    <FormGroup sx={{ m: 1 }}>
      {Object.keys(names).map((name) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const data = {
                  ...listGroup,
                  [name]: event.target.checked,
                };
                setListGroup(data);
                let selectedActivity = Object.keys(data).filter((key) => {
                  return data[key] == true;
                });
                handleSelectActivity(selectedActivity);
              }}
              checked={listGroup[name]}
            />
          }
          label={names[name]}
        />
      ))}
    </FormGroup>
  );
}
