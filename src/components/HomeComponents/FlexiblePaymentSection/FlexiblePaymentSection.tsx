//styles
import styles from "./FlexiblePaymentSection.module.scss";

//icons
import dollarOne from "@/../public/icons/flexible/dollarOne.svg";
import dollarTwo from "@/../public/icons/flexible/dollarTwo.svg";
import dollarThree from "@/../public/icons/flexible/dollarThree.svg";
import texture from "@/../public/icons/texture.svg";
//bars
import barOne from "@/../public/icons/flexible/progressOne.svg";
import barTwo from "@/../public/icons/flexible/progressTwo.svg";
import barThree from "@/../public/icons/flexible/progressThree.svg";
import FlexiblePaymentCard from "../FlexiblePaymentCard/FlexiblePaymentCard";
import Image from "next/image";

const flexiblePaymentCardsInfo = [
  {
    id: 1,
    icon: dollarOne,
    percentage: 10,
    text: "pay when booking",
    progressBar: barOne,
  },
  {
    id: 2,
    icon: dollarTwo,
    percentage: 20,
    text: "pay 30 days after booking",
    progressBar: barTwo,
  },
  {
    id: 3,
    icon: dollarThree,
    percentage: 30,
    text: "pay 60 days before trip",
    progressBar: barThree,
  },
];

const FlexiblePaymentSection = () => {
  return (
    <section className={styles.flexible}>
      <h2>Flexible payment</h2>
      <div className={styles.flexibleCardsContainer}>
        {flexiblePaymentCardsInfo.map((flexiblePaymentCard) => (
          <FlexiblePaymentCard
            key={flexiblePaymentCard.id}
            icon={flexiblePaymentCard.icon}
            percentage={flexiblePaymentCard.percentage}
            text={flexiblePaymentCard.text}
            progressBar={flexiblePaymentCard.progressBar}
          />
        ))}
      </div>
      <p className={styles.flexibleBottomText}>
        NOTE: Only applies to bookings made a minimum of 95 days before the
        trip. For bookings made within 95 days before the trip, see our{" "}
        <span className={styles.flexibleBottomTextTerms}>
          Terms and conditions.
        </span>
      </p>
      <Image
        src={texture}
        alt="dollar icon"
        className={styles.flexibleTexture}
      />
    </section>
  );
};

export default FlexiblePaymentSection;
