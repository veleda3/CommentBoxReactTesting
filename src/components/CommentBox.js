import React, { Component } from 'react';

class CommentBox extends Component {
  render () {
    return (
      <form>
        <h4> type a comment </h4>
        <textarea />
        <div>
          <button> submit comment </button>
        </div>
      </form>
    );
  }
};

export default CommentBox
