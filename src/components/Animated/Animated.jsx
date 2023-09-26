import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';

export function Animated(props) {
  
    const [showCard, setShowCard] = useState(false);
  
    const cardAnimation = useSpring({
      opacity: showCard ? 1 : 0,  
      transform: showCard ? 'translateY(0)' : 'translateY(200px)',  
    });
  
    const handleScroll = () => {
      if (window.scrollY > props.scroll) {
        setTimeout(() => {
          setShowCard(true);
        }, props.delay);
      } else {
        setShowCard(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <animated.div style={cardAnimation} className={props.class}>
        {props.children}
      </animated.div>
    );
  }
  export function NavAnimated(props) {
  
    const [showCard, setShowCard] = useState(false);
  
    const cardAnimation = useSpring({
      opacity: showCard ? 1 : 1,  
      backgroundColor: showCard? '#00000049':'#00000010',  
    });
  
    const handleScroll = () => {
      if (window.scrollY > props.scroll) {
        setTimeout(() => {
          setShowCard(true);
        }, props.delay);
      } else {
        setShowCard(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <animated.div style={cardAnimation} className={props.class}>
        {props.children}
      </animated.div>
    );
  }
  export function AnimatedNoneScroll(props) {
  
  const [showCard, setShowCard] = useState(false);

  const cardAnimation = useSpring({
    opacity: showCard ? 1 : 0,  
    // transform: showCard ? 'translateY(0)' : 'translateY(200px)',
    transition:'.5s'
  });

  React.useEffect(() => {
      setTimeout(() => {
        setShowCard(true);
      }, props.delay);
    
  }, []);

  return (
    <animated.div style={cardAnimation} className={props.class}>
      {props.children}
    </animated.div>
  );
}

export function AnimatedNoneScrollLeft(props) {
  
  const [showCard, setShowCard] = useState(false);

  const cardAnimation = useSpring({
    opacity: showCard ? 1 : 0,  
    transform: showCard ? 'translateX(0)' : 'translateX(-100px)',  
    transition:'.5s',
  });

  React.useEffect(() => {
      setTimeout(() => {
        setShowCard(true);
      }, props.delay);
    
  }, []);

  return (
    <animated.div style={cardAnimation} className={props.class}>
      {props.children}
    </animated.div>
  );
}
export function AnimatedNoneScrollRight(props) {
  
  const [showCard, setShowCard] = useState(false);

  const cardAnimation = useSpring({
    opacity: showCard ? 1 : 0,  
    transform: showCard ? 'translateX(0)' : 'translateX(50px)',  
  });

  React.useEffect(() => {
      setTimeout(() => {
        setShowCard(true);
      }, props.delay);
    
  }, []);

  return (
    <animated.div style={cardAnimation} className={props.class}>
      {props.children}
    </animated.div>
  );
}
