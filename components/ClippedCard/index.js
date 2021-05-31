import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ClippedCard.module.scss';

const ClippedCard = ({ children, className, orientation }) => {
    const viewBoxWidth = 619;
    const viewBoxHeight = 659;

    const renderClipPath = () => {
        if (orientation === 'right') {
            return (
                <svg
                    width="0"
                    height="0"
                    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <clipPath
                        id="clippedRight"
                        clipPathUnits="objectBoundingBox"
                        transform={`scale(${1 / viewBoxWidth}, ${
                            1 / viewBoxHeight
                        })`}
                    >
                        <path d="M22.1929 137.987C37.0601 62.7628 53.7558 23.9221 119.794 11.7919C223.06 -7.1978 411.48 -0.0545559 491.432 22.1733C558.942 40.9405 591.936 66.4908 605.391 145.433C626.497 269.097 616.679 425.094 602.656 508.654C586.813 603.06 533.491 629.519 471.884 637.423C380.768 649.114 240.927 670.508 152.69 650.587C73.7999 632.792 38.4875 608.343 19.2924 545.565C-19.4695 418.746 10.1619 198.918 22.1929 137.987Z" />
                    </clipPath>
                </svg>
            );
        }

        return (
            <svg
                width="0"
                height="0"
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <clipPath
                    id="clippedLeft"
                    clipPathUnits="objectBoundingBox"
                    transform={`scale(${1 / viewBoxWidth},${
                        1 / viewBoxHeight
                    })`}
                >
                    <path d="M596.14 137.986C581.272 62.7622 564.577 23.9215 498.539 11.7913C395.273 -7.19841 206.853 -0.0551662 126.9 22.1727C59.3903 40.9399 26.3966 66.4901 12.9418 145.432C-8.1648 269.096 1.65369 425.093 15.6765 508.653C31.5193 603.059 84.841 629.518 146.449 637.423C237.565 649.114 377.405 670.507 465.642 650.587C544.533 632.791 579.845 608.342 599.04 545.564C637.802 418.745 608.171 198.918 596.14 137.986Z" />
                </clipPath>
            </svg>
        );
    };

    return (
        <div
            className={cx(styles.root, {
                [styles.left]: orientation === 'left',
                [styles.right]: orientation === 'right',
                [className]: className,
            })}
        >
            {renderClipPath()}
            {children}
        </div>
    );
};

ClippedCard.defaultProps = {
    orientation: 'left',
    className: null,
};

ClippedCard.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.oneOf(['left', 'right']).isRequired,
    className: PropTypes.string,
};

export default ClippedCard;
