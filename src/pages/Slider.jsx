import React, { useState, useRef, useLayoutEffect } from "react";
import "../styles/Slider.css";

const Slide = React.forwardRef((props, ref) =>
  React.Children.map(props.children, (child) => (
    <div className="simple-slide" ref={ref}>
      {child}
    </div>
  ))
);

export function Slider(props) {
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const slideRef = useRef(null);
  const wrapperRef = useRef(null);
  const slideWindowRef = useRef(null);

  useLayoutEffect(() => {
    if (slideRef.current) {
      const rect = slideRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setSlideCount(props.children.length);
      if (slideWindowRef.current) {
        slideWindowRef.current.style.width = rect.width + "px";
      }
    }
  }, [slideRef, offset, props]);

  const { leftCallback = () => {}, rightCallback = () => {} } = props;

  const leftClick = (e) => {
    e.preventDefault();
    let currentRight = wrapperRef.current
      ? parseInt(wrapperRef.current.style.right || 0, 10)
      : 0;
    if (currentRight === 0) return false;
    const newOffset = currentRight - width;
    if (wrapperRef.current) {
      wrapperRef.current.style.right = newOffset + "px";
    }
    setOffset(newOffset);
    leftCallback();
  };

  const rightClick = (e) => {
    e.preventDefault();
    let currentRight = wrapperRef.current
      ? parseInt(wrapperRef.current.style.right || 0, 10)
      : 0;
    if (currentRight === (slideCount - 1) * width) return false;

    const newOffset = offset + width;
    if (wrapperRef.current) {
      wrapperRef.current.style.right = newOffset + "px";
    }
    setOffset(newOffset);
    rightCallback();
  };

  return (
    <div className="main-slider">
      <button onClick={leftClick}>Left</button>
      <div className="slide-window" ref={slideWindowRef}>
        <div className="slide-wrapper" ref={wrapperRef}>
          <Slide ref={slideRef}>{props.children}</Slide>
        </div>
      </div>
      <button onClick={rightClick}>Right</button>
    </div>
  );
}
