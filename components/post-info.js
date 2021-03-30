const PostInfo = ({ post }) => {
  return (
    <div className="post-info">
      <div className="author">
        <div className="avatar">
          <img src={`/avatars/${post.author.avatar}`} />
        </div>{" "}
        <strong>{post.author.name}</strong> ({post.author.age})
      </div>
      <time>{post.date}</time>
      <style jsx>{`
        .post-info {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #999;
          margin: 10px 0;
        }
        .author {
          display: flex;
          color: #555;
        }
        .avatar {
          width: 25px;
          height: 25px;
          margin: 0 10px 10px 0;
          border-radius: 50%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PostInfo;
