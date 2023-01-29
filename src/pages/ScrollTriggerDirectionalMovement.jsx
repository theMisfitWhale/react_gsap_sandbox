import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerDirectionalMovement = () => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: '.scroller',
    });

    gsap.utils.toArray('section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');
      const [xStart, xEnd] =
        index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-cream ">
      <Head>
        <title>ScrollTrigger Directional Movement</title>
      </Head>
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          Keep smiling
        </div>
      </section>
      {[1, 2, 3, 4].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`https://source.unsplash.com/featured/?cities&${el2}?sig&${el}`}
              />
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          because life is a beautiful thing
        </div>
      </section>
      {[1, 2, 3, 4].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`https://source.unsplash.com/featured/300×300/?cities&${el2}?sig&${el}`}
              />
            ))}
          </div>
        </section>
      ))}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          and there's so much to smile about.
        </div>
      </section>
      <footer className="flex items-center justify-center text-2xl my-96 ">
        <a href="https://unsplash.com/">
          All Images are from <span className="text-green">Unsplash</span>
        </a>
      </footer>
    </div>
  );
};

export default ScrollTriggerDirectionalMovement;
