import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { getPostPage, getAllPostsWithSlug } from "../../lib/api";
import PostInfo from "../../components/post-info";
import RichText from "../../components/rich-text";
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

const Post = ({ post, preview }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return null;
  }

  const { title, image, content } = post;

  console.log({ preview });

  return (
    <div className="container">
      {preview && (
        <div>
          <h1>Preview Mode</h1>
          <a href="/api/exit-preview">Click here</a> to exit preview mode.
        </div>
      )}

      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={imageVariants}>
          <ImageContainer>
            <Image src={image.url} layout="fill" objectFit="cover" />
          </ImageContainer>
        </motion.div>

        <motion.div variants={textVariants}>
          <PostInfo post={post} />
          <Title>{title}</Title>
          <RichText text={content.json} />
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

const Title = styled.h1``;

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

export async function getStaticProps({ params, preview = false }) {
  console.log({ preview });
  const post = await getPostPage(params.post, preview);

  return {
    props: {
      post,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}

export default Post;
