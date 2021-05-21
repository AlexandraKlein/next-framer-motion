import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const easing = [0.77, 0, 0.18, 1];
const variants = {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easing },
    },
    exit: {
        scale: 0.75,
        y: 100,
        opacity: 0,
        transition: { duration: 0.4, ease: easing },
    },
};

const BlobShape = ({ id, initialPath, animatePath, imgSrc }) => {
    return (
        <motion.div variants={variants} style={{ width: '25%' }}>
            <svg viewBox="0 0 500 500">
                <clipPath id={id}>
                    <motion.path
                        initial={{ d: initialPath }}
                        animate={{ d: animatePath }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 5,
                            ease: easing,
                        }}
                    />
                </clipPath>
                <motion.path
                    fill="#bbb"
                    initial={{ d: animatePath }}
                    animate={{ d: initialPath }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 5,
                        ease: easing,
                    }}
                />
                <g clipPath={`url(#${id})`}>
                    <image
                        xlinkHref={imgSrc}
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMinYMin slice"
                    ></image>
                </g>
            </svg>
        </motion.div>
    );
};

export default BlobShape;
