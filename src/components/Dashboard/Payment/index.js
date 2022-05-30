import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import OptionButton from './Option';

export default function PaymentPage() {
  return (
    <>
      <Box>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <StyledTypography variant="h6" color="textSecondary">
          Primeiro, escolha sua modalidade de ingresso
        </StyledTypography>
        <ButtonContainer>
          <OptionButton title={'Presencial'} body={'R$ 250,00'} isSelected={true} />
          <OptionButton title={'Online'} body={'R$ 100,00'} isSelected={false} />
        </ButtonContainer>
      </Box>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 24px;
`;
