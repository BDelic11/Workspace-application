//styles
import Image, { StaticImageData } from "next/image";

//styles
import styles from "./ExperienceSectionCard.module.scss";

//components
interface ExperiencesSectionCardProps {
  title: string;
  image: StaticImageData;
}

const ExperiencesSectionCard = ({
  title,
  image,
}: ExperiencesSectionCardProps) => {
  return (
    <article className={styles.card}>
      <Image src={image} alt={`${title} card`} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardShadow}></div>
    </article>
  );
};

export default ExperiencesSectionCard;
