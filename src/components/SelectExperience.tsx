import * as React from "react";
import styled from "styled-components";

const InpurSearch = styled.input`
  height: 40px;
  margin-left: 10px;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

export default function ExperienceSelect({
  experience,
  handleSelectExperience,
}) {
  const handleChange = (event) => {
    handleSelectExperience(event.target.value);
  };

  return (
    <InpurSearch
      placeholder="Expirience"
      value={experience}
      type="number"
      min={1}
      onChange={handleChange}
    />
  );
}
