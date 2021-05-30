import MotionSlider from '../components/MotionSlider';
import DrabbableSlider from '../components/DraggableSlider';
import styled from '@emotion/styled';
import cx from 'classnames';

const slides = [
    {
        headline: 'Lorem ipsum dolor sit amet',
        eyebrow: 'Cookies cremini mushrooms',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Elementum tempus egestas sed',
        eyebrow: 'Cool off lemon double dark chocolate',
        img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Pretium aenean pharetra magna ac placerat',
        eyebrow: 'Basil apples lingonberry sesame',
        img: 'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Aliquam vestibulum morbi blandit cursus',
        eyebrow: 'Broccoli Chinese five-spice powder',
        img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Eget mi proin sed libero enim',
        eyebrow: 'Refreshing cucumber splash tomato',
        img: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Lorem ipsum dolor sit amet',
        eyebrow: 'Cookies cremini mushrooms',
        img: 'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Elementum tempus egestas sed',
        eyebrow: 'Cool off lemon double dark chocolate',
        img: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Pretium aenean pharetra magna ac placerat',
        eyebrow: 'Basil apples lingonberry sesame',
        img: 'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Aliquam vestibulum morbi blandit cursus',
        eyebrow: 'Broccoli Chinese five-spice powder',
        img: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
        headline: 'Eget mi proin sed libero enim',
        eyebrow: 'Refreshing cucumber splash tomato',
        img: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
];

const MotionSliderPage = () => {
    return (
        <>
            <DrabbableSlider>
                {slides.map((slide, index) => ({ active }) => (
                    <Slide
                        key={index}
                        className={cx({ active: active === index })}
                    >
                        <img src={slide.img} />
                        <h6>{slide.eyebrow}</h6>
                        <h2>{slide.headline}</h2>
                    </Slide>
                ))}
            </DrabbableSlider>
            {/* <MotionSlider>
                {slides.map((slide, index) => ({ active }) => (
                    <Slide
                        key={index}
                        className={cx({ active: active === index })}
                    >
                        <img src={slide.img} />
                        <h6>{slide.eyebrow}</h6>
                        <h2>{slide.headline}</h2>
                    </Slide>
                ))}
            </MotionSlider> */}

            <Container>
                {slides.map(slide => (
                    <BlobContainer>
                        <Blob>
                            <img src={slide.img} />
                        </Blob>
                    </BlobContainer>
                ))}
            </Container>
        </>
    );
};

const Container = styled.section`
    margin: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BlobContainer = styled.div`
    position: relative;
    width: 18vw;
    height: 18vw;
    margin: 20px;

    &:before {
        content: '';
        position: absolute;
        left: -5%;
        bottom: -5%;
        width: 100%;
        height: 100%;
        background-color: cadetblue;
        border-radius: 63% 37% 42% 58% / 52% 59% 41% 48%;
        transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.27);
    }

    &:hover {
        &:before {
            border-radius: 62% 38% 55% 45% / 44% 48% 52% 56%;
        }
    }
`;

const Blob = styled.div`
    position: relative;
    border-radius: 51% 49% 56% 44% / 34% 46% 54% 66%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.27);
    user-select: none;

    &:hover {
        border-radius: 63% 37% 42% 58% / 52% 59% 41% 48%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
`;

const Slide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: cadetblue;
    padding: 2rem;
    margin: 20px;
    width: 250px;
    border-radius: 39% 36% 37% 37% / 38% 43% 34% 44%;
    transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.27);

    &:hover {
        border-radius: 39% 36% 37% 37% / 38% 43% 34% 44%;
    }

    &.active {
        background-color: lightcoral;
        border-radius: 44% 44% 57% 35% / 47% 62% 32% 49%;
        transition-delay: 0.25s;
    }

    img {
        width: 175px;
        height: 175px;
        object-fit: cover;
        border-radius: 50%;
    }

    h6 {
        text-transform: uppercase;
    }

    h2 {
        line-height: 1.2;
    }

    @media (min-width: 768px) {
        width: 400px;
    }
`;

export default MotionSliderPage;
