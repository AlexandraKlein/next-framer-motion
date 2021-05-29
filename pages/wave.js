import WaveSection from '../components/WaveSection';
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
                id="wave1"
                backgroundImage="https://images.unsplash.com/photo-1605106715994-18d3fecffb98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF0dGVybnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <Content />
                <Content />
                <Content />
            </WaveSection>
            <WaveSection
                id="wave2"
                theme="right"
                backgroundImage="https://images.unsplash.com/photo-1613832187362-30fbc695074d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBhdHRlcm5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <BlobShapeAlt
                    id="uid1"
                    size="50vw"
                    initialPath="M51.6,1.9C51.6,31.7,25.8,63.4,-1.2,63.4C-28.3,63.4,-56.5,31.7,-56.5,1.9C-56.5,-28,-28.3,-55.9,-1.2,-55.9C25.8,-55.9,51.6,-28,51.6,1.9Z"
                    animatePath="M59.8,-4.1C59.8,18.4,29.9,36.8,-1.5,36.8C-32.9,36.8,-65.8,18.4,-65.8,-4.1C-65.8,-26.7,-32.9,-53.3,-1.5,-53.3C29.9,-53.3,59.8,-26.7,59.8,-4.1Z"
                    imgSrc="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjk0fDgzNTI2NTd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    hasBackdrop
                />
            </WaveSection>
            <WaveSection
                id="wave3"
                lastOfType
                backgroundImage="https://images.unsplash.com/photo-1542045272572-e55b8b5e79b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwYXR0ZXJuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <Content />
            </WaveSection>
        </div>
    );
}
