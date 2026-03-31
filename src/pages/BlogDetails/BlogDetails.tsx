import { useParams, Link } from 'react-router-dom';
import styles from './BlogDetails.module.css';
import { motion } from 'framer-motion';

// Decorative assets
import storyLeft from '../../assets/blog-images/story-left.png';
import storyRight from '../../assets/blog-images/story-right.webp';
import blogImg1 from '../../assets/blog-images/blog-img-1.webp';
import blogImg3 from '../../assets/blog-images/blog-img-3.webp';
import blogImg4 from '../../assets/blog-images/blog-img-4.webp';

interface BlogContent {
  title: string;
  image: string;
  text: string;
}

const blogContents: Record<string, BlogContent> = {
  'praised-by-connoisseurs': {
    title: 'PRAISED BY CONNOISSEURS',
    image: blogImg1,
    text: "Vallechiara's excellence was celebrated in 'Gambero Rosso' magazine and held a revered place in the esteemed Mineral Water Chart by the Associazione Degustatori Acqua Minerali (Association of Mineral Water Tasters), reflecting Vallechiara's water elite and fine quality, and emphasizing its unwavering commitment to providing the finest natural mineral water in its purest form."
  },
  'inside-the-source': {
    title: 'INSIDE THE SOURCE',
    image: blogImg1,
    text: "Our journey begins deep within the Italian Alps, where nature's filtration process has been perfected over centuries. Discover the heart of Vallechiara and the environmental stewardship that keeps our source pristine for generations to come."
  },
  'savoring-the-low-sodium-advantage': {
    title: 'SAVORING THE LOW SODIUM ADVANTAGE',
    image: blogImg3,
    text: "With only 3.4 mg/L of sodium, Vallechiara is naturally suited for balanced living, ideal for those seeking lighter hydration without compromising on taste. Its delicate mineral profile supports heart health, makes it gentle for young children, and enhances every culinary experience with pure, refreshing clarity."
  },
  'ministry-endorsed-distinction': {
    title: 'MINISTRY — ENDORSED DISTINCTION',
    image: blogImg4,
    text: "Vallechiara proudly bears recognition from Italy's esteemed Ministry of Health, earning the distinguished decree 3860 of 15/12/08. This prestigious acknowledgment designates our water as the epitome of mineral water excellence, recommended for infant feeding and food preparation, a testament to purity, health, and the embodiment of nature's finest essence."
  }
};

import { useState } from 'react';

export default function BlogDetails() {
  const { slug } = useParams();
  const content = blogContents[slug || ''] || blogContents['praised-by-connoisseurs'];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
    const y = (clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link to="/">Home</Link> | <span className={styles.breadcrumbsTitle}>{content.title}</span>
      </nav>

      <div className={styles.container}>
        {/* Left Column: Visuals */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div 
            className={styles.visualContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={storyLeft} 
              alt="" 
              className={styles.sideDecorLeft} 
              style={{
                transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)`
              }}
            />
            <div className={styles.mainImageWrapper}>
              <img src={content.image} alt={content.title} className={styles.mainImage} />
            </div>
            <img 
              src={storyRight} 
              alt="" 
              className={styles.sideDecorRight} 
              style={{
                transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -20}px)`
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          className={styles.contentColumn}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.description}>{content.text}</p>
        </motion.div>
      </div>
    </div>
  );
}
