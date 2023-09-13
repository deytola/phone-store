import ACTION_TYPES from "../../actions/gadget/gadgetActionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",

}

const gadgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_GADGETS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_GADGETS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_GADGETS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default gadgetReducer;
