import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import styled from "styled-components";
import * as React from "react";

const Body = styled.div`
  display: flex;
`;

type Props = {
  handleLike: () => void;
  handleDislike: () => void;
};

export default function LikeButton(props: Props) {
  const [disabled, setDisabled] = React.useState(false);

  const handleChange1 = (event: React.MouseEvent<HTMLElement>) => {
      setDisabled(true)
      props.handleLike();
    }
  
  const handleChange2 = (event: React.MouseEvent<HTMLElement>) => {
    setDisabled(true)
      props.handleDislike();
  };
  return (
    <Body>
      <IconButton
        disabled={disabled}
        onClick={handleChange1}
        disableFocusRipple={true}
      >
        <ThumbUpIcon />
      </IconButton>
      <IconButton
        disabled={disabled}
        onClick={handleChange2}
        disableFocusRipple={true}
      >
        <ThumbDownIcon />
      </IconButton>
    </Body>
  );
  }