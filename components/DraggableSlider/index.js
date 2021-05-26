import React, {
    useCallback,
    useState,
    useEffect,
    createContext,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useMeasure } from 'react-use';
import { motion } from 'framer-motion';

import styles from './DraggableSlider.module.scss';

export const SliderContext = createContext({
    activeIndex: 0,
});

const DraggableSlider = ({ children, navClassName }) => {
    const inViewRatio = 0.5;

    const ref = useRef(null);
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

    const handleClick = index => {
        setActiveIndex(index);
    };

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
            const diff = window.innerWidth / 2 - size / 2;

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
                    onClick={() => handleClick(index)}
                >
                    {renderChild(child, { active: activeIndex })}
                </div>
            );
        });
    };

    return (
        <SliderContext.Provider
            value={{
                activeIndex,
            }}
        >
            <div
                ref={ref}
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
                        right: trackWidth,
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
        </SliderContext.Provider>
    );
};

DraggableSlider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    navClassName: PropTypes.string,
};

export default DraggableSlider;
