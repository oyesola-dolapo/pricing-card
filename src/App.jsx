import PricingCard from "./components/pricingCard/PricingCard";
import PricingCards from "./components/PricingCards/PricingCards";
import UseEffectExamples from "./components/UseEffectExamples/UseEffectExamples";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // const showPricingCard = true;
  const [showPricingCards, setShowPricingCards] = useState(true);
  const [showHeading, setShowHeading] = useState(true);

  const updateShowPricingCards = () => {
    setShowPricingCards(!showPricingCards);
  };
  const updateShowHeading = () => {
    setShowHeading(!showHeading);
  };

  const cards = [
    {
      id: 1,
      label: "Start-Up",
      price: "Free",
      image: "../images/bike.png",
      imageAlt: "Moving bicycle with clouds",
      benefits: ["Unlimited Downloads", "Email Support", "Limited Access"],
    },
    {
      id: 2,
      label: "Pro",
      price: "$49",
      duration: "/Year",
      image: "../images/car.png",
      imageAlt: "Moving car with cloud",
      benefits: [
        "Upto 10 Users",
        "Email support, Call support",
        "1 Year Access",
      ],
    },
    {
      id: 3,
      label: "Enterprise",
      price: "$99",
      duration: "/Year",
      image: "../images/plane.png",
      imageAlt: "Moving Plane with cloud",
      benefits: ["Unlimited Access", "On demand request", "Lifetime Access"],
    },
  ];
  return (
    <main>
      <div className={styles.bg}>
        {showHeading && <h1 className={styles.heading}>Choose Your Plan</h1>}
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque est
          quos deleniti veritatis. Laudantium, totam!
        </p>
      </div>
      <div className={styles["update-buttons"]}>
        <button className={styles["update-button"]} onClick={updateShowHeading}>
          Update Heading
        </button>
        <button
          className={styles["update-button"]}
          onClick={updateShowPricingCards}>
          Update Pricing Crd
        </button>
      </div>

      {showPricingCards && <PricingCards cards={cards} />}
    </main>
  );
}

// function App() {
//   return (
//     <main>
//       <UseEffectExamples />
//     </main>
//   );
// }

export default App;
