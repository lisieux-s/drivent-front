import styled from 'styled-components';

export default function Option({ children, selected }) {
  return (
    <StyledDiv selected={selected}>
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => props.selected? 'none' : '1px solid #cecece'};
  border-radius: 20px;

  background: ${(props) => (props.selected ? '#FFEED2' : '')};

  width: 145px;
  height: 145px;
`;
