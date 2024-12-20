import Image from "next/image";
//styles
import styles from "./FlexiblePaymentCard.module.scss";

interface FlexiblePaymentCardProps {
  icon: string;
  percentage: number;
  text: string;
  progressBar: string;
}

const FlexiblePaymentCard = ({
  icon,
  percentage,
  text,
  progressBar,
}: FlexiblePaymentCardProps) => {
  return (
    <article className={styles.flexibleCard}>
      <Image src={icon} alt="dollar icon" className={styles.flexibleCardIcon} />

      <div className={styles.flexibleCardPercentageContainer}>
        <h3 className={styles.flexibleCardPercentage}>{percentage}%</h3>
        <p>{text}</p>
      </div>
      <Image
        src={progressBar}
        alt="progress bar"
        className={styles.flexibleCardProgressBar}
      />
    </article>
  );
};
export default FlexiblePaymentCard;
