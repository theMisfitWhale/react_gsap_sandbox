import React, { useEffect } from 'react';
import { Noto_Serif_Display } from '@next/font/google';

const noto = Noto_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function InfiniteScroll() {
  useEffect(() => {
    let scrollHeight = 0,
      scrollPos = 0,
      clonesHeight = 0,
      disableScroll = false,
      clones = [];
    const context = document.querySelector('.loop');
    const items = document.querySelectorAll('.loop_item');
    Array.from(items, (item) => {
      const clone = item.cloneNode(true);
      context.appendChild(clone);
      clone.classList.add('clone_item');
    });

    const getScrollPos = () => {
      return (
        (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
      );
    };

    const setScrollPos = (pos) => {
      context.scrollTop = pos;
    };

    const getClonesHeight = () => {
      clonesHeight = 0;
      Array.from(clones, (clone) => {
        clonesHeight = clonesHeight + clone.offsetHeight;
      });
      return clonesHeight;
    };

    const reCalc = () => {
      scrollPos = getScrollPos();
      scrollHeight = context.scrollHeight;
      clonesHeight = getClonesHeight();

      if (scrollPos <= 0) {
        setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
      }
    };

    const scrollUpdate = () => {
      if (!disableScroll) {
        scrollPos = getScrollPos();

        if (clonesHeight + scrollPos >= scrollHeight) {
          if (clonesHeight)
            // Scroll to the top when you’ve reached the bottom
            setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
          disableScroll = true;
        } else if (scrollPos <= 0) {
          // Scroll to the bottom when you reach the top
          setScrollPos(scrollHeight - clonesHeight);
          disableScroll = true;
        }
      }
      if (disableScroll) {
        // Disable scroll-jumping for a short time to avoid flickering
        window.setTimeout(function () {
          disableScroll = false;
        }, 40);
      }
    };

    clones = context.querySelectorAll('.clone_item');
    reCalc();

    context.addEventListener(
      'scroll',
      () => {
        window.requestAnimationFrame(scrollUpdate);
      },
      false
    );
    window.addEventListener(
      'resize',
      function () {
        window.requestAnimationFrame(reCalc);
      },
      false
    );
    return () => {
      context.removeEventListener(
        'scroll',
        () => {
          window.requestAnimationFrame(scrollUpdate);
        },
        false
      );
      window.removeEventListener(
        'resize',
        function () {
          window.requestAnimationFrame(reCalc);
        },
        false
      );
    };
  }, []);

  const menuItem = [
    { id: 1, name: 'Athens, Greece' },
    { id: 2, name: 'Beijing, China' },
    { id: 3, name: 'Jaipur, Rajasthan, India' },
    { id: 4, name: 'Bergen, Norway' },
    { id: 5, name: 'Marrakesh, Morocco' },
    { id: 6, name: 'Dublin, Ireland' },
    { id: 7, name: 'Cartagena, Colombia' },
    { id: 8, name: 'Bangkok, Thailand' },
    { id: 9, name: 'San Sebastian, Spain' },
    { id: 10, name: 'Dubrovnik, Croatia' },
    { id: 11, name: 'Seoul, South Korea' },
    { id: 12, name: 'San Miguel de Allende, Mexico' },
    { id: 13, name: 'Queenstown, New Zealand' },
    { id: 14, name: 'Hanoi, Vietnam' },
  ];

  return (
    <div
      className={`${noto.className} bg-greenish no-scrollbar  pr-96  loop  w-screen h-screen relative overflow-auto  flex flex-col items-end text-right select-none `}
    >
      {menuItem.map((el) => (
        <div
          key={el.id}
          className="loop_item relative p-2 mr-16 flex transition-transform  hover:translate-x-4 hover:italic hover:text-green"
        >
          <a className=" text-[2vh] cursor-pointer relative p-2 block ">
            ({el.id})
          </a>
          <a className=" text-[7vh] cursor-pointer relative  block ">
            {el.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;
