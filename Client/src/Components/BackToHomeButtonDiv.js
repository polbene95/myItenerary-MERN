import React from 'react'

export default class BackToHomeButtonDiv extends React.Component {
    render() {
        return (
            <div className={this.props.name + " backHome-div"}>
                <a href="/web/home">Home</a>
            </div>
        )
    }
}