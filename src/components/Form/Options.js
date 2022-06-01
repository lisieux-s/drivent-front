import { Box } from '@material-ui/core';

import styled from 'styled-components';

export default function Options({ children, selected }) {
  return (
    <Box>
      <Option>
        <p>Box</p>
      </Option>
      <Option>ee</Option>
    </Box>
  );
}

const StyledDiv = styled.div`
  display: flex;
  gap: 24px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #cecece;
  border-radius: 20px;

  background: ${(props) => (props.selected ? '#FFEED2' : '')};

  width: 145px;
  height: 145px;
`;
