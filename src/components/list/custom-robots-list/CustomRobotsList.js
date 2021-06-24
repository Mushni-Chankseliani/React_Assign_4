import { useContext } from 'react';
import { CustomRobotsContext } from '../../../contexts/CustomRobotsProvider';
import CustomRobotsListItem from './CustomRobotsListItem';

import './custom-robots-list.css';

function CustomRobotsList() {
  const { customRobotsList } = useContext(CustomRobotsContext);

  return (
    <>
      {customRobotsList.map((item) => (
        <CustomRobotsListItem item={item} key={item.id} />
      ))}
    </>
  );
}

export default CustomRobotsList;
