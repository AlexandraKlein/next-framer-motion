import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

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
        <animated.div className="person" style={style}>
            <img src={imgSrc} />
        </animated.div>
    );
};

const rotateDeg = 20;
const slideWidth = 200;
const carouselWidth = (images.length - 1) * 2 * (slideWidth / 2);

function App() {
    const [{ x }, set] = useSpring(() => ({
        x: -carouselWidth / 2,
    }));

    const bind = useDrag(
        ({ movement: [x], down }) => {
            if (!down) {
                images.forEach((slide, index) => {
                    const newX = -index * slideWidth;
                    if (x < newX + slideWidth / 2) {
                        set({ x: newX });
                        return;
                    }
                });
                return;
            }

            set({ x });
        },
        {
            initial: () => [x.get(), 0],
            bounds: { left: -carouselWidth, right: 0, top: 0, bottom: 0 },
            rubberband: true,
        }
    );

    return (
        <div className="App">
            <div className="container" {...bind()}>
                <div className="persons-container">
                    {images.map((slide, index) => {
                        const rotate = index * rotateDeg;
                        return (
                            <Slide
                                key={index}
                                imgSrc={images[index]}
                                style={{
                                    transform: x.to(
                                        x => `rotate(${x / 10 + rotate}deg)`
                                    ),
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;

// 10 : 20
// 20 : 10
// 30 : 6.666666
// 40 : 5
