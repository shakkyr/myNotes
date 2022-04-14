import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signin = (formData, history) => async (dispatch) => {
    try {
        //!log in the user...

        history.push('/')

    } catch (error) {
        console.log('signin auth error: ', error);
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        //!sign upthe user...

        history.push('/')

    } catch (error) {
        console.log('signup auth error: ', error);
    }
}