const initState = {
    authError: null
}

const authReducer = (state = initState, actions) => { //state i actions //3
    switch(actions.type) {
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: 'Nieprawidłowy login'
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: null,
            }
        case "SIGNOUT_SUCCESS": 
            return state;
        case "SIGNOUT_ERROR":
            return state;
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                authError: null,
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                authError: actions.err.message,
            }
            default:
                return state;
    }
}

export default authReducer;