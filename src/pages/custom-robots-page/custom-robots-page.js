import AddCustomRobotForm from '../../components/forms/add-custom-robot-form';
import CustomRobotsList from '../../components/list/custom-robots-list';
import CustomRobotsProviderComponent from '../../contexts';

function CustomRobots() {
  return (
    <CustomRobotsProviderComponent>
      <div className="row">
        <h2>Custom Robots page</h2>
        <div className="d-flex flex-column">
          <div className="mb-4">
            <AddCustomRobotForm />
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <CustomRobotsList />
          </div>
        </div>
      </div>
    </CustomRobotsProviderComponent>
  );
}

export default CustomRobots;
