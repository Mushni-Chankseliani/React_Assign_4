import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SignInForm from './SignInForm';
import rootStore from '../../../redux/store';
import { TEST_IDS } from '../../../utils/testids';

describe('Sign in form test', () => {
  it('should render email with specific text ', () => {
    render(
      <Provider store={rootStore}>
        <SignInForm />
      </Provider>
    );
    const email = screen.getByTestId(TEST_IDS.credentials.email);
    const password = screen.getByTestId(TEST_IDS.credentials.password);
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent('Email address'); // non local declaration would be better
    expect(password).toBeInTheDocument();
  });
});
