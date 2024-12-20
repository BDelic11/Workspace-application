import Image from "next/image";

import styles from "./TestimonialsSection.module.scss";

//images
import avatar from "@/../public/images/party.jpg";

import TestimonialsSectionCard from "../TestimonialsSectionCard";

const testimonialsCardsInfo = [
  {
    id: 1,
    avatar: avatar,
    name: "John Doe",
    grade: 5,
    title: "Amazing experience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla. ",
  },
  {
    id: 2,
    avatar: avatar,
    name: "Ana Doe",
    grade: 4,
    title: "Great experience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla. ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsShadow}></div>
      <div className={styles.testimonialsContainer}>
        <h2>Our guests love it</h2>
        <div className={styles.testimonialsCardsContainer}>
          {testimonialsCardsInfo.map((testimonialsCard) => (
            <TestimonialsSectionCard
              key={testimonialsCard.id}
              {...testimonialsCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
