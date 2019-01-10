import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import * as  actionCreator  from '../Store/Actions/actions';

import './ItineraryDropdown.css'
import AvatarPhotoDemo from '../Images/profile.png'

class ItineraryDropdown extends React.Component {

    

    render() {
        let toRender;
        
        if (this.props.posts) {
        if(this.props.posts[0])
        if (this.props.itinerary["_id"]===this.props.posts[0].itineraryId)
        this.props.itinerary.details.comments = this.props.posts
        toRender = (
            <div className="itinerary-div">
            <div className="top-div">
                <div className="left-div">
                    <div className="avatar-div">
                       <img src={this.getAvatarPhoto(this.props.itinerary.author.photo)} alt=""></img> 
                    </div>
                    <div className="author-name-div">
                        {this.props.itinerary.author.name}
                    </div>
                </div>
                <div className="right-div">
                    <p className="title">{this.props.itinerary.details.title}</p>
                    <div className="details">
                        <p>Likes: {this.props.itinerary.details.likes}</p>
                        <p>{this.props.itinerary.details.time} hours</p>
                        <p>{this.props.itinerary.details.price} $</p>
                    </div>
                    <div className="hashtags">
                        {this.props.itinerary.hashtags.map(hashtag => this.hashtagNode(hashtag))}
                    </div>
                </div>
            </div>
            <div className="bottom-div" >
                <div className="text" onClick={this.showContentDiv}>
                    <p>v View All v</p>
                </div>
                <div className="content">
                    <div className="activities-div">
                        <p>Activities</p>
                        <div className="activities-slider">
                            {this.props.itinerary.details.activities.map((activity,index) => this.createActivityNode(activity,index))}   
                        </div>                
                    </div>
                    <div className="comments-div">
                        <p>Comments</p>
                        <div className="comments-input">
                            <input></input><button onClick={(ev) => {
                                this.props.postPostData(this.props.itinerary["_id"],ev.target.previousSibling.value); 
                                this.props.fetchPostsData(this.props.itinerary["_id"]);
                                ev.target.previousSibling.value = "";
                                }}>Send</button>
                        </div>
                        <div className="comments-posts">
                            {this.props.itinerary.details.comments.map(post => this.createCommentNode(post)).reverse()}  
                        </div>
                    </div>
                    <div className="close-div">
                        <p onClick={this.hideContentDiv}>Close</p>
                    </div>
                </div>
            </div>
        </div> 
        )
        } else {
            toRender = (
                <div>Loading ...</div>
                )
        }
        return toRender;
    }

 

    createActivityNode(activity, index) {
        return(
            <div className={'activity ' + index}>
                <p>{activity.name}</p>
            </div>
        )
    }

    createCommentNode(post) {
        return(
            <div className="comment-post">
                <p className="name">Name:</p>
                <p className="body">{post.body}</p>
            </div>
        )
    }

    getAvatarPhoto(photo) {
        if (photo != null) {
            return photo
        } else {
            return AvatarPhotoDemo
        }
    }

    hashtagNode(hashtag) {
        return (
            <p>#{hashtag}</p>
        )
    }

    showContentDiv(ev) {
        let itinerarysDiv = ev.target.parentNode.parentNode.parentNode.parentNode;
        let itineraryDiv = ev.target.parentNode.parentNode.parentNode;
        let dropdownText = ev.target.parentNode;
        let bottomDiv = ev.target.parentNode.parentNode;
        let dropdownContent = bottomDiv.childNodes[1];

        itineraryDiv.classList.add("fullDisplay");
        dropdownText.classList.add("hidded");
        dropdownContent.classList.add("shown");
    
        itineraryDiv.scrollIntoView(true)
        

    }

    hideContentDiv(ev) {

        let itineraryDiv = ev.target.parentNode.parentNode.parentNode.parentNode;
        let bottomDiv = ev.target.parentNode.parentNode.parentNode;
        let dropdownText =  bottomDiv.childNodes[0];
        let dropdownContent = bottomDiv.childNodes[1];

        itineraryDiv.classList.remove("fullDisplay");
        dropdownText.classList.remove("hidded");
        dropdownContent.classList.remove("shown");
    }

    componentDidMount() {
        this.props.fetchPostsData(this.props.itinerary["_id"])    
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsData: (posts) => dispatch(actionCreator.fetchPostsData(posts)),
        postPostData: (postId, body) => dispatch(actionCreator.postPostData(postId, body))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ItineraryDropdown)