import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import cx from 'classnames';

import styles from './ArcSlider.module.scss';

export default function ArcSlider({ degrees = 20, diameter = 1000, children }) {
    const slideWidth = diameter / children.length;

    const slidesRef = useRef([]);

    const [isDragging, setIsDragging] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [coordX, setCoordX] = useState(0);

    const centerIndex = Math.round(children.length / 2);

    const onUpdate = latest => {
        setCoordX(latest.x);
    };

    const handleModifyTarget = target => {
        const snapTarget = Math.round(target / slideWidth) * slideWidth;

        return snapTarget;
    };

    useEffect(() => {
        slidesRef.current = slidesRef.current.slice(0, children.length);
    }, [children]);

    useEffect(() => {
        if (coordX % slideWidth !== 0) {
            return;
        }

        const activeIndex = slidesRef.current.findIndex(
            (slide, index) =>
                getComputedStyle(slide).getPropertyValue('transform') === 'none'
        );

        if (!isDragging) {
            setActiveIndex(activeIndex);
        }
    }, [isDragging]);

    return (
        <div className={styles.root}>
            <div className={styles.carouselContainer}>
                <motion.div
                    drag="x"
                    onUpdate={onUpdate}
                    dragElastic={0}
                    dragConstraints={{
                        right: slideWidth * centerIndex,
                        left: -(
                            slideWidth *
                            (children.length - (centerIndex + 1))
                        ),
                    }}
                    dragTransition={{
                        power: 0.01,
                        timeConstant: 200,
                        modifyTarget: handleModifyTarget,
                    }}
                >
                    <div className={styles.slidesContainer}>
                        {children.map((child, index) => {
                            const rotate = (index - centerIndex) * degrees;
                            const divider = slideWidth / degrees;

                            return (
                                <motion.div
                                    key={index}
                                    ref={el => (slidesRef.current[index] = el)}
                                    className={cx(styles.slide, {
                                        [styles.active]: activeIndex === index,
                                    })}
                                    animate={{
                                        rotate: coordX / divider + rotate,
                                        transformOrigin: `50% ${diameter}px`,
                                    }}
                                    transition={{
                                        ease: 'easeOut',
                                        duration: 0.5,
                                    }}
                                    onAnimationStart={() => setIsDragging(true)}
                                    onAnimationComplete={() =>
                                        setIsDragging(false)
                                    }
                                >
                                    {child}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

ArcSlider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    degrees: PropTypes.number,
};
