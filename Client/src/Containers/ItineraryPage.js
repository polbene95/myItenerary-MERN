import React from 'react';
import './ItineraryPage.css'
import { connect } from 'react-redux';
import * as  actionCreator  from '../Store/Actions/actions';
import Footer from '../Components/BackToHomeButtonDiv'

import ItineraryDropdown   from '../Components/ItineraryDropdown'

const urlCity = window.location.pathname.split("/")[3]

class ItineraryPage extends React.Component {
    render() {
        let toRender; 
        if(!this.props.cityIsLoading && !this.props.itineraryIsLoading) {
        toRender = (
            <div className="itinerary-page">
                <div className="header"style={{backgroundImage: 'url(' + this.props.selectedCity[0].src.landscape + ')'}}>
                    <p>{this.props.selectedCity[0].name}</p>
                </div>
                <div className="section">
                    <p>Available MYitineraies:</p>
                    <div className="itineraries-div">
                        {this.props.itinerary.map(itinerary => <ItineraryDropdown itinerary={itinerary}></ItineraryDropdown>)
                        }
                    </div>
                </div>
                <div className="footer">
                    <div className="backButton">
                        <a href="/web/city">Back</a>
                    </div>
                    <Footer></Footer>
                </div>
                
            </div>
        )
    } else {
        toRender = (
        <div>Loading ...</div>
        )
    }
    return toRender
}
    componentDidMount() {
        this.props.fetchSelectedCityData(urlCity)
        this.props.fetchItineraryData(urlCity);
        
    }
}


const mapStateToProps = (state) => {
    return {
        itinerary: state.itinerary,
        selectedCity: state.selectedCity,
        cityIsLoading: state.cityIsLoading,
        itineraryIsLoading: state.itineraryIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItineraryData: (city) => dispatch(actionCreator.fetchItineraryData(city)),
        fetchSelectedCityData: (city) => dispatch(actionCreator.fetchSelectedCityData(city)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ItineraryPage)