import React, {useRef, useState, useEffect} from 'react';
import imageArray from "./imageArray";
import resume from "../resume/oses-cv.pdf";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { useParallax } from 'react-scroll-parallax';


const Carousel = () => {
    const [carouselState, setCarouselState] = useState(false);
    const [carouselBack, setCarouselBack] = useState(0);
    const carouselref = useRef();
    const thumbnailref = useRef();
     const itemArray = imageArray;

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 7000;
// let caruNext = setTimeout(() => {
//     nextImage();
// }, timeAutoNext);

let callx = setTimeout(() => {
    setCarouselBack(carouselBack + 1);
}, 7000);

    useEffect(() => {
        
        
        callx;
        nextImage()
        
        }, [carouselBack] )

     const nextImage = () => {
    //    setCarouselState(true);
let carouselDom = document.querySelector('carousel');
let SliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = document.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
console.log(SliderDom);

        let  SliderItemsDom = document.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        console.log(SliderItemsDom);
        
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        // carouselDom.classList.add('next');
        setCarouselState(true)

        // clearTimeout(runTimeOut);
        // runTimeOut = setTimeout(() => {
        //     setCarouselState(false);
        //     // carouselDom.classList.remove('next');
        // }, timeRunning);

        // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
    } 

    function prevImage() {
        setCarouselState(false)
let carouselDom = document.querySelector('carousel')
let SliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = document.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
console.log(SliderDom);
        
        let  SliderItemsDom = document.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        console.log(SliderItemsDom);

        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
        

        // clearTimeout(runTimeOut);
        // runTimeOut = setTimeout(() => {
        //     carouselDom.classList.remove('next');
        //     carouselDom.classList.remove('prev');
        // }, timeRunning);
    }
    

return (
    <div className={`carousel md:w-screen  }`} ref={carouselref}>
        <div className={`list ${carouselState ?'next' : 'prev' }`} >
            
            {
                imageArray.map( (items, index) => (
                    <div className='item' key={index}>
                    <img src={items.imageUrl} alt='coral' />
                    <div className='content'> 
                    <div className='firstname'> <span> {items.title} </span> 
                     {items.firstName}
                    </div>
                    <div className='lastname'> {items.lastName} </div>
                    <div className='work'>{items.work}</div>
                    <div className='quote'> {items.quote} </div>
                    <div className='buttons'> <a href={resume} target="_blank" rel="noopener noreferrer"
                     download="oses resume">
          <button tabIndex={0} type='button' className='button px-2'>
          Resume
          </button>
          </a>

          </div>
          </div>
                    </div>
                )
                )
            }
           
        </div>
        <div className={`thumbnail ${carouselState ?'next' : 'prev' }`} ref={thumbnailref}>
                  { imageArray.map((items, index) => (
                 
                        <div key={index} className='item'>
                            <img src={items.imageUrl} alt="" />
                            <div class="content">
                    <div class="title">
                        {items.imageName}
                    </div>
                    <div class="description">
                        {items.description}
                    </div>
                </div>

                        </div>
                    ))
                }
            </div>
          

<div class="arrows">
    <button id="prev" onClick={prevImage}> 
        <HiChevronLeft />
        </button>
    <button id="next" onClick={nextImage} > 
        <HiChevronRight />
    </button>
</div>

<div class={`time ${carouselState ?'next' : 'prev' }`}></div>
        
    </div>
  )
}

export default Carousel