import React from 'react'
import CityButton from './CityButton'
import './DynamicFooter.css'



class DynamicFooter extends React.Component {
    
    constructor(props) {
        super(props)
        this.allCities = [];
        this.cities =  [];
        this.state = {
            cityOne: "",
            cityTwo: "",
            cityThree: "",
            cityFour:""
        }
    }

    componentDidMount() {
        this.changeTheCity()
        this.interval = setInterval(() =>{this.changeTheCity()}, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    changeTheCity() {
        this.allCities = this.props.data
        this.cities = [...this.allCities];
        this.setState(() => ({
            cityOne: this.getACity(),
            cityTwo: this.getACity(),
            cityThree: this.getACity(),
            cityFour: this.getACity()
        }))
    }
    getACity() {
        let cities = this.cities;
        let selectedCity = cities[Math.floor(Math.random()*cities.length)];
        let index = cities.indexOf(selectedCity);
        cities.splice(index,1);
        return selectedCity;
    }

    render() {
        return (

            <div className="popular-container">
                <CityButton background={this.state.cityOne.src} name={this.state.cityOne.name} />
                <CityButton background={this.state.cityTwo.src} name={this.state.cityTwo.name} />
                <CityButton background={this.state.cityThree.src} name={this.state.cityThree.name} />
                <CityButton background={this.state.cityFour.src} name={this.state.cityFour.name} />
            </div>
        )
    }
}


export default DynamicFooter;