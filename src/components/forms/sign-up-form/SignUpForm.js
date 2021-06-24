import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { setAuthUserAction } from '../../../redux/actions';
import { AUTH_TOKEN } from '../../../utils/constants';
import { PROFILE_PATH } from '../../../utils/routePaths';
import { register as regist } from '../../../services';

function SignUpForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [storage, setStorage] = useLocalStorage(AUTH_TOKEN);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = async (formData) => {
    setErrorMsg('');
    const loggedIn = await regist(formData);
    if (!loggedIn.error) {
      console.log(storage);
      setStorage(() => JSON.stringify(loggedIn.token));
      dispatch(setAuthUserAction(loggedIn.token));
      history.replace(PROFILE_PATH);
    } else {
      setErrorMsg(loggedIn.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          defaultValue="eve.holt@reqres.in"
          id="email"
          {...register('email', {
            required: true,
          })}
        />
        {(touchedFields.email || errors.email) && (
          <span className="text-danger form-text">
            {!errors.email ??
              (errors.email.type === 'required' && 'Email is required')}
            {touchedFields.email &&
              Boolean(getValues('email')).length &&
              'Email is required'}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          defaultValue="cityslicka"
          {...register('password', {
            required: true,
          })}
        />
        {(touchedFields.password || errors.password) && (
          <span className="text-danger form-text">
            {!errors.password ??
              (errors.password.type === 'required' && 'Password is required')}
            {touchedFields.password &&
              Boolean(getValues('password')) &&
              'Password is required'}
          </span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Sign Up
      </button>
      {Boolean(errorMsg) && <p className="mt-3 text-danger">{errorMsg}</p>}
    </form>
  );
}

export default SignUpForm;
