import {
  SET_FORM_USERNAME,
  SET_FORM_PASSWORD,
  SET_USERNAME,
  SET_USER,
} from '../actions/userAction';

const initialState = {
  formUsername: '',
  formPassword: '',
  user: {
    username: 'Guest',
    email: 'guest@mail.com'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_USERNAME:
      return { ...state, formUsername: action.payload };
    case SET_FORM_PASSWORD:
      return { ...state, formPassword: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
