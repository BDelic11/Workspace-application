import Image, { StaticImageData } from "next/image";

//styles
import styles from "./RouteSectionCard.module.scss";
import chevron from "@/../public/icons/Chevron.svg";
import bar from "@/../public/icons/bar.svg";

//components
interface RouteSectionCardProps {
  price: number;
  name: string;
  partyPercentage: number;
  adventurePercentage: number;
  image: StaticImageData;
}

const RouteSectionCard = ({
  price,
  name,
  partyPercentage,
  adventurePercentage,
  image,
}: RouteSectionCardProps) => {
  return (
    <article className={styles.card}>
      <Image src={image} alt={`${name} card`} className={styles.cardImage} />
      <div className={styles.cardLeft}>
        <p>From €{price}/per person</p>
        <div className={styles.cardLeftName}>
          <h2 className={styles.cardName}>{name}</h2>
          <Image src={chevron} alt="chevron" width={40} height={40} />
        </div>
      </div>
      <div className={styles.cardRight}>
        <div className={styles.cardRightParty}>
          <p>Party</p>
          <Image src={bar} alt="bar" className={styles.cardBar} />
        </div>
        <div className={styles.cardRightAdventure}>
          <p>Adventure</p>
          <Image src={bar} alt="bar" className={styles.cardBar} />
        </div>
      </div>

      <div className={styles.cardShadow}></div>
    </article>
  );
};

export default RouteSectionCard;
