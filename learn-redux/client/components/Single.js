import React, { Component } from 'react'
import Photo from './Photo'


export default class Single extends Component {
  render() {
    const i = this.props.posts.findIndex((post) => 
      post.code === this.props.params.postId);
      const post = this.props.posts[i];
      
      return (
        <div>
        <div className="single-photo">
          <Photo i={i} post={post} {...this.props} />
        </div>
      </div>
    )
  }
}
