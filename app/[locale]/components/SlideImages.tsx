"use client"
import { useTranslations } from 'next-intl';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  {
    url: 'images/slide-1.jpg',
    caption: 'slide1'
  },
  {
    url: 'images/slide-2.jpg',
    caption: 'slide2'
  },
  {
    url: 'images/slide-3.jpg',
    caption: 'slide3'
  }
];

const Slideshow = () => {
    const t = useTranslations('slideshow');

    return (
      <div className="slide-container">
        <Slide duration={5500} transitionDuration={500} arrows={false}>
         {slideImages.map((slideImage, index)=> (
            <div className='relative slide-image-wrapper' key={index}>
              <div className='slide-image' style={{'backgroundImage': `url(${slideImage.url})` }} />
                <span className='slide-captions'>{t(slideImage.caption)}</span>
            </div>
          ))}
        </Slide>
      </div>
    )
}

export default Slideshow;
