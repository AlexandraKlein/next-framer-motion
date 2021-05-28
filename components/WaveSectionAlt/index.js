import styles from './WaveSection.module.scss';
import styled from '@emotion/styled';

const WaveSection = ({
    children,
    backgroundColor,
    backgroundImage,
    lastOfType,
}) => {
    const Section = styled.section`
        background-color: ${backgroundColor};
    `;

    const viewWidth = 1400;
    const viewHeight = 320;

    return (
        <Section className={styles.root}>
            <div className={styles.waveBefore}></div>

            <svg
                width="0"
                height="0"
                viewBox={`0 0 ${viewWidth} ${viewHeight}`}
                class="wave"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath
                        id="waveDown"
                        clipPathUnits="objectBoundingBox"
                        transform={`scale(${1 / viewWidth} ${1 / viewHeight})`}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0,64L48,53.3C96,43,192,21,288,37.3C384,53,480,107,576,144C672,181,768,203,864,176C960,149,1056,75,1152,58.7C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            fill="black"
                        />
                    </clipPath>
                </defs>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0"
                height="0"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="black"
                    d="M0,64L48,53.3C96,43,192,21,288,37.3C384,53,480,107,576,144C672,181,768,203,864,176C960,149,1056,75,1152,58.7C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <img
                className={styles.backgroundImage}
                src={backgroundImage}
                alt=""
            />
            <div>{children}</div>
            <div className={styles.waveAfter}></div>
        </Section>
    );
};

export default WaveSection;
