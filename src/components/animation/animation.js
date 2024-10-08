'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './animation.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Animation() {
  const [leftValues, setLeftValues] = useState([]);
  const originalLeftValues = [0, 140, 280, 420, 560, 700, 840, 980, 1120, 1260];
  const baseWidth = 1536;
  const animationItemRefs = useRef([]);
  const mainAnimationItemContainerRef = useRef(null);
  const mainAnimationItemRef = useRef(null);

  const calculateLeftValues = (screenWidth) => {
    return originalLeftValues.map(value => (value / baseWidth) * screenWidth);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const proportionalLeftValues = calculateLeftValues(screenWidth);
    setLeftValues(proportionalLeftValues);
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const newLeftValues = calculateLeftValues(newScreenWidth);
      setLeftValues(newLeftValues);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (animationItemRefs.current.length > 9) {

      gsap.to(animationItemRefs.current[0], {
        x: -700,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[1], {
        x: -490,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[2], {
        x: -300,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[3], {
        x: -150,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2,
          pin: true,
          pinSpacing:false
        },
      });

      gsap.to(mainAnimationItemRef.current, {
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.mainAnimationItemContainer}`,
          scroller: "body",
          start: "top top",
          end: "top -400%",
          scrub: 2,
          pin: true,
          pinSpacing:false
        }
      })

      gsap.to(mainAnimationItemRef.current, {
        duration: 1,
        transform: "skewY(0)",
        width: '33vw',
        height: '70vh',
        x: "-26.4vw",
        y: -75,
        scrollTrigger: {
          trigger: mainAnimationItemRef.current,
          scroller: "body",
          start: "top -50%",
          end: "top -150%",
          scrub: 2
        }
      });

      gsap.to(mainAnimationItemRef.current, {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: mainAnimationItemRef.current,
          scroller: "body",
          start: "top -150%",
          end: "top -160%",
          scrub: 2
        }
      });

      gsap.to(animationItemRefs.current[5], {
        x: 150,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[6], {
        x: 300,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer1}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2,
          pin: true,
          pinSpacing:false
        },
      });

      gsap.to(animationItemRefs.current[7], {
        x: 490,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[8], {
        x: 700,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

      gsap.to(animationItemRefs.current[9], {
        x: 1000,
        duration: 2,
        scrollTrigger: {
          trigger: `.${styles.animationContainer}`,
          scroller: 'body',
          start: 'top top',
          end: 'top -50%',
          scrub: 2
        },
      });

    }
  }, [leftValues]);

  return (
    <>
      <div className={styles.animationContainer}>
        <div className={styles.animationTextContainer}>
          <span className={styles.animationTextHeading}>
            Distribute and manage insurance business in <span className={styles.highlightRed}>one platform</span>
          </span>
        </div>

        <div className={styles.animationItems} >
          {leftValues.slice(0, 5).map((leftValue, index) => (
            <div
              key={index}
              className={`${styles[`animationItem${index + 1}`]}`}
              style={{ left: `${leftValue}px` }}
              ref={(el) => (animationItemRefs.current[index] = el)}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.mainAnimationItemContainer} ref={mainAnimationItemContainerRef}>
        <div className={styles.mainAnimationItem} ref={mainAnimationItemRef} style={{ left: `${leftValues[4]}px` }}></div>
      </div>

      <div className={styles.animationContainer1}>
        <div className={styles.animationItems} >
          {leftValues.slice(5).map((leftValue, index) => (
            <div
              key={index}
              className={`${styles[`animationItem${index + 6}`]}`}
              style={{ left: `${leftValue}px` }}
              ref={(el) => (animationItemRefs.current[index + 5] = el)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Animation;
