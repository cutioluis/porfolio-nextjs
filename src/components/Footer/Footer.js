import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Follow me on my <a href="">GitHub</a> and contact me on my <a href="">Linkedin</a></p>
        </footer>
    );
};

export default Footer;