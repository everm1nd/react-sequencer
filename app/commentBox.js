import React from "react";
import CommentList from "./commentList";
import CommentForm from "./commentForm";

export default React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  },
  componentDidMount: function() {
    let data = [
      {"author": "Pete Hunt", "text": "This is one comment"},
      {"author": "Jordan Walke", "text": "This is *another* comment"}
    ];
    this.setState({data: data});
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
