import React from 'react';
import { useCarousel } from '../hooks/useCarousel';
import styled from '@emotion/styled';

const Carousel = ({
    children,
    interval,
    transitionTime,
    hasControls = true,
}) => {
    const slides = React.Children.toArray(children);
    const length = slides.length;

    const [active, setActive, handlers, style] = useCarousel(
        length,
        interval,
        transitionTime
    );

    const handleSetActive = index => () => {
        setActive(index);
    };

    return (
        <Root>
            <Container>
                <Content {...handlers} style={style}>
                    {/* Clone Behind */}
                    <Slide>{slides[length - 1]}</Slide>
                    {slides.map((slide, index) => (
                        <Slide key={index}>{slide}</Slide>
                    ))}
                    {/* Clone Ahead */}
                    <Slide>{slides[0]}</Slide>
                </Content>
                {hasControls && (
                    <ArrowsContainer>
                        <Arrow
                            onClick={handleSetActive(
                                (active - 1 + length) % length
                            )}
                        >
                            <span>&larr;</span>
                        </Arrow>
                        <Counter>{`0${active + 1}/0${length}`}</Counter>
                        <Arrow onClick={handleSetActive((active + 1) % length)}>
                            <span>&rarr;</span>
                        </Arrow>
                    </ArrowsContainer>
                )}
            </Container>
        </Root>
    );
};

export default Carousel;

const Root = styled.div`
    width: 300px;
    margin: 40px auto;
`;

const Container = styled.div`
    text-align: center;
    position: relative;
    // overflow: hidden;
    -webkit-backface-visibility: hidden;
    cursor: grab;
    width: 100%;

    &:active {
        cursor: grabbing;
    }
`;

const Content = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
`;

const Slide = styled.div`
    width: 100%;

    img {
        pointer-events: none;
    }
`;

const ArrowsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    position: relative;
    display: inline-flex;
    width: 90px;
    height: 50px;
`;

const Arrow = styled.div`
    font-size: 20px;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;

const Counter = styled.span`
    font-size: 14px;
`;
