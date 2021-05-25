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

const BlobShapeAlt = ({ id, initialPath, animatePath, imgSrc }) => {
    const viewBoxWidth = 500;
    const viewBoxHeight = 500;
    return (
        <motion.div
            variants={variants}
            style={{
                width: '25%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
                <g>
                    <defs>
                        <clipPath
                            id={id}
                            clipPathUnits="objectBoundingBox"
                            transform={`scale(${1 / viewBoxWidth},${
                                1 / viewBoxHeight
                            })`}
                        >
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
                    </defs>
                </g>
            </svg>
            <img
                src={imgSrc}
                style={{
                    clipPath: `url(#${id})`,
                    width: '100%',
                    objectFit: 'cover',
                }}
                alt=""
            />
        </motion.div>
    );
};

export default BlobShapeAlt;
