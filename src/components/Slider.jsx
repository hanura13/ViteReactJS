import React, { useEffect, useState } from 'react'
import styles from '../style'
import { ChevronRightIcon, ChevronLeftIcon, RxDotFilled } from '../assets'
import { slide } from '../constants'


const Slider = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slide.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [prevSlide])

    return (
        <section id='slider' className={`${styles.padding} max-w-[2200px] h-[580px] w-full m-auto group`}>
            <div style={{ backgroundImage: `url(${slide[currentIndex].icon})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 transition-transform ease-out'>

            </div>

            <div onClick={prevSlide} className={`${styles.arrowChevron} hidden group-hover:block`}>
                <ChevronLeftIcon sx={{ fontSize: 30 }} />
            </div>
            <div onClick={nextSlide} className={`${styles.arrowChevron} md:right-6 right-0 md:mr-10 mr-6 sm:right-6 sm:mr-10 hidden group-hover:block`}>
                <ChevronRightIcon sx={{ fontSize: 30 }} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slide.map((slides, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='md:text-2xl text-lg cursor-pointer '>
                        <RxDotFilled className={`hover:text-gray-500 transition-all ${currentIndex === slideIndex ? 'p-1 text-gray-500' : 'bg-opacity-50'}`} />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Slider