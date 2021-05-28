import styles from './WaveSection.module.scss';

const WaveSection = ({ children, backgroundImage, lastOfType }) => {
    return (
        <>
            <svg width="0" height="0">
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
                </clipPath>
            </svg>

            <section
                className={styles.root}
                style={{
                    clipPath: 'url(#wave)',
                    paddingBottom: lastOfType ? 200 : 400,
                    marginBottom: lastOfType ? 0 : '-400px',
                }}
            >
                <img
                    className={styles.backgroundImage}
                    src={backgroundImage}
                    alt=""
                />
                <div>{children}</div>
            </section>
        </>
    );
};

export default WaveSection;
