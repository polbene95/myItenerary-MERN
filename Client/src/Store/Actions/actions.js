export const getCities = (cities) => {
    return {
        type: "GET_CITIES",
        cities
    }
}

export const dataIsLoading = (bool) => {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export const fetchCitiesData = () => {
    return (dispatch) => {
        fetch("/api/city", {
            method: "GET",
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(r => r.json())
        .then(json => {
            dispatch(getCities(json))
            dispatch(dataIsLoading(false));
        })
        .catch(e => console.log(e))
    }
}