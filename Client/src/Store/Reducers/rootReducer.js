const initState = {
    cities: [],
    selectedCity: {},
    cityIsLoading: true,
    citiesIsLoading: true,
    itineraryIsLoading: true,
    itinerary: [],
    posts: []
}

export const rootReducer = (state = initState, action) => {
    if (action.type === "GET_CITIES") {
       state = {
           ...state, 
            cities: action.cities
        }
    }
    if (action.type === "GET_CITY") {
        state = {
            ...state,
            selectedCity: action.selectedCity
        }

    }
    if (action.type === "GET_ITINERARY") {
        state = {
            ...state, 
             itinerary: action.itinerary
         }
     }
    if (action.type === "CITIES_IS_LOADING") {
        state = {
            ...state,
            citiesIsLoading: action.isLoading
        }
    }
    if (action.type === "CITY_IS_LOADING") {
        state = {
            ...state,
            cityIsLoading: action.isLoading
        }
    }
    if (action.type === "ITINERARY_IS_LOADING") {
        state = {
            ...state,
            itineraryIsLoading: action.isLoading
        }
    }
    if (action.type === "GET_POSTS") {
        state = {
            ...state,
            posts: action.posts
        }
    }
    if (action.type === "POSTS_IS_LOADING") {
        state = {
            ...state,
            postsIsLoading: action.isLoading
        }
    }

    return state;
}
