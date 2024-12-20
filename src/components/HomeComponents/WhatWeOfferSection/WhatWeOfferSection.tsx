//styles
import Image from "next/image";
import styles from "./WhatWeOfferSection.module.scss";
import SectionTitle from "@/components/ui/SectionTitle";

//icons
import boat from "@/../public/icons/offer/boat.svg";
import surf from "@/../public/icons/offer/surf.svg";
import cocktail from "@/../public/icons/offer/cocktail.svg";
import OfferTextComponent from "../OfferTextComponent/OfferTextComponent";

const whatWeOfferTitleSection = {
  h2TwoLine: ["Come live your", "best life"],
  descriptionText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.",
};

const offerCards = [
  {
    id: 1,
    title: "A trip like no other",
    image: boat,
  },
  {
    id: 2,
    title: "Active vacation",
    image: surf,
  },
  {
    id: 3,
    title: "Bonding",
    image: cocktail,
  },
];

const offerTexts = [
  {
    id: 1,
    icon: boat,
    title: "A trip like no other",
    description:
      "Spend unforgettable 7 days at sea with your crew at your own pace",
  },
  {
    id: 2,
    icon: surf,
    title: "Active vacation",
    description:
      "Indulge yourself in dozen of parties and activities on your trip",
  },
  {
    id: 3,
    icon: cocktail,
    title: "Bonding",
    description: "Meet people from all over the world, discover new friends.",
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className={styles.offer}>
      <SectionTitle
        h2TwoLine={whatWeOfferTitleSection.h2TwoLine}
        description={whatWeOfferTitleSection.descriptionText}
        textColor="blue"
      />
      <div className={styles.offerCardsContainer}>
        {offerCards.map((offerCard) => (
          <Image
            key={offerCard.id}
            alt={offerCard.title}
            src={offerCard.image}
            className={styles.offerCard}
          />
        ))}
      </div>
      <div className={styles.offerTextContainer}>
        {offerTexts.map((offerText) => (
          <OfferTextComponent
            key={offerText.id}
            title={offerText.title}
            description={offerText.description}
            icon={offerText.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
