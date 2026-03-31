import { useParams, Link } from 'react-router-dom';
import styles from './BlogDetails.module.css';
import { motion } from 'framer-motion';

// Decorative assets
import storyLeft from '../../assets/blog-images/story-left.png';
import storyRight from '../../assets/blog-images/story-right.webp';
import blogImg1 from '../../assets/blog-images/blog-img-1.webp';

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
    image: blogImg1,
    text: "Discover the health benefits of choosing low-sodium natural mineral water. Vallechiara offers a balanced mineral profile that supports your wellness journey without compromising on the smooth, refined taste expected of a premium beverage."
  },
  'ministry-endorsed-distinction': {
    title: 'MINISTRY — ENDORSED DISTINCTION',
    image: blogImg1,
    text: "Vallechiara is proud to maintain the highest standards of quality, recognized and endorsed by leading health and quality ministries. This distinction represents our ongoing dedication to transparency, safety, and excellence in every bottle."
  }
};

export default function BlogDetails() {
  const { slug } = useParams();
  const content = blogContents[slug || ''] || blogContents['praised-by-connoisseurs'];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link to="/">Home</Link> | <span>{content.title}</span>
      </nav>

      <div className={styles.container}>
        {/* Left Column: Visuals */}
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={styles.visualContainer}>
             <img src={storyLeft} alt="" className={styles.sideDecorLeft} />
             <div className={styles.mainImageWrapper}>
                <img src={content.image} alt={content.title} className={styles.mainImage} />
             </div>
             <img src={storyRight} alt="" className={styles.sideDecorRight} />
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
