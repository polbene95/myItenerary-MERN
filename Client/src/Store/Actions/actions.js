export const getCities = (cities) => {
    return {
        type: "GET_CITIES",
        cities
    }
}

export const getSelectedCity = (selectedCity) => {
    return {
        type: "GET_CITY",
        selectedCity
    }
}

export const getItinerary = (itinerary) => {
    return {
        type: "GET_ITINERARY",
        itinerary
    }
}

export const getPosts = (posts) => {
    return {
        type: "GET_POSTS",
        posts
    }
}

export const dataIsLoading = (bool, data) => {
    return {
        type: data,
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
            dispatch(dataIsLoading(false,"CITIES_IS_LOADING"));
        })
        .catch(e => console.log(e))
    }
}

export const fetchSelectedCityData = (city) => {
    return (dispatch) => {
        fetch("/api/city/" + city, {
            method: "GET",
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(r => r.json())
        .then(json => {
            dispatch(getSelectedCity(json))
            dispatch(dataIsLoading(false, "CITY_IS_LOADING"));
        })
        .catch(e => console.log(e))
    }
}

export const fetchItineraryData = (city) => {
    return(dispatch) => {
        fetch("/api/itinerary/"+city, {
            method: "GET",
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(r => r.json())
        .then(json => { 
            dispatch(getItinerary(json))
            dispatch(dataIsLoading(false,"ITINERARY_IS_LOADING"));
        })
        .catch(e => console.log(e))
    }
}

export const fetchPostsData = (postId) => {
    return(dispatch) => {
        fetch("/api/posts/"+postId, {
            method: "GET",
            mode: "no-cors",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(r => r.json())
        .then(json => {
            dispatch(getPosts(json))
            dispatch(dataIsLoading(false,"POSTS_IS_LOADING"));
        })
    }
}

export const postPostData = (postId, body) => {
    return () => {

        var data = "post="+body;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
        });

        xhr.open("POST", "/api/posts/"+postId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    }
}