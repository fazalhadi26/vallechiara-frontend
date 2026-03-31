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

import { FiArrowUpRight } from 'react-icons/fi';

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
                    <FiArrowUpRight />
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
