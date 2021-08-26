import styles from "./BlogItem.module.css";
import { RiHeart3Fill, RiDiscussFill } from "react-icons/ri";

const BlogItem = ({ articles, search }) => {

  return (
    <section className={styles.article_container}>
      {articles.map((article) => (
        <article key={article.id} className={styles.article__card}>
          <div className={styles.article_top}>
            <h3 className={styles.article_top__title}>{article.title}</h3>
            <div className={styles.article_top__interactions}>
              {article.public_reactions_count}
              <RiHeart3Fill className={styles.article_top__heart} />
              {article.comments_count}
              <RiDiscussFill className={styles.article_top__comment} />
            </div>
          </div>
          <div className={styles.article_mid}>
            <span className={styles.article_mid__span}>
              {article.reading_time_minutes} minutes reading
            </span>
            <ul className={styles.article_mid_tags}>
              <button className={styles.article_mid_tags_tag}>
                {article.tags}
              </button>
            </ul>
          </div>
          <div className={styles.article_bot}>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default BlogItem;
