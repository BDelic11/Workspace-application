import Image from "next/image";
//styles
import styles from "./PaymentSection.module.scss";
import SectionTitle from "@/components/ui/SectionTitle";

//icons
import checklistTrue from "@/../public/icons/payment/checkbarTrue.svg";
import checklistFalse from "@/../public/icons/payment/checkbarFalse.svg";

const paymentTitleSection = {
  title: "PAYMENT",
  h2TwoLine: ["You don’t have to", " break the bank"],
  descriptionText: "See how lorem ipsum dolor sit.",
};

const paymentSectionCardsInfo = [
  {
    id: 1,
    title: "Sailweek experience",
    price: 787,
    checkListIds: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: "Individual experience",
    checkListIds: [0, 1],
  },
];

const checkListItems = [
  {
    id: 0,
    name: "experience",
  },
  {
    id: 1,
    name: "accommodation",
  },
  {
    id: 2,
    name: "food",
  },
  {
    id: 3,
    name: "activities",
  },
  {
    id: 4,
    name: "parties",
  },
  {
    id: 5,
    name: "transportation",
  },
];

const PaymentSection = () => {
  return (
    <section className={styles.payment}>
      <SectionTitle
        title={paymentTitleSection.title}
        h2TwoLine={paymentTitleSection.h2TwoLine}
        description={paymentTitleSection.descriptionText}
        textColor="blue"
      />
      <div className={styles.paymentCardsContainer}>
        {paymentSectionCardsInfo.map((paymentCard) => (
          <div key={paymentCard.id} className={styles.paymentCard}>
            <div className={styles.paymentCardHeader}>
              <h2>{paymentCard.title}</h2>
              {paymentCard.price && (
                <div>
                  <p>from {paymentCard.price}€</p>
                </div>
              )}
            </div>
            <ul className={styles.checkListItemsContainer}>
              {checkListItems.map((checkListItem) => (
                <li
                  key={checkListItem.id}
                  className={styles.checkNameContainer}
                >
                  {paymentCard.checkListIds.includes(checkListItem.id) ? (
                    <Image
                      src={checklistTrue}
                      alt="icon"
                      className={styles.icon}
                    />
                  ) : (
                    <Image
                      src={checklistFalse}
                      alt="icon"
                      className={styles.icon}
                    />
                  )}
                  <p>{checkListItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentSection;
