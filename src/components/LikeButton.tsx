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
  handleSuperLike: () => void;
  handleSuperDislike: () => void;
};

export default function LikeButton(props: Props) {
  const [on, setOn] = React.useState(false);
  const [off, setOff] = React.useState(false);

  const handleChange1 = (event: React.MouseEvent<HTMLElement>) => {
    if (on === false) {
      setOn(true);
      setOff(false);
      props.handleLike();
    }
    if (on === true && off === false) {
      setOn(false);
      props.handleDislike();
    }
    if (off === true && on === false) {
      setOn(true);
      setOff(false);
      props.handleSuperLike();
    }
  };
  const handleChange2 = (event: React.MouseEvent<HTMLElement>) => {
    if (off === false && on === false) {
      setOff(true);
      setOn(false);
      props.handleDislike();
    }
    if (off === true && on === false) {
      setOff(false);

      props.handleLike();
    }
    if (on === true && off === false) {
      setOn(false);
      setOff(true);
      props.handleSuperDislike();
    }
  };
  return (
    <Body>
      <IconButton
        disabled={on}
        onClick={handleChange1}
        disableFocusRipple={true}
      >
        <ThumbUpIcon />
      </IconButton>
      <IconButton
        disabled={off}
        onClick={handleChange2}
        disableFocusRipple={true}
      >
        <ThumbDownIcon />
      </IconButton>
    </Body>
  );
}
