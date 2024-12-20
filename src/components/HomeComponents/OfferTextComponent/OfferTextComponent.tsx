import Image, { StaticImageData } from "next/image";

//styles
import styles from "./OfferTextComponent.module.scss";

//components
interface OfferTextComponentProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const OfferTextComponent = ({
  icon,
  title,
  description,
}: OfferTextComponentProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={icon} alt={`${title} icon`} className={styles.image} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
};

export default OfferTextComponent;
