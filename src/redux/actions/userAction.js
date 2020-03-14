import { linkTo } from '../../Utils/index';

export const SET_FORM_USERNAME = 'SET_FORM_USERNAME';
export const SET_FORM_PASSWORD = 'SET_FORM_PASSWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USER = 'SET_USER';


export const setFormUsernameAction = (payload) => ({
  type: SET_FORM_USERNAME,
  payload
});

export const setFormPasswordAction = (payload) => ({
  type: SET_FORM_PASSWORD,
  payload
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
});


const mockLogin = (username, password) => {
  const user = { username: 'admin', email: 'admin@mail.com' };
  if (username === 'admin' && password === '1234') {
    return user;
  }
  return null;
};

export const loginAction = (componentId) => async (_, getState) => {
  const { formUsername, formPassword } = getState().user;
  const user = await mockLogin(formUsername, formPassword);

  if (user) {
    linkTo(componentId, 'HomeScreen');
    return {
      type: SET_USER,
      payload: user
    };
  }
  return null;
};
