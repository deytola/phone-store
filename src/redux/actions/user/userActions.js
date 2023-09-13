import Action_Types from "./userActionTypes";
import axios from "axios";


export const fetchUsersRequest =  () => {
    return {
        type: Action_Types.FETCH_USERS_REQUEST,
    }
}
export const fetchUsersSuccess =  (users) => {
    return {
        type: Action_Types.FETCH_USERS_SUCCESS,
        payload: users,
    }
}
export const fetchUsersFailure =  (error) => {
    return {
        type: Action_Types.FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchCurrentUserRequest =  () => {
    return {
        type: Action_Types.FETCH_CURRENT_USER_REQUEST,
    }
}
export const fetchCurrentUserSuccess =  (user) => {
    return {
        type: Action_Types.FETCH_CURRENT_USER_SUCCESS,
        payload: user,
    }
}
export const fetchCurrentUserFailure =  (error) => {
    return {
        type: Action_Types.FETCH_CURRENT_USER_FAILURE,
        payload: error
    }
}

export const loginRequest =  () => {
    return {
        type: Action_Types.LOGIN_REQUEST,
    }
}
export const loginSuccess =  (user) => {
    return {
        type: Action_Types.LOGIN_SUCCESS,
        payload: user,
    }
}
export const loginFailure =  (error) => {
    return {
        type: Action_Types.LOGIN_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    const {REACT_APP_USERS_ENDPOINT} = process.env;
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get(REACT_APP_USERS_ENDPOINT).then((response) => {
            const users  = response.data;
            dispatch(fetchUsersSuccess(users));
        }).catch((error)=> {
            const errorMessage = error.message;
            dispatch(fetchUsersFailure(errorMessage));
        })
    }
}

export const login = ({email, password}) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios.post(
            process.env.REACT_APP_AUTH_ENDPOINT,
            {
                email,
                password
            }).then((response) => {
            const user = response.data;
            dispatch(loginSuccess(user));
            window.location.replace("/app");
        }).catch((error)=> {
            console.log("User error", error);
            const errorMessage = error.message;
            dispatch(loginFailure(errorMessage));
        })
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        dispatch(fetchCurrentUserRequest());
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}/users/me`,
        })
            .then((res) => {
                const data = res.data;
                dispatch(fetchCurrentUserSuccess(data.user));
                return data.user;
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(fetchCurrentUserFailure(error.message));
            });
    };
};




