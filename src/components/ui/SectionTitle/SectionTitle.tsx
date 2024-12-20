import React from "react";
import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  h2: string;
  description: string;
  textColor?: "blue" | "white";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  h2,
  description,
  textColor = "white",
  className,
}) => {
  return (
    <div
      className={clsx(styles.welcomeTextContainer, className, {
        [styles.textBlue]: textColor === "blue",
        [styles.textWhite]: textColor === "white",
      })}
    >
      <div className={styles.welcome}>
        <p>{title}</p>
      </div>
      <h2>{h2}</h2>
      <p className={styles.welcomeDescription}>{description}</p>
    </div>
  );
};

export default SectionTitle;
