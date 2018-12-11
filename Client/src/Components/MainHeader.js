import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import DropDownMenu from './DropDownMenu'

import './MainHeader.css'

class MainHeader extends React.Component {
    render() {
        return(
            <div className={this.props.name + " main-header"}>
                <ProfileAvatar />
                <DropDownMenu />
            </div>
        )
    }
}

export default MainHeader