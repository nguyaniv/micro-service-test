const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === 'approved') content = comment.content
    else if (comment.status === 'pending') content = 'comment awaiting for approval'

    else content = 'this comment rejected.'
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
