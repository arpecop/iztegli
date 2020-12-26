"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return <h1>Test</h1>;
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".apps").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(e(LikeButton, { commentID: commentID }), domContainer);
});
