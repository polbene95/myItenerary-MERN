const initState = {
    cities: [],
    isLoading: true,
}

export const rootReducer = (state = initState, action) => {
    if (action.type === "GET_CITIES") {
       state = {
           ...state, 
            cities: action.cities
        }
    }
    if (action.type === "DATA_IS_LOADING") {
        state = {
            ...state,
            isLoading: action.isLoading
        }
    }
    return state;
}
