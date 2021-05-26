import MotionSlider from '../components/MotionSlider';
import styled from '@emotion/styled';
import cx from 'classnames';

const slides = [
    {
        headline: 'Lorem ipsum dolor sit amet',
        eyebrow: 'Cookies cremini mushrooms',
    },
    {
        headline: 'Elementum tempus egestas sed',
        eyebrow: 'Cool off lemon double dark chocolate',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Pretium aenean pharetra magna ac placerat',
        eyebrow: 'Basil apples lingonberry sesame',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Aliquam vestibulum morbi blandit cursus',
        eyebrow: 'Broccoli Chinese five-spice powder',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Eget mi proin sed libero enim',
        eyebrow: 'Refreshing cucumber splash tomato',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Lorem ipsum dolor sit amet',
        eyebrow: 'Cookies cremini mushrooms',
    },
    {
        headline: 'Elementum tempus egestas sed',
        eyebrow: 'Cool off lemon double dark chocolate',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Pretium aenean pharetra magna ac placerat',
        eyebrow: 'Basil apples lingonberry sesame',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Aliquam vestibulum morbi blandit cursus',
        eyebrow: 'Broccoli Chinese five-spice powder',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
    {
        headline: 'Eget mi proin sed libero enim',
        eyebrow: 'Refreshing cucumber splash tomato',
        id: '2dge12WPVFh1fUUUGFyOnU',
    },
];

const MotionSliderPage = () => {
    return (
        <MotionSlider>
            {slides.map((slide, index) => props => (
                <Slide
                    key={index}
                    className={cx({ active: props.active === index })}
                >
                    <h6>{slide.eyebrow}</h6>
                    <h2>{slide.headline}</h2>
                </Slide>
            ))}
        </MotionSlider>
    );
};

const Slide = styled.div`
    flex: 1;
    background-color: cadetblue;
    padding: 2rem;
    transition: background-color 0.2s ease-out;

    &.active {
        background-color: lightcoral;
    }

    h6 {
        text-transform: uppercase;
    }

    h2 {
        line-height: 1.2;
    }
`;

export default MotionSliderPage;
