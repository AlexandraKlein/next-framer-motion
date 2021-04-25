import styled from "@emotion/styled";
import Image from "./image";

const PostInfo = ({ post }) => {
  return (
    <InfoContainer>
      <Author>
        <Avatar>
          <Image
            src={post.author.avatar.url}
            width={post.author.avatar.width}
            height={post.author.avatar.height}
            layout="responsive"
          />
        </Avatar>{" "}
        <strong>{post.author.name}</strong>
      </Author>
      <time>{new Date(post.sys.firstPublishedAt).toDateString()}</time>
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
