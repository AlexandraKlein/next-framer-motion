import React, { useRef, useState, useEffect } from 'react';
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
    'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
];

const initialSlidesState = images.map((slide, index) => ({
    coords: {
        x: 0,
        y: 0,
    },
    theta: 0,
    index: index + 1,
    image: slide,
}));

const numSlides = images.length;
const angle = 360 / numSlides;

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
        window.addEventListener('resize', getInitialPositions);
        return () => window.removeEventListener('resize', getInitialPositions);
    }, []);

    useEffect(() => {
        if (!wheelRef.current) {
            return;
        }
        getInitialPositions();
    }, [wheelRef]);

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
    }, [center, wheelWidth]);

    const handleSlideClick = e => {
        const nextIndex = parseFloat(e.target.dataset.index);
        const currentIndex = activeSlide.index;

        setActiveSlide(slides[nextIndex - 1]);

        let numOfRotations = nextIndex - currentIndex;

        if (numOfRotations < -numSlides / 2) {
            numOfRotations = numOfRotations + numSlides;
        }

        if (numOfRotations > numSlides / 2) {
            numOfRotations = numOfRotations - numSlides;
        }

        setRotate(prevRotate => prevRotate + angle * numOfRotations);
    };

    return (
        <div className="container">
            <div
                ref={wheelRef}
                className="wheel"
                style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
            >
                {slides &&
                    slides.map((slide, index) => {
                        return (
                            <div
                                onClick={handleSlideClick}
                                key={index}
                                data-index={index + 1}
                                className={classnames('slide', {
                                    active: slide.index === activeSlide.index,
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

            <div className="arrows">
                <button className="arrow-left">
                    <span>&larr;</span>
                </button>
                <button className="arrow-right">
                    <span>&rarr;</span>
                </button>
            </div>

            <style jsx>{`
                .wheel {
                    width: 75vmin;
                    height: 75vmin;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.27);
                }

                .center-position {
                    width: 15vmin;
                    height: 15vmin;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .slide {
                    width: 15vmin;
                    height: 15vmin;
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                    transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.27);
                    border: 0.3vmin solid white;
                }

                .slide.active {
                    border-width: 1.3vmin;
                }

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
                    color: gray;
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
