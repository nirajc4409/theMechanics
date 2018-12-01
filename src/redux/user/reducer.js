import {SET_USER} from './action';

const INITIAL_STATE = {
  niraj:{Name:"niraj"}
};

const userProfile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
    return Object.assign({}, state, {
          ...state.setUser,
          text: action.text,
          completed: false
        
      })
    default:
      return state
  }
};

export default userProfile;
