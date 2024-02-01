import PricingCard from "./components/pricingCard/PricingCard";
import styles from "./App.module.css";

function App() {
  
  const PriceCard = [
    {
      id: 1,
      label: "Start-Up",
      price: "Free",
      image: "../public/images/bike.png",
      imageAlt: "Moving bicycle with clouds",
      benefits: ["Unlimited Downloads", "Email Support", "Limited Access"],
    },
    {
      id: 2,
      label: "Pro",
      price: "$49",
      duration: "/Year",
      image: "../public/images/car.png",
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
      image: "../public/images/plane.png",
      imageAlt: "Moving Plane with cloud",
      benefits: ["Unlimited Access", "On demand request", "Lifetime Access"],
    },
  ];
  return (
    <main>
      <div className={styles.bg}>
        <div className={styles.info}>
          <h1 className={styles.heading}>Choose Your Plan</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque est
            quos deleniti veritatis. Laudantium, totam!
          </p>
        </div>
      </div>
      <div className={`${styles.prices} container`}>
        {PriceCard.map((card) => {
          return <PricingCard key={card.id} card={card} />;
        })}
      </div>
    </main>
  );
}

export default App;
