//styles
import styles from "./HeroSection.module.scss";
// import heroVideo from "../../../../public/videos";

//components

const smallTexts = ["adventure", "relax", "explore", "fun", "dance"];

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideoBackground}
        src="videos/homeVideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className={styles.heroShadow}></div>

      <div className={styles.heroText}>
        <p>Sail your way with</p>
        <h1>CHARTERAG</h1>
        <div className={styles.heroSmallTextContainer}>
          {smallTexts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
