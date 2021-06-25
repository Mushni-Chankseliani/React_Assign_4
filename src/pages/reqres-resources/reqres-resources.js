import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReqresResourceActionAsync } from '../../redux/actions/reqres-actions';
import { reqresResourcesSelector } from '../../redux/selectors';
import { ROBO_URL } from '../../utils/constants';
import { TEST_IDS } from '../../utils/testids';

function ReqresResources({ title = 'Reqres Resources' }) {
  const dispatch = useDispatch();
  const { data: reqresResourcesList = [] } = useSelector(reqresResourcesSelector);

  useEffect(() => {
    dispatch(getReqresResourceActionAsync());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3" data-testid={TEST_IDS.reqres.title}>
        {title}
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reqresResourcesList.map((item, index) => {
          return (
            <div
              className="card m-3"
              style={{ width: '18rem', backgroundColor: item.color || 'aquamarine' }}
              key={index}>
              <img
                src={ROBO_URL + item.name}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.pantone_value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReqresResources;
