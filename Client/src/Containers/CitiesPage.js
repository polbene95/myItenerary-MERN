import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from '../Store/Actions/actions';

import './CitiesPage.css'

import Header from '../Components/MainHeader'
import Footer from '../Components/BackToHomeButtonDiv'
import CitiesList from '../Components/CitiesList'



class CitiesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
    }
    render() {
 
        return(
        
        <div className="cities-page">
            <Header name={"header"}></Header>
            <CitiesList name={"section"}></CitiesList>
            <Footer name={"footer"}></Footer>
        </div>
        )
        
        
    }
    changeSearchValue(value) {
        this.setState({searchValue:value})
    }
    filterCities() {
        return this.props.cities.filter(city => this.state.searchValue === "" || city.name.toLowerCase().indexOf(this.state.searchValue) !== -1 || city.country.toLowerCase().indexOf(this.state.searchValue) !== -1)
    }

    componentDidMount() {
       this.props.fetchData();
    }

    createCityNode(props) {
        return (
        <div style={{backgroundImage: 'url(' + props.src + ')'}}>
            <div>
                <div style={{backgroundImage: 'url(' + props.src + ')'}}>
                    <p className="city-name">{props.name}</p>
                </div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(CitiesPage)