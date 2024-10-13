import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Wrap bgImage={backgroundImg}>
      <CSSTransition in={inProp} timeout={1000} classNames="fade">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </CSSTransition>
      
      <Buttons>
        <CSSTransition in={inProp} timeout={1000} classNames="fade">
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </CSSTransition>
        <DownArrow src={"/images/down-arrow.svg"} />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  
  &.fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1000ms, transform 1000ms;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  &.fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1000ms, transform 1000ms;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;