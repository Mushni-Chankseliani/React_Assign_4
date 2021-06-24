import axios from 'axios';

const fakerUrl = process.env.REACT_APP_FAKER_API;

export const getFakerRobots = async (quantity = 10) => {
  try {
    // getting texts, becaus other servers were down :/
    const response = await axios.get(
      `${fakerUrl}/texts?_quantity=${quantity}&_characters=500`
    );
    return response.data.data;
  } catch (error) {
    console.group('[getFakerRobots]@catch');
    console.trace(error);
    console.groupEnd();
  }
  return undefined;
};
