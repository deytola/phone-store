import Action_Types from "./gadgetActionTypes";
import axios from "axios";


export const fetchGadgetsRequest =  () => {
    return {
        type: Action_Types.FETCH_GADGETS_REQUEST,
    }
}
export const fetchGadgetsSuccess =  (gadgets) => {
    return {
        type: Action_Types.FETCH_GADGETS_SUCCESS,
        payload: gadgets,
    }
}
export const fetchGadgetsFailure =  (error) => {
    return {
        type: Action_Types.FETCH_GADGETS_FAILURE,
        payload: error
    }
}

export const searchGadgetsRequest =  () => {
    return {
        type: Action_Types.SEARCH_GADGETS_REQUEST,
    }
}
export const searchGadgetsSuccess =  (gadgets) => {
    return {
        type: Action_Types.SEARCH_GADGETS_SUCCESS,
        payload: gadgets,
    }
}
export const searchGadgetsFailure =  (error) => {
    return {
        type: Action_Types.SEARCH_GADGETS_FAILURE,
        payload: error
    }
}

export const fetchGadgets = () => {
    return (dispatch) => {
        dispatch(fetchGadgetsRequest());
        axios.get(process.env.REACT_APP_GADGETS_ENDPOINT).then((response) => {
            const gadgets  = response.data?.data?.data;
            dispatch(fetchGadgetsSuccess(gadgets));
        }).catch((error)=> {
            const errorMessage = error.message;
            dispatch(fetchGadgetsFailure(errorMessage));
        })
    }
}

export const filterGadgets = ({category= "Smartphones", minPrice= 0, maxPrice= 2500, storageSizeString="", brand = "Apple"}) => {
    return (dispatch) => {
        dispatch(fetchGadgetsRequest());
        console.log("Max Price is:", maxPrice);
        axios.get(`${process.env.REACT_APP_FILTER_GADGETS_ENDPOINT}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&storageSizeString=${storageSizeString}&brand=${brand}`).then((response) => {
            const gadgets  = response.data?.data?.data;
            dispatch(fetchGadgetsSuccess(gadgets));
        }).catch((error)=> {
            const errorMessage = error.message;
            dispatch(fetchGadgetsFailure(errorMessage));
        })
    }
}




