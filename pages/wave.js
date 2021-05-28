import WaveSection from '../components/WaveSection';

const Content = () => {
    return (
        <div
            style={{ backgroundColor: 'white', padding: 40, borderRadius: 20 }}
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
            <WaveSection backgroundImage="https://images.unsplash.com/photo-1605106715994-18d3fecffb98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF0dGVybnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                <Content />
            </WaveSection>
            <WaveSection backgroundImage="https://images.unsplash.com/photo-1613832187362-30fbc695074d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBhdHRlcm5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                <Content />
            </WaveSection>
            <WaveSection
                lastOfType
                backgroundImage="https://images.unsplash.com/photo-1542045272572-e55b8b5e79b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwYXR0ZXJuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <Content />
            </WaveSection>
        </div>
    );
}
