import WaveSection from '../components/WaveSectionAlt';
import BlobShapeAlt from '../components/blogShapeAlt';

const Content = () => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                color: 'black',
                padding: 40,
                borderRadius: 20,
                margin: 20,
            }}
        >
            <h1>Hello</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default function Waves() {
    return (
        <div>
            <WaveSection
                backgroundColor="#ECF0FA"
                backgroundPosition="bottom"
                backgroundImage="https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbG9yfGVufDB8fDB8fA%3D%3D"
            >
                <BlobShapeAlt
                    id="uid1"
                    size="50vw"
                    initialPath="M51.6,1.9C51.6,31.7,25.8,63.4,-1.2,63.4C-28.3,63.4,-56.5,31.7,-56.5,1.9C-56.5,-28,-28.3,-55.9,-1.2,-55.9C25.8,-55.9,51.6,-28,51.6,1.9Z"
                    animatePath="M59.8,-4.1C59.8,18.4,29.9,36.8,-1.5,36.8C-32.9,36.8,-65.8,18.4,-65.8,-4.1C-65.8,-26.7,-32.9,-53.3,-1.5,-53.3C29.9,-53.3,59.8,-26.7,59.8,-4.1Z"
                    imgSrc="https://images.unsplash.com/photo-1558035579-a10d04acf787?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
            </WaveSection>
            <WaveSection
                backgroundColor="#5DA7C4"
                backgroundImage="https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1"
            >
                <Content />
            </WaveSection>
            <WaveSection
                backgroundColor="#FE99A9"
                backgroundImage="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1"
            >
                <Content />
            </WaveSection>
        </div>
    );
}
