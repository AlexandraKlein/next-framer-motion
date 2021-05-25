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
    const viewBoxWidth = 200;
    const viewBoxHeight = 200;
    return (
        <div className="blob-container">
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

            <img
                src={imgSrc}
                style={{
                    WebkitClipPath: `url(#${id})`,
                    clipPath: `url(#${id})`,
                    width: '100%',
                    objectFit: 'cover',
                }}
            />
            <style jsx>
                {`
                    .blob-container {
                        width: 25%;
                    }
                `}
            </style>
        </div>
    );
};

export default BlobShapeAlt;
