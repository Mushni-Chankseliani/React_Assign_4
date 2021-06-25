import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from '../../redux/store';
import { TEST_IDS } from '../../utils/testids';
import ReqresUsers from './reqres-users';

describe('reqres users component test', () => {
  it('should render reqres users with default message', () => {
    const testMsg = 'test message';
    render(
      <Provider store={rootStore}>
        <ReqresUsers title={testMsg} />
      </Provider>
    );

    const title = screen.getByTestId(TEST_IDS.reqres.title);
    expect(title).toHaveTextContent(testMsg);
  });
});
