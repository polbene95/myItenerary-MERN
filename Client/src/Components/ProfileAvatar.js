import React from 'react';
import profile from '../Images/profile.png';

//if no avatar image use profile
class ProfileAvatar extends React.Component { 
    render () {
        let toRender;
        if (this.props == null) {
            toRender = (
                <img src={profile} alt="your profile avatar"></img>
            )
        } else {
            toRender = (
                <img src={profile} alt="your profile avatar"></img>
            )
        }

        return (
            <div className="profile-div">
               {toRender}
            </div>
        );
    }
}

export default ProfileAvatar