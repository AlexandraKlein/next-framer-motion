import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useMeasure } from 'react-use';
import { motion } from 'framer-motion';

import styles from './DraggableSlider.module.scss';

const DraggableSlider = ({ children, navClassName, isCentered }) => {
    const inViewRatio = 0.5;

    const [trackRef, { width: trackWidth }] = useMeasure();

    const [tileWidth, setTileWidth] = useState(0);
    const [pageCenterDiff, setPageCenterDiff] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const isBeginning = activeIndex === 0;
    const isEnd = activeIndex === children.length - 1;

    const showPrev = useCallback(() => {
        if (isBeginning) {
            return;
        }
        setActiveIndex(activeIndex - 1);
    }, [activeIndex, isBeginning]);

    const showNext = useCallback(() => {
        if (isEnd) {
            return;
        }
        setActiveIndex(activeIndex + 1);
    }, [activeIndex, isEnd]);

    const handleSnap = target => {
        const index =
            target > tileWidth
                ? 0 // dont go beyond first item
                : target < (trackWidth - tileWidth) * -1
                ? children.length - 1 // dont go beyond last item
                : Math.floor(target / tileWidth) * -1;

        setActiveIndex(index);
        return index * -1 * tileWidth + pageCenterDiff;
    };

    useEffect(() => {
        const resizeHandler = () => {
            // split track size in tiles
            const size = trackWidth / children.length;
            const diff = isCentered ? window.innerWidth / 2 - size / 2 : 0;

            setTileWidth(size);
            setPageCenterDiff(diff);
        };

        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [children.length, trackWidth]);

    const renderChild = (child, props) => {
        if (child instanceof Function) {
            return child({ ...props });
        }

        return child;
    };

    const renderSlides = slides => {
        return children.map((child, index) => {
            return (
                <div
                    key={index}
                    className={styles.slideContainer}
                    onClick={() => setActiveIndex(index)}
                >
                    {renderChild(child, { active: activeIndex })}
                </div>
            );
        });
    };

    return (
        <div
            className={cx(styles.root, {
                [styles.isDragging]: isDragging,
            })}
        >
            <motion.div
                ref={trackRef}
                className={styles.track}
                drag="x"
                dragConstraints={{
                    left: -trackWidth,
                    right: trackWidth - tileWidth,
                }}
                dragTransition={{
                    power: 0.3,
                    timeConstant: 200,
                    modifyTarget: handleSnap,
                }}
                animate={{
                    x: activeIndex * -1 * tileWidth + pageCenterDiff,
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                <div className={styles.inner}>{renderSlides()}</div>
            </motion.div>
            <nav className={cx(styles.nav, navClassName)}>
                <button
                    className={styles.navItem}
                    onClick={showPrev}
                    disabled={isBeginning}
                >
                    <span className={styles.navItemInner}>←</span>
                </button>
                <button
                    className={styles.navItem}
                    onClick={showNext}
                    disabled={isEnd}
                >
                    <span className={styles.navItemInner}>→</span>
                </button>
            </nav>
        </div>
    );
};

DraggableSlider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.arrayOf(PropTypes.func),
    ]).isRequired,
    navClassName: PropTypes.string,
};

export default DraggableSlider;
