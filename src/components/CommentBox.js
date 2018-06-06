import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4> type a comment </h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button> submit comment </button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    );
  }
};

export default connect(null, actions)(CommentBox)
