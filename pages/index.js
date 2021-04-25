import PostList from "../components/post-list";
import { getAllPostsForHome } from "../lib/api";

const Homepage = ({ allPosts }) => {
  return (
    <div className="container">
      <PostList posts={allPosts} />
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, allPosts },
  };
}

export default Homepage;
