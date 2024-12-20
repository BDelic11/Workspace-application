import Image, { StaticImageData } from "next/image";

//styles
import styles from "./TestimonialsSectionCard.module.scss";

//icons
import starIconTestimonials from "@/../public/icons/starTestimonial.svg";

//components
interface TestimonialsSectionCardProps {
  id: number;
  name: string;
  avatar: StaticImageData;
  grade: number;
  title: string;
  description: string;
}

const TestimonialsSectionCard = ({
  name,
  avatar,
  grade,
  title,
  description,
}: TestimonialsSectionCardProps) => {
  const stars = Array.from({ length: grade }, (_, index) => index);
  return (
    <article className={styles.card}>
      <Image
        src={avatar}
        width={20}
        height={20}
        alt={`${name} review`}
        className={styles.cardImage}
      />
      <div className={styles.stars}>
        {stars.map((star) => (
          <Image
            key={star}
            src={starIconTestimonials}
            alt="Star"
            width={20}
            height={20}
            className={styles.starIcon}
          />
        ))}
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p>{description}</p>
      <div className={styles.cardShadow}></div>
    </article>
  );
};

export default TestimonialsSectionCard;
