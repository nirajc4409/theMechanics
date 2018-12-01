import {SET_USER} from './action';

const INITIAL_STATE = {
};

const userProfile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
    return Object.assign({}, state, {
          ...state.setUser,
          ...action.text,
          completed: false
        
      })
    default:
      return state
  }
};

export default userProfile;
