import Carousel from '../components/carousel';
import styled from '@emotion/styled';

const CarouselPage = () => {
    return (
        <Container>
            <Carousel interval={null}>
                <div className="text-container">
                    <h1>Slide 1</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 2</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 3</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 4</h1>
                </div>
                <div className="text-container">
                    <h1>Slide 5</h1>
                </div>
            </Carousel>
        </Container>
    );
};

export default CarouselPage;

const Container = styled.div`
    width: 80%;
    margin: auto;
    overflow: hidden;
`;
