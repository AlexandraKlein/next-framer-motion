import Link from "next/link";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import PostInfo from "./post-info";
import Image from "./image";

const postVariants = {
  initial: { scale: 0.9, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.75,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const PostList = ({ posts }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        exit: { transition: { staggerChildren: 0.1 } },
        enter: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <PostsWrapper>
        {posts.map((post, index) => {
          const { title, image, slug } = post;
          return (
            <Post key={index}>
              <motion.div variants={postVariants}>
                <Link scroll={false} href="/posts/[post]" as={`/posts/${slug}`}>
                  <a>
                    <motion.div
                      whileHover="hover"
                      variants={{ hover: { scale: 0.96 } }}
                    >
                      <PostImage>
                        <Image
                          src={image.url}
                          layout="fill"
                          objectFit="cover"
                        />
                      </PostImage>
                    </motion.div>
                  </a>
                </Link>
                <Title>{title}</Title>
                <PostInfo post={post} />
              </motion.div>
            </Post>
          );
        })}
      </PostsWrapper>
    </motion.div>
  );
};

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Post = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  text-align: left;
`;

const PostImage = styled.div`
  position: relative;
  width: 100%;
  height: calc(150px + 25vw);

  @media (min-width: 768px) {
    height: calc(200px + 10vw);
  }
`;

export default PostList;
