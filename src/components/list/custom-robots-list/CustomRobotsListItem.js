import { useContext } from 'react';
import { CustomRobotsContext } from '../../../contexts/CustomRobotsProvider';
import { ROBO_URL } from '../../../utils/constants';

function CustomRobotsListItem({ item }) {
  const { removeCustomRobot } = useContext(CustomRobotsContext);

  const onClick = () => {
    removeCustomRobot(item.id);
  };

  return (
    <div
      className={`card m-3 bg-info ${item.done ? 'bg-danger' : 'bg-primary'}`}
      style={{ width: '18rem' }}>
      <img src={ROBO_URL + item.title} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <button className="btn btn-primary" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CustomRobotsListItem;
