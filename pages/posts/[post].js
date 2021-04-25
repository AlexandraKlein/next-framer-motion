import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import posts from "../../data/posts";
import PostInfo from "../../components/post-info";
import Image from "../../components/image";

const easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: {
    y: 150,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

const Post = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="container">
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={imageVariants}>
          <ImageContainer>
            <Image
              src={`/images/${post.id}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        </motion.div>

        <motion.div variants={textVariants}>
          <PostInfo post={post} />
          <Paragraph>{post.text}</Paragraph>
        </motion.div>

        <motion.div variants={backVariants}>
          <Link href="/">
            <Anchor>Back to list</Anchor>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Paragraph = styled.p`
  margin: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(300px + 25vw);
`;

const Anchor = styled.a`
  cursor: pointer;
  display: inline-block;
  margin: 30px 0;
`;

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.id == params.post);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = posts.map(({ id }) => `/posts/${id}`) ?? [];

  return {
    paths,
    fallback: true,
  };
}

export default Post;
