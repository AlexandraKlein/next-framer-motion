import { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import styles from './WaveSection.module.scss';

const WaveSection = ({
    children,
    backgroundColor,
    backgroundImage,
    backgroundPosition = 'bottom',
    className,
    noWave,
}) => {
    const waveRef = useRef(null);
    const [waveHeight, setWaveHeight] = useState(0);

    const handleSetWaveHeight = () =>
        setWaveHeight(waveRef.current.clientHeight);

    useEffect(() => {
        if (noWave) {
            return;
        }

        handleSetWaveHeight();

        window.addEventListener('resize', handleSetWaveHeight);

        return () => {
            window.removeEventListener('resize', handleSetWaveHeight);
        };
    }, []);

    return (
        <section
            style={{ backgroundColor }}
            className={cx(styles.root, { [className]: className })}
        >
            {!noWave && (
                <svg
                    ref={waveRef}
                    className={styles.wave}
                    style={{ bottom: -waveHeight + 1 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill={backgroundColor}
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    ></path>
                </svg>
            )}
            <img
                className={styles.backgroundImage}
                src={backgroundImage}
                style={{ objectPosition: backgroundPosition }}
                alt=""
            />
            <div className={styles.content}>{children}</div>
            <div className={styles.waveAfter}></div>
        </section>
    );
};

export default WaveSection;
