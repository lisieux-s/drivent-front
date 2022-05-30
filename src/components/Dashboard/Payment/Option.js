import { Box, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function OptionButton({ title, body, isSelected }) {
  return (
    <StyledButton variant="outlined" sx={{ borderRadius: 20 }}>
      <StyledBox isSelected={isSelected}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {body}
        </Typography>
      </StyledBox>
    </StyledButton>
  );
}

const StyledBox = styled(Box)`
  padding: 0;
  height: 145px;
  width: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#fff')};
`;

const StyledButton = styled(Button)`
  padding: 0;
`;
