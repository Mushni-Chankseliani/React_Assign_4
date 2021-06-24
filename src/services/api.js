import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
export class API_SERVICE {
  static getTodoList({ callback, start = 30, limit = 10 }) {
    const url = `${apiUrl}/todos?_start=${start}&_limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        callback(
          result.map((item) => {
            const d = {
              ...item,
              done: item.completed,
            };
            return d;
          })
        );
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  static async getTodoListAsync({ start = 30, limit = 10 }) {
    const url = `${apiUrl}/todos?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      const modified = result.map((item) => {
        const d = {
          ...item,
          done: item.completed,
        };
        return d;
      });
      return modified;
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }

  static async getRoboUsersAsync() {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (error) {
      console.group('[getFakerRobots]@catch');
      console.trace(error);
      console.groupEnd();
    }
    return undefined;
  }
}

export default API_SERVICE;
