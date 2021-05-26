import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useMeasure, usePrevious, useWindowSize } from 'react-use';

import styles from './MotionSlider.module.scss';

const MotionSlider = ({ slides, children }) => {
    const rootRef = useRef();
    const controls = useAnimation();
    const [containerRef, { width: rootWidth }] = useMeasure();
    const [slideRef, { width: containerWidth }] = useMeasure();
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(0);
    const activePrevious = usePrevious(active);
    const { width } = useWindowSize();

    const slideWidth = containerWidth / children.length;
    const offset = rootWidth / 2 - slideWidth / 2;
    const maxLeft =
        -(slideWidth * (children.length - 1)) + (rootWidth - slideWidth);

    let padding = 0;

    if (rootRef.current) {
        const paddingRaw = getComputedStyle(rootRef.current).getPropertyValue(
            '--slide-spacing'
        );

        padding = parseFloat(paddingRaw) * 10;
    }

    const x = Math.max(
        Math.min(-active * slideWidth + offset, 0),
        maxLeft + padding
    );

    useEffect(() => {
        controls.set({ x });
    }, [width]);

    useEffect(() => {
        if (!isDragging && active != activePrevious) {
            controls.start({
                x,
                transition: { duration: 1, ease: 'anticipate' },
            });
        }
    }, [active]);

    const handleClickSlide = useCallback(
        i => e => {
            if (isDragging) {
                e.preventDefault();
                return;
            }
            setActive(i);
        },
        [isDragging]
    );

    const renderChild = (child, props) => {
        if (child instanceof Function) {
            return child({ ...props });
        }

        return child;
    };

    const renderSlides = slides => {
        return children.map((child, i) => {
            return (
                <motion.div
                    key={i}
                    className={styles.item}
                    onClick={handleClickSlide(i)}
                >
                    {renderChild(child, { active })}
                </motion.div>
            );
        });
    };

    return (
        <div className={styles.root} ref={rootRef}>
            <div className={styles.outer} ref={containerRef}>
                <motion.div
                    drag={'x'}
                    animate={controls}
                    transition={{ type: 'inertia', velocity: 10, duration: 2 }}
                    dragConstraints={{
                        left: maxLeft + padding,
                        right: 0,
                    }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => {
                        setTimeout(() => setIsDragging(false), 10);
                    }}
                    dragElastic={0.6}
                    dragTransition={{
                        power: 0.3,
                        max: padding,
                        timeConstant: 200,
                        modifyTarget: target => {
                            const snapTarget =
                                Math.round(target / slideWidth) * slideWidth;

                            setActive(
                                Math.min(
                                    Math.max(
                                        parseInt(
                                            (snapTarget * -1) / slideWidth
                                        ),
                                        0
                                    ),
                                    children.length - 1
                                )
                            );
                            return snapTarget + offset + padding / 2;
                        },
                    }}
                >
                    <div
                        style={{
                            width: `${children.length * 90}%`,
                        }}
                        className={styles.slides}
                        ref={slideRef}
                    >
                        {renderSlides()}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

MotionSlider.propTypes = {
    className: PropTypes.string,
    slides: PropTypes.array.isRequired,
};

MotionSlider.defaultProps = {
    className: null,
};

MotionSlider.propTypes = {
    slides: PropTypes.array,
};

export default MotionSlider;
