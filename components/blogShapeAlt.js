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

const BlobShapeAlt = ({
    id,
    size,
    hasBackdrop,
    initialPath,
    animatePath,
    imgSrc,
}) => {
    const viewBoxWidth = 200;
    const viewBoxHeight = 200;

    return (
        <motion.div
            variants={variants}
            style={{ position: 'relative', width: size, height: size }}
        >
            <svg
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                width="0"
                height="0"
            >
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
                                transform={`translate(${viewBoxWidth / 2} ${
                                    viewBoxHeight / 2
                                }) scale(1.5)`}
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
            {hasBackdrop && (
                <svg
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                >
                    <motion.path
                        transform={`translate(${viewBoxWidth / 2} ${
                            viewBoxHeight / 2
                        }) scale(1.5)`}
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
                </svg>
            )}

            <img
                src={imgSrc}
                style={{
                    WebkitClipPath: `url(#${id})`,
                    clipPath: `url(#${id})`,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </motion.div>
    );
};

export default BlobShapeAlt;
