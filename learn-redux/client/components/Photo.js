import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends Component {
  render() {
    const { posts, i, comments } = this.props
    return (
      <div>
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <Link to={`/view/${posts[i].code}`}>
              <img className="grid-photo" src={posts[i].display_src} alt={posts[i].caption} />
            </Link>

            <CSSTransitionGroup 
              transitionName="like" 
              transitionEnterTimeout={500} 
              transitionLeaveTimeout={500}>
            <span key={posts[i].likes} className="likes-heart">{posts[i].likes}</span>
            </CSSTransitionGroup>

          </div>

          <figcaption>
            <p>{posts[i].caption}</p>
            <div className="control-buttons">
              <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {posts[i].likes}</button>
              <Link className="button" to={`/view/${posts[i].code}`}></Link>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[i] ? comments[i].length : 0 }

              </span>
            </div>
          </figcaption>

        </figure>
      </div>
    )
  }
}
