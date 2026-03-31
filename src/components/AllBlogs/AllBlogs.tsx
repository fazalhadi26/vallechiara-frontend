import { motion } from 'framer-motion';
import styles from './AllBlogs.module.css';
import { useNavigate } from 'react-router-dom';

// Import blog assets
import blog1 from '../../assets/blog-images/blog-1.jpeg';
import blog2 from '../../assets/blog-images/blog-2.jpeg';
import blog3 from '../../assets/blog-images/blog-3.jpeg';
import blog4 from '../../assets/blog-images/blog-4.jpeg';

interface Blog {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const blogData: Blog[] = [
  {
    id: 1,
    title: 'PRAISED BY CONNOISSEURS',
    image: blog1,
    slug: 'praised-by-connoisseurs',
  },
  {
    id: 2,
    title: 'INSIDE THE SOURCE',
    image: blog2,
    slug: 'inside-the-source',
  },
  {
    id: 3,
    title: 'SAVORING THE LOW SODIUM ADVANTAGE',
    image: blog3,
    slug: 'savoring-the-low-sodium-advantage',
  },
  {
    id: 4,
    title: 'MINISTRY — ENDORSED DISTINCTION',
    image: blog4,
    slug: 'ministry-endorsed-distinction',
  },
];

export default function AllBlogs() {
  const navigate = useNavigate();

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogGrid}>
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] } 
              }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => navigate(`/blog/${blog.slug}`)}
            >
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                <div className={styles.imageOverlay}>
                  <div className={styles.iconCircle}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3556 39.7864L35.7778 22.3641V31.5778H38.8889V17.1111H24.4222V20.2222H33.5581L16.2136 37.5667L18.3556 39.7864ZM28.0104 56C24.1385 56 20.4982 55.2653 17.0896 53.7959C13.6811 52.3264 10.716 50.3321 8.19459 47.813C5.67319 45.294 3.67707 42.3317 2.20624 38.9264C0.735415 35.521 0 31.8823 0 28.0104C0 24.1385 0.734715 20.4982 2.20414 17.0896C3.67363 13.6811 5.6679 10.716 8.18697 8.19459C10.706 5.67319 13.6683 3.67708 17.0736 2.20625C20.479 0.735417 24.1177 0 27.9896 0C31.8615 0 35.5018 0.734714 38.9104 2.20414C42.3189 3.67363 45.284 5.6679 47.8054 8.18697C50.3268 10.706 52.3229 13.6683 53.7938 17.0736C55.2646 20.479 56 24.1177 56 27.9896C56 31.8615 55.2653 35.5018 53.7938 38.9104C52.3264 42.3189 50.3321 45.284 47.813 47.8054C45.294 50.3268 42.3317 52.3229 38.9264 53.7938C35.521 55.2646 31.8823 56 28.0104 56Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
