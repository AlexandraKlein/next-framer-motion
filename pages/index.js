import PostList from '../components/post-list';
import Carousel from '../components/Carousel';
import { getAllPostsForHome } from '../lib/api';

const Homepage = ({ allPosts }) => {
    console.log({ allPosts });
    return (
        <div className="container">
            <Carousel>
                <div className="text-container">
                    <h1>Slide 1</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 2</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 3</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 4</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 5</h1>
                </div>
            </Carousel>
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
