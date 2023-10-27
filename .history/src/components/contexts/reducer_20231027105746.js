import { legacy_createStore as createStore } from "redux";

export const fetchUser = () => {
    const userInfo = localStorage.signedInUser != null ? localStorage.signedInUser : localStorage.clear();
    return userInfo;
}

const userInfo = fetchUser();

const initialState = {
    signedInUser: userInfo,
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                signedInUser: action.userToken
            }
        case 'LOGOUT':
            return {
                    ...state,
                    signedInUser: null
            }
        default:
            return state;
    }
}


export default createStore(reducer)