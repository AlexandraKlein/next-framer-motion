import styled from "@emotion/styled";

const PostInfo = ({ post }) => {
  return (
    <InfoContainer>
      <Author>
        <Avatar>
          <img src={`/avatars/${post.author.avatar}`} />
        </Avatar>{" "}
        <strong>{post.author.name}</strong> ({post.author.age})
      </Author>
      <time>{post.date}</time>
    </InfoContainer>
  );
};

const Author = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 10px 10px 0;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin: 10px 0;
`;

export default PostInfo;
