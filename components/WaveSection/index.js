import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './WaveSection.module.scss';
import { useMedia } from 'react-use';

const WaveSection = ({
    children,
    id,
    theme = 'left',
    backgroundImage,
    lastOfType,
}) => {
    const [path, setPath] = useState(null);
    const isDesktop = useMedia('(min-width: 768px)');

    const leftPath =
        'M0,0.0897c0,0,0.22-0.0727,0.3803-0.0705S0.6559,0.0832,0.782,0.079C0.908,0.0747,1,0.032,1,0.032V1H0V0.0897z';
    const rightPath =
        'M1,0.0897c0,0-0.22-0.0727-0.3803-0.0705S0.3441,0.0832,0.218,0.079C0.092,0.0747,0,0.032,0,0.032L0,1h1V0.0897z';

    const leftPathMobile = 'M0,0.126c0,0,0.3398-0.1218,1-0.0983V1H0V0.126z';
    const rightPathMobile = 'M1,0.126c0,0-0.3398-0.1218-1-0.0983L0,1h1V0.126z';

    const desktopPath = theme === 'right' ? rightPath : leftPath;
    const mobilePath = theme === 'right' ? rightPathMobile : leftPathMobile;

    useEffect(() => {
        setPath(isDesktop ? desktopPath : mobilePath);
    }, [isDesktop]);

    return (
        <section
            className={styles.root}
            style={{
                WebkitClipPath: `url(#${id})`,
                clipPath: `url(#${id})`,
                paddingBottom: lastOfType ? 200 : 400,
                marginBottom: lastOfType ? 0 : -200,
            }}
        >
            <svg width="0" height="0">
                <clipPath id={id} clipPathUnits="objectBoundingBox">
                    <path d={path} />
                </clipPath>
            </svg>
            <img
                className={styles.backgroundImage}
                src={backgroundImage}
                alt=""
            />
            <div>{children}</div>
        </section>
    );
};

WaveSection.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

export default WaveSection;
