import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cols}>
        <div>
          <div className={styles.brand}>
            HAVILAH
            <em>Building dreams, shaping communities</em>
          </div>
        </div>
        <div className={styles.col}>
          <b>Visit</b>
          Eyebrow Area
          <br />
          Lekki, Lagos State
          <br />
          Nigeria
        </div>
        <div className={styles.col}>
          <b>Talk</b>
          0816 264 9021
          <br />
          <a href="mailto:hr.havilah@gmail.com">hr.havilah@gmail.com</a>
        </div>
        <div className={styles.col}>
          <b>Explore</b>
          <a href="/#properties">Properties</a>
          <br />
          <a href="/#management">Management</a>
          <br />
          <a href="/inspection">Book an Inspection</a>
        </div>
      </div>
      <div className={styles.base}>
        <span>
          &copy; 2026 Havilah Development &amp; Management Services Limited
        </span>
        <span>Nigeria</span>
      </div>
    </footer>
  );
}
