import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';

type SkillsNames = {
  [key: string]: string
};

type SkillsType = {
  [key: string]: boolean
};

const names: SkillsNames = {
  ruby: 'Ruby',
  mysql: 'Mysql',
  rubyOnRails: 'Ruby on Rails',
  html: 'Html',
  react: 'React',
  css: 'Css',
  redux: 'Redux',
};
type Props = {
  handleSelectSkills(value: string[]): void
};

export default function SelectSkills({ handleSelectSkills }: Props) {
  const [listGroup, setListGroup] = React.useState<SkillsType>({
    ruby: false,
    mysql: false,
    rubyOnRails: false,
    html: false,
    react: false,
    css: false,
    redux: false,
  });

  return (
    <FormGroup sx={{ m: 1 }}>
      {Object.keys(names).map((name) => (
        <FormControlLabel
          key={name}
          control={(
            <Checkbox
              size="small"
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                const data = {
                  ...listGroup,
                  [name]: event.target.checked,
                };
                setListGroup(data);
                const selectedSkills = Object.keys(data).filter(
                  (key) => data[key] === true
                );
                handleSelectSkills(selectedSkills);
              }}
              checked={listGroup[name]}
            />
                      )}
          label={names[name]}
        />
      ))}
    </FormGroup>
  );
}
