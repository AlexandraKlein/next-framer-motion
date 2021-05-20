import React, { useRef, useState, useEffect } from 'react';

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
    active: false,
    image: slide,
}));

const WheelCarousel = () => {
    const wheelRef = useRef(null);
    const centerPositionRef = useRef(null);

    const numSlides = images.length;

    const [slides, setSlides] = useState(initialSlidesState);
    const [wheelWidth, setWheelWidth] = useState(0);
    const [theta, setTheta] = useState(Math.PI / (numSlides / 2));
    const [center, setCenter] = useState({ x: 0, y: 0 });

    const getWheelWidth = () => {
        setWheelWidth(parseFloat(getComputedStyle(wheelRef.current).width));
    };

    const getCenter = () => {
        const center = {
            x: parseFloat(getComputedStyle(centerPositionRef.current).left),
            y: parseFloat(getComputedStyle(centerPositionRef.current).top),
        };

        setCenter(center);
    };

    const getInitialPositions = () => {
        getCenter();
        getWheelWidth();
    };

    useEffect(() => {
        window.addEventListener('resize', getInitialPositions);
        return () => window.removeEventListener('resize', getInitialPositions);
    }, []);

    useEffect(() => {
        if (!wheelRef.current || !centerPositionRef.current) {
            return;
        }
        getInitialPositions();
    }, [wheelRef, centerPositionRef]);

    useEffect(() => {
        if (!wheelWidth) {
            return;
        }

        const updated_slides = slides.map((slide, index) => {
            const newTheta = theta * (index + numSlides / 4);
            const wheelRadius = wheelWidth / 2;
            const x = Math.cos(newTheta) * wheelRadius;
            const y = -1.0 * Math.sin(newTheta) * wheelRadius;

            return {
                ...slide,
                coords: { x, y },
                theta: newTheta * (index + numSlides / 4),
            };
        });

        setSlides(updated_slides);
    }, [center, wheelWidth]);

    return (
        <div className="container">
            <div ref={wheelRef} className="wheel">
                <div ref={centerPositionRef} className="center-position"></div>
                {slides &&
                    slides.map((slide, index) => (
                        <div
                            key={index}
                            className="card active"
                            style={{
                                top: center.x + slide.coords.x,
                                left: center.y + slide.coords.y,
                            }}
                        >
                            <img src={slide.image} />
                        </div>
                    ))}
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
                :root {
                    --easing: cubic-bezier(0.18, 0.89, 0.32, 1.27);
                    --duration: 0.5s;
                }

                .wheel {
                    width: 75vmin;
                    height: 75vmin;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform var(--duration) var(--easing);
                }

                .center-position {
                    width: 15vmin;
                    height: 15vmin;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .card {
                    width: 15vmin;
                    height: 15vmin;
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                    transition: transform var(--duration) var(--easing);
                    border: 0.3vmin solid white;
                }

                .card.active {
                    border-width: 1.3vmin;
                }

                .card img {
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
                    transition: transform var(--duration) var(--easing);
                }
            `}</style>
        </div>
    );
};

export default WheelCarousel;
