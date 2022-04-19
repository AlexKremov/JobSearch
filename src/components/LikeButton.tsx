import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import styled from 'styled-components';
import * as React from 'react';

const Body = styled.div`
    display: flex;
`;

type Props = {
  handleLike: () => void
  handleDislike: () => void
};

export default function LikeButton(props: Props) {
  const [disabled, setDisabled] = React.useState(false);

  const onLike = () => {
    setDisabled(true);
    props.handleLike();
  };

  const onDislike = () => {
    setDisabled(true);
    props.handleDislike();
  };
  return (
    <Body>
      <IconButton
        disabled={disabled}
        onClick={onLike}
        disableFocusRipple
      >
        <ThumbUpIcon />
      </IconButton>
      <IconButton
        disabled={disabled}
        onClick={onDislike}
        disableFocusRipple
      >
        <ThumbDownIcon />
      </IconButton>
    </Body>
  );
}
