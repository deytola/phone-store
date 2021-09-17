import ACTION_TYPES from "../../actions/user/userActionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",

    login_loading: false,
    user: {},
    login_error: "",

    loading_current_user: false,
    current_user: {},
    loading_current_user_error: ""

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        case ACTION_TYPES.LOGIN_REQUEST:
            return {
                ...state,
                login_loading: true
            }
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                login_loading: false,
                user: action.payload,
                login_error: ""
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                login_loading: false,
                user: {},
                login_error: action.payload
            }
        case ACTION_TYPES.FETCH_CURRENT_USER_REQUEST:
            return {
                ...state,
                loading_current_user: true
            }
        case ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading_current_user: false,
                current_user: action.payload
            }
        case ACTION_TYPES.FETCH_CURRENT_USER_FAILURE:
            return {
                ...state,
                loading_current_user: false,
                current_user: {},
                loading_current_user_error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
