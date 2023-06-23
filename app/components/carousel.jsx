import React, { useEffect, useState } from 'react';
import Image from "next/image";
// import { Carousel } from "flowbite-react"

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };
  return (
    <React.StrictMode>
   
   <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 4</div>
        <img src="/images/puttingOnShoes.jpg" className="w-full" alt="Nature" />
        <div className="text">Caption one</div>
      </div>

      {/* <div className="mySlides fade">
        <div className="numbertext">2 / 4</div>
        <img src="/images/gray-shoe.jpg" className="w-full" alt="Mountains" />
        <div className="text">Caption two</div>
      </div> */}

      <div className="mySlides fade">
        <div className="numbertext">3 / 4</div>
        <img src="/images/puttingOnShoes.jpg" className="w-full" alt="Snow" />
        <div className="text">Caption three</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">4 / 4</div>
        <img src="/images/gray-shoe.jpg" className="w-full" alt="Mountains" />
        <div className="text">Caption four</div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>

      <div className="flex justify-center mt-4">
        <span className="dot cursor-pointer" onClick={() => currentSlide(1)}>1</span>
        <span className="dot cursor-pointer" onClick={() => currentSlide(2)}>2</span>
        <span className="dot cursor-pointer" onClick={() => currentSlide(3)}>3</span>
      </div>
    </div>
    </React.StrictMode>
  );
};
export default Carousel;
