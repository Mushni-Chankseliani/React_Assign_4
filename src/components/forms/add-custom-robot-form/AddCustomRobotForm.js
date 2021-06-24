import { useContext, useState } from 'react';
import { CustomRobotsContext } from '../../../contexts/CustomRobotsProvider';

function AddCustomRobotForm() {
  const [title, setTitle] = useState('');

  const { addNewCustomRobot } = useContext(CustomRobotsContext);
  const onSubmit = (event) => {
    event.preventDefault();
    const newRobot = {
      title,
      id: Math.random().toString(),
    };
    addNewCustomRobot(newRobot);
    setTitle('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Robo Title Will Be - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="User name"
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-md">
        Add New Robot
      </button>
    </form>
  );
}

export default AddCustomRobotForm;
