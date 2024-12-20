//styles
import Image from "next/image";
import styles from "./ExperienceSection.module.scss";

//icons
import star from "@/../public/icons/star.svg";
import facebook from "@/../public/icons/facebook.svg";
import google from "@/../public/icons/google.svg";
import SectionTitle from "@/components/ui/SectionTitle";
//images
import sail from "@/../public/images/sail.jpg";
import party from "@/../public/images/party.jpg";
import explore from "@/../public/images/explore.jpg";
import relax from "@/../public/images/relax.jpg";
//components
import ExperienceSectionCard from "../ExperienceSectionCard";

const iconexperienceInfo = [
  {
    id: 1,
    icon: star,
    experienceGrade: 4.8,
    basedOn: 325,
  },
  {
    id: 2,
    icon: facebook,
    experienceGrade: 4.8,
    basedOn: 325,
  },
  {
    id: 3,
    icon: google,
    experienceGrade: 4.8,
    basedOn: 325,
  },
];

const experienceTitleSection = {
  title: "WELCOME",
  h2: "What is Charterag experience",
  descriptionText:
    "Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories.",
};

const experienceSectionCardsData = [
  {
    id: 1,
    title: "Sail",
    image: sail,
  },
  {
    id: 2,
    title: "Party",
    image: party,
  },
  {
    id: 3,
    title: "Explore",
    image: explore,
  },
  {
    id: 4,
    title: "Relax",
    image: relax,
  },
];

const ExperiencesSection = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.iconExperienceContainer}>
        {iconexperienceInfo.map((iconExperience) => (
          <div key={iconExperience.id} className={styles.iconExperience}>
            <Image
              src={iconExperience.icon}
              alt="experienceIcon"
              className={styles.icon}
            />
            <div>
              <p className={styles.experienceGrade}>
                {iconExperience.experienceGrade}/5
              </p>
              <p>Based on {iconExperience.basedOn} experiences.</p>
            </div>
          </div>
        ))}
      </div>
      <SectionTitle
        title={experienceTitleSection.title}
        h2={experienceTitleSection.h2}
        description={experienceTitleSection.descriptionText}
      />
      <div className={styles.cardsContainer}>
        {experienceSectionCardsData.map((experienceSectionCard) => (
          <ExperienceSectionCard
            key={experienceSectionCard.id}
            title={experienceSectionCard.title}
            image={experienceSectionCard.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
