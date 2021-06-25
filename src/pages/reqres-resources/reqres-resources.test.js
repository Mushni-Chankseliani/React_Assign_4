import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from '../../redux/store';
import { TEST_IDS } from '../../utils/testids';
import ReqresResources from './reqres-resources';

describe('reqres resources test', () => {
  it('should render default title', () => {
    const testMsg = 'test message';
    render(
      <Provider store={rootStore}>
        <ReqresResources title={testMsg} />
      </Provider>
    );

    const title = screen.getByTestId(TEST_IDS.reqres.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(testMsg);
  });
});
