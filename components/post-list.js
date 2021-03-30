import Link from "next/link";
import { motion } from "framer-motion";
import PostInfo from "./post-info";

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

const PostList = ({ posts }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{
      exit: { transition: { staggerChildren: 0.1 } },
      enter: { transition: { staggerChildren: 0.1 } },
    }}
  >
    <div className="posts">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <motion.div variants={postVariants}>
              <Link
                scroll={false}
                href="/posts/[post]"
                as={`/posts/${post.id}`}
              >
                <a>
                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 0.96 } }}
                  >
                    <img className="img" src={`/images/${post.id}.jpg`} />
                  </motion.div>
                  <div>{post.title}</div>
                </a>
              </Link>
              <PostInfo post={post} />
            </motion.div>
          </div>
        );
      })}

      <style jsx>{`
        .posts {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 10px 20px;
        }

        .post {
          width: 100%;
        }

        .img {
          width: 100%;
          max-height: calc(200px + 40vw);
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .posts {
            grid-template-columns: 1fr 1fr;
          }

          .img {
            max-height: calc(200px + 10vw);
          }
        }
      `}</style>
    </div>
  </motion.div>
);

export default PostList;
