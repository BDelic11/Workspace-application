//styles
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./RoutesSection.module.scss";

//images
import partyRoute from "@/../public/images/routes/partyRoute.png";
import ultraRoute from "@/../public/images/routes/ultraRoute.png";
import greeceRoute from "@/../public/images/routes/greeceRoute.png";
import adventureRoute from "@/../public/images/routes/adventureRoute.png";

//components
import RouteSectionCard from "../RouteSectionCard/RouteSectionCard";

const routesTitleSection = {
  title: "DESTINATIONS",
  h2: "Whether it's a bash or bliss — the choice is yours",
  descriptionText:
    "On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier",
};

const routesCardsInfo = [
  {
    id: 1,
    price: 710,
    name: "Party Route",
    partyPercentage: 70,
    adventurePercentage: 35,
    image: partyRoute,
  },
  {
    id: 2,
    price: 792,
    name: "Ultra Route",
    partyPercentage: 90,
    adventurePercentage: 40,
    image: ultraRoute,
  },
  {
    id: 3,
    price: 710,
    name: "Greece Route",
    partyPercentage: 60,
    adventurePercentage: 50,
    image: greeceRoute,
  },
  {
    id: 4,
    price: 792,
    name: "Adventure Route",
    partyPercentage: 45,
    adventurePercentage: 90,
    image: adventureRoute,
  },
];

const RoutesSection = () => {
  return (
    <section className={styles.experienceSection}>
      <SectionTitle
        title={routesTitleSection.title}
        description={routesTitleSection.descriptionText}
        h2={routesTitleSection.h2}
        textColor="blue"
      />
      <div className={styles.cardsContainer}>
        {routesCardsInfo.map((route) => (
          <RouteSectionCard key={route.id} {...route} />
        ))}
      </div>
    </section>
  );
};

export default RoutesSection;
