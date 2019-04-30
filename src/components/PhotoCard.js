import React, { Component } from 'react';
import { Server } from 'https';
class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "philzcoffee",
        thumbnailUrl:
          "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
        imageUrl:
          "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
          {
            username: "philzcoffee",
            text:
              "We've got more than just delicious coffees to offer at our shops!"
          },
          {
            username: "biancasaurus",
            text: "Looks delicious!"
          },
          {
            username: "martinseludo",
            text: "Can't wait to try it!"
          }
        ]
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
    }
  }
  render() {
    const {
      username,
        thumbnailUrl,
        imageUrl,
        likes,
        timestamp,
        comments,
    } = this.state.data;
    return (
    <div className="photo-card">
      <div className="photo-card-header"><img src={thumbnailUrl}/><span> {username} </span></div>
      <img className="photo-card-photo" src={imageUrl}/>
      <div className="photo-card-footer"><h2/><h3/></div>
      <div className="photo-card-heart-counter">{likes} likes</div>
      {this.state.data.comments.map((e)=> <div><span>{e.username}</span><span>{e.text}</span></div>)}
    </div>);
  };

}

export default PhotoCard;