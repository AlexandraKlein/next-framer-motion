import { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import cx from 'classnames';

import styles from './ArcSlider.module.scss';

export default function ArcSlider({ degrees = 20, diameter = 1000, children }) {
    const slideWidth = diameter / children.length;

    const [active, setActive] = useState(0);
    const [coordX, setCoordX] = useState(0);

    const onUpdate = latest => {
        setCoordX(latest.x);
    };

    const handleModifyTarget = target => {
        const snapTarget = Math.round(target / slideWidth) * slideWidth;

        const clampedActive = Math.min(
            Math.max(parseInt(-snapTarget / slideWidth), 0),
            children.length - 1
        );

        setActive(clampedActive);

        return snapTarget;
    };

    return (
        <div className={styles.root}>
            <div className={styles.carouselContainer}>
                <motion.div
                    drag="x"
                    onUpdate={onUpdate}
                    dragElastic={0}
                    dragConstraints={{
                        right: 0,
                        left: -(slideWidth * (children.length - 1)),
                    }}
                    dragTransition={{
                        power: 0.03,
                        timeConstant: 200,
                        modifyTarget: handleModifyTarget,
                    }}
                >
                    <div className={styles.slidesContainer}>
                        {children.map((child, index) => {
                            const rotate = index * degrees;
                            const divider = slideWidth / degrees;

                            return (
                                <motion.div
                                    key={index}
                                    className={cx(styles.slide, {
                                        [styles.active]: active === index,
                                    })}
                                    animate={{
                                        rotate: coordX / divider + rotate,
                                        transformOrigin: `50% ${diameter}px`,
                                    }}
                                    transition={{
                                        ease: 'easeOut',
                                        duration: 0.5,
                                    }}
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
