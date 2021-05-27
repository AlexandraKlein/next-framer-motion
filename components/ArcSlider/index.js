import { useState } from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';

import styles from './ArcSlider.module.scss';

const slides = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
];

export default function ArcSlider({ children }) {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(0);
    const [coordX, setCoordX] = useState(0);

    const slideWidth = 200;

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
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    dragTransition={{
                        power: 0.001,
                        timeConstant: 200,
                        modifyTarget: handleModifyTarget,
                    }}
                >
                    <div className={styles.slidesContainer}>
                        {children.map((child, index) => {
                            const transformOriginY = 1000;
                            const degrees = 20;
                            const rotate = index * degrees;
                            return (
                                <motion.div
                                    key={index}
                                    className={cx(styles.slide, {
                                        [styles.active]: active === index,
                                    })}
                                    animate={{
                                        rotate: coordX / 10 + rotate,
                                        transformOrigin: `50% ${transformOriginY}px`,
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
