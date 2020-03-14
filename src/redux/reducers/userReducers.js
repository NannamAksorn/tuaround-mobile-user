import { SET_FORM_USERNAME, SET_FORM_PASSWORD } from '../actions/userAction';

const initialState = {
  formUsername: 'Jane',
  formPassword: 'Doe'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_USERNAME:
      return { ...state, formUsername: action.payload };
    case SET_FORM_PASSWORD:
      return { ...state, formPassword: action.payload };
    default:
      return state;
  }
};
