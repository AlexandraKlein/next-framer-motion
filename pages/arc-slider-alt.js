import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { motion } from 'framer-motion';

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

const Slide = ({ style, imgSrc }) => {
    return (
        <div className="person" style={style}>
            <img src={imgSrc} />
        </div>
    );
};

const slideWidth = 200;
const carouselWidth = (images.length - 1) * 2 * (slideWidth / 2);

function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(0);
    const [coordX, setCoordX] = useState(0);

    function onUpdate(latest) {
        setCoordX(latest.x);
    }

    useEffect(() => {
        setActive(Math.round(Math.abs(coordX - slideWidth) / slideWidth));
    }, [isDragging]);

    console.log({ active });
    return (
        <div className="App">
            <div className="container">
                <motion.div
                    drag={'x'}
                    onUpdate={onUpdate}
                    dragConstraints={{
                        right: active > 1 ? (active - 2) * -slideWidth : 0,
                        left:
                            active < images.length
                                ? active * -slideWidth
                                : -carouselWidth,
                    }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    dragTransition={{
                        bounceStiffness: 250,
                        bounceDamping: 20,
                        timeConstant: 300,
                        modifyTarget: target => {
                            return Math.round(target / slideWidth) * slideWidth;
                        },
                    }}
                >
                    <div className="persons-container">
                        {images.map((slide, index) => {
                            const degrees = 20;
                            const rotate = index * degrees;
                            return (
                                <Slide
                                    key={index}
                                    imgSrc={images[index]}
                                    style={{
                                        transform: `rotate(${
                                            coordX / 10 + rotate
                                        }deg)`,
                                    }}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default App;
