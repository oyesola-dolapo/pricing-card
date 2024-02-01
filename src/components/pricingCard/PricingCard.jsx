import styles from "./PricingCard.module.css";
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";

const PricingCard = ({ card }) => {
  const themeClasses = {
    "Start-Up": styles["card--startup"],
    Pro: styles["card--pro"],
    Enterprise: styles["card--enterprise"],
  };

  const { id, label, price, image, duration, imageAlt, benefits } = card;
  const themeClass = themeClasses[label];

  return (
    <div className={`${styles.card} ${themeClass}`}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div>
          <img src={image} alt={imageAlt} className={styles.card__image} />
        </div>
        <div className={styles.card__priceLabel}>
          <span className={styles.card__priceFigure}>{price}</span>
          <span className={styles.card__priceDuration}>{duration}</span>
        </div>
        <span className={styles.card__benefitsLabel}>
          Everything in free, Plus
        </span>
        <ul className={styles.card__benefits}>
          {benefits.map((benefit) => {
            return (
              <li
                key={benefit}
                className={`${styles.card__benefit} center-horizontal`}>
                <img
                  src="/icons/check.png"
                  className={styles.card__benefitIcon}
                />
                {benefit}
              </li>
            );
          })}
        </ul>
        <Button className={styles.card__button} class>Choose</Button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  card: PropTypes.exact({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    duration: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default PricingCard;
