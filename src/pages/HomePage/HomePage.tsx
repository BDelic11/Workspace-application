import React from "react";

//styles
import styles from "./HomePage.module.scss";

//components
import HeroSection from "@/components/HomeComponents/HeroSection";
import ExperienceSection from "@/components/HomeComponents/ExperienceSection/ExperienceSection";
import RoutesSection from "@/components/HomeComponents/RoutesSection";
import TestimonialsSection from "@/components/HomeComponents/TestimonialsSection";
import WhatWeOfferSection from "@/components/HomeComponents/WhatWeOfferSection";
import FlexiblePaymentSection from "@/components/HomeComponents/FlexiblePaymentSection";
import PaymentSection from "@/components/HomeComponents/PaymentSection";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ExperienceSection />
      <RoutesSection />
      <TestimonialsSection />
      <WhatWeOfferSection />
      <PaymentSection />
      <FlexiblePaymentSection />
    </main>
  );
}
