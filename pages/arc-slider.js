import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const images = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
];

const Slide = ({ style, imgSrc }) => {
    return (
        <animated.div className="person" style={style}>
            <img src={imgSrc} />
        </animated.div>
    );
};

const rotateDeg = 20;

function App() {
    const [{ x }, set] = useSpring(() => ({
        x: -400,
    }));

    const bind = useDrag(
        ({ movement: [x], velocity, down, direction: [dx], tap }) => {
            if (!down) {
                if (x < -700) {
                    set({ x: -800 });
                } else if (x < -500) {
                    set({ x: -600 });
                } else if (x < -300) {
                    set({ x: -400 });
                } else if (x < -100) {
                    set({ x: -200 });
                } else {
                    set({ x: 0 });
                }
                return;
            }

            set({ x });
        },
        {
            initial: () => [x.get(), 0],
            bounds: { left: -800, right: 0, top: 0, bottom: 476 },
            rubberband: true,
        }
    );

    return (
        <div className="App">
            <div className="container" {...bind()}>
                <div className="persons-container">
                    {images.map((slide, index) => {
                        return (
                            <Slide
                                key={index}
                                imgSrc={images[index]}
                                style={{
                                    transform: x.to(
                                        x =>
                                            `rotate(${
                                                x / 10 + index * rotateDeg
                                            }deg)`
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
