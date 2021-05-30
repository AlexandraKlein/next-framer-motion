import React, { useState, useRef, useEffect, forwardRef } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import { useDrag } from "react-use-gesture";

const slides = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
];

const Slide = forwardRef(({ style, imgSrc, isActive }, ref) => {
  return (
    <animated.div
      ref={ref}
      className={`slide ${isActive ? "active" : ""}`}
      style={style}
    >
      <img src={imgSrc} />
    </animated.div>
  );
});

function App() {
  const [slideRef, { width: slideWidth }] = useMeasure();
  const [active, setActive] = useState(Math.round(slides.length / 2));

  const carouselWidth = (slides.length - 1) * 2 * (slideWidth / 2);

  const diameter = 1600;
  const degrees = 15;

  const [{ x }, api] = useSpring(() => ({
    x: 0,
  }));

  useEffect(() => {
    api.set({ x: -slideWidth * active });
  }, [slideWidth]);

  const bind = useDrag(
    ({ movement: [x], down }) => {
      if (!down) {
        slides.forEach((slide, index) => {
          const newX = -index * slideWidth;
          if (x < newX + slideWidth / 2) {
            setActive(index);
            api.start({ x: newX });
            return;
          }
        });
        return;
      }

      api.start({ x });
    },
    {
      initial: () => [x.get(), 0],
      bounds: { left: -carouselWidth, right: 0, top: 0, bottom: 0 },
      rubberband: true,
    }
  );

  return (
    <div className="root">
      <div className="carousel-container" {...bind()}>
        <div className="slides-container">
          {slides.map((slide, index) => {
            const isActive = active === index;
            const rotate = index * degrees;
            const divider = (slideWidth / degrees) * 1;

            return (
              <Slide
                ref={slideRef}
                key={index}
                isActive={isActive}
                imgSrc={slides[index]}
                style={{
                  transformOrigin: `50% ${diameter}px`,
                  transform: x.to((x) => `rotate(${x / divider + rotate}deg)`),
                }}
              />
            );
          })}
        </div>
        <div className="slides-container dupe">
          {slides.reverse().map((slide, index) => {
            const isActive = active === index;
            const rotate = index * degrees;
            const divider = (slideWidth / degrees) * 1;

            return (
              <Slide
                ref={slideRef}
                key={index}
                isActive={isActive}
                imgSrc={slides[index]}
                style={{
                  transformOrigin: `50% ${diameter * 0.775}px`,
                  transform: x.to((x) => `rotate(${-x / divider - rotate}deg)`),
                }}
              />
            );
          })}
        </div>
        {/* <div className="nav-dots">
                    {slides.map((_, index) => (
                        <div
                            className={active === index ? 'active' : ''}
                            key={index}
                        />
                    ))}
                </div> */}
      </div>
    </div>
  );
}

export default App;
// 1  : 180
// 3  : 66.666
// 5  : 40
// 10 : 20
// 20 : 10
// 30 : 6.666666
// 40 : 5
// 50 : 4
// 60 : 3.333333
