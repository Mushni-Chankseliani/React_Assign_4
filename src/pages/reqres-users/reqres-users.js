import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReqresUsersActionAsync } from '../../redux/actions/reqres-actions';
import { reqresUsersSelector } from '../../redux/selectors';
import { TEST_IDS } from '../../utils/testids';

function ReqresUsers({ title = 'Reqres Users' }) {
  const dispatch = useDispatch();
  const { data: reqresUsersList = [] } = useSelector(reqresUsersSelector);

  useEffect(() => {
    dispatch(getReqresUsersActionAsync());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-3" data-testid={TEST_IDS.reqres.title}>
        {title}
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reqresUsersList.map((item, index) => {
          return (
            <div className="card m-3 bg-info" style={{ width: '18rem' }} key={index}>
              <img
                src={item.avatar}
                className="card-img-top"
                alt={item.first_name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.first_name} {item.last_name}
                </h5>
                <p className="card-text">{item.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReqresUsers;
