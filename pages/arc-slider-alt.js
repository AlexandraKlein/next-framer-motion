import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

const slideWidth = 200;
const carouselWidth = (slides.length - 1) * 2 * (slideWidth / 2);

function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(0);
    const [coordX, setCoordX] = useState(0);

    useEffect(() => {
        setActive(Math.round(Math.abs(coordX - slideWidth) / slideWidth));
    }, [isDragging]);

    const onUpdate = latest => {
        setCoordX(latest.x);
    };

    return (
        <div className="root">
            <div className="carousel-container">
                <motion.div
                    drag={'x'}
                    onUpdate={onUpdate}
                    dragElastic={0}
                    dragConstraints={{
                        right: active > 1 ? (active - 2) * -slideWidth : 0,
                        left:
                            active < slides.length
                                ? active * -slideWidth
                                : -carouselWidth,
                    }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    dragTransition={{
                        power: 0.2,
                        timeConstant: 200,
                        modifyTarget: target => {
                            return Math.round(target / slideWidth) * slideWidth;
                        },
                    }}
                >
                    <div className="slides-container">
                        {slides.map((slide, index) => {
                            const transformOriginY = 1000;
                            const degrees = 20;
                            const rotate = index * degrees;
                            const isActive = active - 1 === index;
                            return (
                                <motion.div
                                    key={index}
                                    className="slide"
                                    animate={{
                                        rotate: coordX / 10 + rotate,
                                        transformOrigin: `50% ${transformOriginY}px`,
                                    }}
                                >
                                    <img src={slides[index]} />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default App;
