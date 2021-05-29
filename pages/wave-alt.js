import WaveSection from '../components/WaveSectionAlt';

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
                backgroundImage="https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbG9yfGVufDB8fDB8fA%3D%3D"
            >
                <Content />
                <Content />
                <Content />
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
