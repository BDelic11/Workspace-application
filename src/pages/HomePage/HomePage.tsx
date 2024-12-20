import React from "react";

//styles
import styles from "./HomePage.module.scss";

//components
import HeroSection from "@/components/HomeComponents/HeroSection";

import ExperienceSection from "@/components/HomeComponents/ExperienceSection/ExperienceSection";
import RoutesSection from "@/components/HomeComponents/RoutesSection";
import TestimonialsSection from "@/components/HomeComponents/TestimonialsSection";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ExperienceSection />
      <RoutesSection />
      <TestimonialsSection />
    </main>
  );
}
