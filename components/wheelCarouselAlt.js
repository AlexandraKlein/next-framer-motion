import React, { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import classnames from 'classnames';

const images = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    // 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    // 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    // 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
];

const numSlides = images.length;
const angle = 360 / numSlides;

const initialSlidesState = images.map((slide, index) => ({
    coords: {
        x: 0,
        y: 0,
    },
    theta: 0,
    index: index + 1,
    image: slide,
    rotate: (index + 1) * angle,
}));

const WheelCarousel = () => {
    const wheelRef = useRef(null);

    const [slides, setSlides] = useState(initialSlidesState);
    const [activeSlide, setActiveSlide] = useState(slides[0]);
    const [wheelWidth, setWheelWidth] = useState(0);
    const [theta, setTheta] = useState(Math.PI / (numSlides / 2));
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [rotate, setRotate] = useState(0);

    const getInitialPositions = () => {
        const center = {
            x: parseFloat(getComputedStyle(wheelRef.current).width) / 2,
            y: parseFloat(getComputedStyle(wheelRef.current).width) / 2,
        };

        setCenter(center);
        setWheelWidth(parseFloat(getComputedStyle(wheelRef.current).width));
    };

    useEffect(() => {
        if (!wheelRef.current) {
            return;
        }
        getInitialPositions();
        window.addEventListener('resize', getInitialPositions);
        return () => window.removeEventListener('resize', getInitialPositions);
    }, []);

    useEffect(() => {
        if (!wheelWidth) {
            return;
        }

        const positionedSlides = slides.map((slide, index) => {
            const newTheta = theta * (index + numSlides);
            const wheelRadius = wheelWidth / 2;
            const x = Math.cos(newTheta) * -wheelRadius;
            const y = Math.sin(newTheta) * -wheelRadius;

            return {
                ...slide,
                coords: { x, y },
            };
        });

        setSlides(positionedSlides);
    }, [wheelWidth]);

    const getDesiredSlide = direction => {
        let nextIndex;

        if (direction === 'prev') {
            nextIndex =
                activeSlide.index < numSlides ? activeSlide.index + 1 : 1;
        }

        if (direction === 'next') {
            nextIndex =
                activeSlide.index === 1 ? numSlides : activeSlide.index - 1;
        }

        return slides[nextIndex - 1];
    };

    const handlePrevious = () => {
        const desiredSlide = getDesiredSlide('prev');

        setActiveSlide(desiredSlide);
        setRotate(prevRotate => prevRotate + angle);
    };

    const handleNext = () => {
        const desiredSlide = getDesiredSlide('next');

        setActiveSlide(desiredSlide);
        setRotate(prevRotate => prevRotate - angle);
    };

    const handlers = useSwipeable({
        onSwiping(e) {
            const { dir, absX } = e;

            if (absX > wheelWidth) {
                return;
            }

            const percentage = absX / wheelWidth;
            const rotation = percentage * angle;

            if (dir === 'Left') {
                setRotate(prevRotate => prevRotate + rotation * -1);
            }

            if (dir === 'Right') {
                setRotate(prevRotate => prevRotate + rotation);
            }
        },
        onSwiped(e) {
            setRotate(rotate - (rotate % angle));
        },
        trackMouse: true,
        trackTouch: true,
    });

    return (
        <div className="wheel-container">
            <div
                className="wheel"
                ref={wheelRef}
                style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
            >
                <div className="wheel-inner" {...handlers}>
                    {slides &&
                        slides.map((slide, index) => {
                            return (
                                <div
                                    key={index}
                                    data-index={index + 1}
                                    className={classnames('slide', {
                                        active:
                                            slide.index === activeSlide.index,
                                    })}
                                    style={{
                                        top: center.x + slide.coords.x,
                                        left: center.y + slide.coords.y,
                                        transform: `translate(-50%, -50%) rotate(${-rotate}deg)`,
                                    }}
                                >
                                    <img src={slide.image} />
                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="arrows">
                <button onClick={handlePrevious} className="arrow-left">
                    <span>&larr;</span>
                </button>
                <button onClick={handleNext} className="arrow-right">
                    <span>&rarr;</span>
                </button>
            </div>

            <style jsx>{`
                .wheel-container {
                    position: relative;
                    flex: 1;
                }

                .wheel {
                    position: absolute;
                    width: 65vmin;
                    height: 65vmin;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform 0.5s
                        cubic-bezier(0.18, 0.89, 0.32, 1.27);
                }

                .wheel-inner {
                    height: 100%;
                    width: 100%;
                }

                .slide {
                    width: 15vmin;
                    height: 15vmin;
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    cursor: pointer;
                    transition: transform 0.5s
                        cubic-bezier(0.18, 0.89, 0.32, 1.27);
                    border: 0.3vmin solid white;
                    user-select: none;
                }

                // .slide.active {
                //     border-width: 1.3vmin;
                // }

                .slide img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                }

                .arrows {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 110vmin;
                }

                .arrow-right,
                .arrow-left {
                    position: absolute;
                }

                .arrow-right {
                    right: 0;
                }

                .arrow-left {
                    left: 0;
                }

                button {
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    appearance: none;
                    color: white;
                    font-size: 2rem;
                }

                button:active {
                    transform: scale(1.5);
                    transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.27);
                }
            `}</style>
        </div>
    );
};

export default WheelCarousel;
