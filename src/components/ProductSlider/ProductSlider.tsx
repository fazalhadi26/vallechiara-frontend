import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ProductSlider.module.css';
import bottleImg from '../../assets/bootle1.png';

const products = [
  {
    id: 1,
    name: 'V WATER 330 ML',
    description: "Embrace nature's pure hydration with our 330 ml bottles — the perfect choice for the workplace, events, or home use. Experience revitalization in every sip, wherever you are.",
    image: bottleImg,
  },
  {
    id: 2,
    name: 'V WATER 500 ML',
    description: "Perfect for active lifestyles, our 500 ml bottle offers pure hydration on the go. Sustainably crafted for you to enjoy Vallechiara's pristine water anywhere.",
    image: bottleImg,
  },
  {
    id: 3,
    name: 'V WATER 1 LITER',
    description: "Bring the purity of Vallechiara to your family table. Our 1 liter bottle ensures everyone stays hydrated beautifully with an elegant presentation.",
    image: bottleImg,
  },
  {
    id: 4,  // Duplicated to satisfy Swiper's loop mode requirements for 3 slides per view
    name: 'V WATER 330 ML',
    description: "Embrace nature's pure hydration with our 330 ml bottles — the perfect choice for the workplace, events, or home use. Experience revitalization in every sip, wherever you are.",
    image: bottleImg,
  },
  {
    id: 5,
    name: 'V WATER 500 ML',
    description: "Perfect for active lifestyles, our 500 ml bottle offers pure hydration on the go. Sustainably crafted for you to enjoy Vallechiara's pristine water anywhere.",
    image: bottleImg,
  },
  {
    id: 6,
    name: 'V WATER 1 LITER',
    description: "Bring the purity of Vallechiara to your family table. Our 1 liter bottle ensures everyone stays hydrated beautifully with an elegant presentation.",
    image: bottleImg,
  }
];

// Helper to calculate progress modulo original 3 items
const originalLength = 3;

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.sliderSection}>
      <div className={styles.header}>
        <span className={styles.headerText}>FEATURED</span>
        <span className={styles.dot}></span>
        <span className={styles.headerText}>PRODUCTS</span>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          speed={600}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          className={styles.swiperWrapper}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className={styles.swiperSlide}>
              <div className={styles.slide}>
                <div className={styles.bottleWrapper}>
                  <img src={product.image} alt={product.name} className={styles.bottleImg} />
                </div>

                <div className={styles.slideContent}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                  <button className={styles.shopBtn}>SHOP NOW</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation strictly inside Swiper to guarantee Navigation Module bindings */}
          <button className={`custom-prev ${styles.navBtn} ${styles.prevBtn}`}>PREV</button>
          <button className={`custom-next ${styles.navBtn} ${styles.nextBtn}`}>NEXT</button>
        </Swiper>
      </div>

      {/* Recreating exactly the design's specific progress bar mapped to the 3 unique items explicitly */}
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBarBg}>
          <div 
            className={styles.progressBarFill} 
            style={{ width: `${(((activeIndex % originalLength) + 1) / originalLength) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
