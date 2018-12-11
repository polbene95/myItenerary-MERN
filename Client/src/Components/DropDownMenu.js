import React from 'react'
import './DropDownMenu.css'
class DropDownMenu extends React.Component {
    render() {
        return (
            <div className="login-form dropdown">
                <div className="dropdown-icon"></div>
                <div className="dropdown-content">
                    <a href="#root">Log in</a>
                    <a href="#root">Create Account</a>
                </div>
            </div>
        )
    }
}

export default DropDownMenu