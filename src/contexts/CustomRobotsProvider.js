import React, { useState, useEffect } from 'react';
import { API_SERVICE } from '../services/api';

export const CustomRobotsContext = React.createContext(null);

function CustomRobotsProviderComponent({ children }) {
  const [customRobotsList, setCustomRobotsList] = useState([]);
  const loadTodoListAsync = async () => {
    const list = await API_SERVICE.getTodoListAsync({ start: 60, limit: 20 });
    setCustomRobotsList(list);
  };

  const addNewCustomRobot = (newCustomRobot) => {
    const newList = [newCustomRobot, ...customRobotsList];
    setCustomRobotsList(newList);
  };

  const removeCustomRobot = (itemId) => {
    const newListState = customRobotsList.filter((n) => n.id !== itemId);
    setCustomRobotsList(newListState);
  };

  useEffect(() => {
    loadTodoListAsync();
  }, []);

  CustomRobotsContext.displayName = 'CustomRobotsContext';

  return (
    <CustomRobotsContext.Provider
      value={{
        addNewCustomRobot,
        removeCustomRobot,
        customRobotsList,
        setCustomRobotsList,
      }}>
      {children}
    </CustomRobotsContext.Provider>
  );
}

export default CustomRobotsProviderComponent;
