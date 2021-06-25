export const getReqresUsers = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_AUTH_URL}/users?per_page=20`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
  return undefined;
};

export const getReqresResources = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_AUTH_URL}/resource?per_page=20`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
  return undefined;
};
