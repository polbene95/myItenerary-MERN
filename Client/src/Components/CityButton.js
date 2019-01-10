import React from 'react';

export default class CityButton extends React.Component {

    render () {
        return (
        <div className="city" style={{backgroundImage: 'url(' + this.props.background + ')'}}>
            <a href={"/web/itinerary/"+ this.nameToLowerCase(this.props.name)}>{this.props.name}</a>
        </div>
        )
    }

    nameToLowerCase(name) {
        return name.toLowerCase()
    }
};

