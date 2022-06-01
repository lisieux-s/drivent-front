import { useState } from 'react';

import Button from '../../../components/Form/Button';
import Option from '../../../components/Dashboard/Payment/Option';

import useToken from '../../../hooks/useToken';
import * as paymentApi from '../../../services/paymentApi';

export default function Payment() {
  const { token } = useToken();

  const [selection, setSelection] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await paymentApi.confirm(token, selection);
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '44px' }}>
        <Option
          selected={selection === 'online'}
          onClick={() => {
            console.log('selection');
            setSelection('online');
          }}
        >
          <p>{'type'}</p>
          <p>R$ {'price'}</p>
        </Option>
        <Option selected={selection === 'presential'} onClick={() => setSelection('presential')}>
          <p>{'type'}</p>
          <p>R$ {'price'}</p>
        </Option>
      </div>
      <p>Fechado! O total ficou em xxx. Agora é só confirmar:</p>
      <Button onClick={() => handleSubmit()}>Reservar ingresso</Button>
    </>
  );
}
