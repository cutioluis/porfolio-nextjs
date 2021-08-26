import styles from "./BlogSearch.module.css";

const BlogSearch = () => {
  return (
    <nav className={styles.article__search}>
      <h1>Featured Articles</h1>
      <input
        className={styles.article__input}
        type="text"
        placeholder="Search a article"
      />
    </nav>
  );
};

export default BlogSearch;
