import React from 'react';
import Footer from '../Components/DynamicFooter'
import start from '../Images/circled-right-2.png'
import './LandingPage.css'
import { connect } from 'react-redux';
import * as  actionCreator  from '../Store/Actions/actions';
import logo from '../Images/MYtineraryLogo.png'
import MainHeader from '../Components/MainHeader'

class LandingPage extends React.Component {
    componentDidMount() {
        this.props.fetchData()
    }
    render() {
        let toRender;
        if(!this.props.isLoading) {
            toRender = (
            <React.Fragment>
                <div className="header">
                <MainHeader name={"top-header"}/>
                <div className="bot-header">
                    <img className="logo-img" src={logo} alt="myitinerary logo" mailto=""></img>
                </div>
                </div>
                <div className="section">
                    <p>Find your preftect trip, desinged by insiders who know and love their cities.</p>
                    <a href="/web/city"><img className="button-img" src={start} alt="circled-right button"></img></a>
                </div> 
                <div className="footer">
                    <p>Popular MYtineraries</p>
                    <Footer data={this.props.cities}/>
                </div>
            </React.Fragment>
            )
        
    } else {
        toRender = (
            <div className="section">Loading ...</div>
        )
    }

        return (
        <div className="landing-page">
            {toRender}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cities: state.cities,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actionCreator.fetchCitiesData())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage)

