import api from './api';

export async function confirm(token, type) {
  const response = await api.post(
    '/reservation/confirm',
    { type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
//
