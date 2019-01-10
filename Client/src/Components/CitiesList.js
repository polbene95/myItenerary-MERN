import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from '../Store/Actions/actions';

import CityButton from './CityButton'

import './CitiesList.css'



class CitiesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
    }
    render() {
 
        return(
            <div className={this.props.name + " cities-list"}>
                <div className="input-div">
                    <input value={this.state.searchValue} onChange={ e => this.changeSearchValue(e.target.value)}></input>
                </div>
                <div className="cityList">
                    {this.filterCities()
                        .map(city => <CityButton name={city.name} background={city.src.landscape}></CityButton>)}
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(CitiesList)