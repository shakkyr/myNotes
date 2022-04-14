import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = {authDate : null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data};
    
        default:
            return state;
    }
}

export default authReducer;