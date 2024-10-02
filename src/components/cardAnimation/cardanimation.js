'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './cardanimation.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Cardanimation() {
  const cardAnimationContainer = useRef(null);
  const cardAnimationIcon1Ref = useRef(null);
  const cardAnimationIcon2Ref = useRef(null);
  const animationLoremText = useRef(null);
  const [position, setPosition] = useState('absolute');
  const [topValue, setTopValue] = useState('2100px');


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2100 && scrollPosition < 2600) {
        setPosition('fixed');
        setTopValue("0px");
      } else if (scrollPosition >= 2400) {
        setPosition('absolute');
        setTopValue('2600px');
      } else {
        setPosition('absolute');
        setTopValue('2100px');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (cardAnimationContainer.current && cardAnimationIcon1Ref.current && cardAnimationIcon2Ref.current && animationLoremText.current) {
      gsap.to(cardAnimationIcon1Ref.current, {
        transform: "translateY(300px)",
        duration: 2,
        scrollTrigger: {
          trigger: cardAnimationContainer.current,
          scroller: "body",
          start: "top top",
          end: "top -50%",
          scrub: 2,
        }
      });

      gsap.to(cardAnimationIcon2Ref.current, {
        transform: "translateY(-550px)",
        duration: 2,
        scrollTrigger: {
          trigger: cardAnimationContainer.current,
          scroller: "body",
          start: "top top",
          end: "top -50%",
          scrub: 2,
        }
      });

      gsap.to(cardAnimationContainer.current, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: cardAnimationContainer.current,
          scroller: "body",
          start: "top 13%",
          end: "top 0%",
          scrub: 2,
        }
      });

      gsap.to(animationLoremText.current, {
        marginTop: "-400px",
        duration: 2,
        scrollTrigger: {
          trigger: cardAnimationContainer.current,
          scroller: "body",
          start: "top top",
          end: "top -50%",
          scrub: 2,
        }
      });

    }
  }, []);

  return (
    <div
      className={styles.cardAnimationContainer}
      style={{ position: position, top: topValue }}
      ref={cardAnimationContainer}
    >
      <div className={styles.cardAnimationContents}>
        <div className={styles.cardAnimationImage}></div>
        <div className={styles.animationFocusContainer}>
          <div className={styles.animationIcon1} ref={cardAnimationIcon1Ref}></div>
          <div className={styles.animationIcon2} ref={cardAnimationIcon2Ref}></div>
        </div>
      </div>
      <div className={styles.animationTextScrollEffect} style={{ position: position }} >
        <div className={styles.loremText} ref={animationLoremText} >
          Distribute and manage insurance business <span className={styles.highlightRed}>in one platform</span>
          <p className={styles.loremSubText}>Manage your insurance business seamlessly using Riskcovry&apos;s assurance platform. Increase revenue, expand product offerings.</p><button className={styles.CTAButton}>Schedule Demo</button>
          Lorem, ipsum dolor sit amet consectetur adipisici<span className={styles.highlightRed}>in one platform</span>
          <p className={styles.loremSubText}>Manage your insurance business seamlessly using Riskcovry&apos;s  assurance platform. Increase revenue, expand product offerings.</p><button className={styles.CTAButton}>Schedule Demo</button>
        </div>
      </div>
    </div>
  );
}

export default Cardanimation;
