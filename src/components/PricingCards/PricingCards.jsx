import styles from "./PricingCards.module.css";
import PropTypes from "prop-types";
import PricingCard from "../pricingCard/PricingCard.jsx";
import { useState, useEffect, useRef } from "react";
import {randomizeArr} from '../../helpers/array.js'

const PricingCards = ({ cards }) => {
  const [randomCards, setRandomCards] = useState(randomizeArr(cards));

  const randomizeCards = () => {
    setRandomCards(randomizeArr(randomCards));
  };

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log("i am updated");
    }
  }, [randomCards]);

  useEffect(() => {
    console.log("i am born");
    isMounted.current = true;

    const intervalId = setInterval(() => {
      console.log("i Am interval");
    }, 1000);

    return () => {
      console.log("cleaning Up");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`${styles.prices} container`}>
      <button onClick={randomizeCards} className={styles["randomize-btn"]}>
        ⚙
      </button>
      {randomCards.map((card) => {
        return <PricingCard key={card.label} card={card} />;
      })}
    </div>
  );
};

// class PricingCards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       randomCards: randomizeArr(this.props.cards),
//     };
//   }

//   intervalId = null;

//   randomizeCards = () => {
//     this.setState({
//       randomCards: randomizeArr(this.state.randomCards),
//     });
//   };

//   componentDidMount() {
//     const myButton = document.getElementById("my-button");
//     // console.log(myButton)
//     console.log("i am born");
//     // this.intervalId = setInterval(() => {
//     //   console.log('hello hi hello')
//     // }, 1000)
//     console.log(this);
//     this.setState({});
//   }

//   shouldComponentUpdate = () => {
//     // check state
//     return true;
//   };

//   componentDidUpdate = () => {
//     console.log("hey i updated");
//   };

//   componentWillUnmount = () => {
//     console.log("i am leaving");
//     clearInterval(this.intervalId);
//   };

//   render() {
//     const { randomCards } = this.state;

//     return (
//       <div className={`${styles.prices} container`}>
//         <button
//           id="my-button"
//           onClick={this.randomizeCards}
//           className={styles["randomize-btn"]}>
//           ⚙
//         </button>
//         {randomCards.map((card) => {
//           return <PricingCard key={card.label} card={card} />;
//         })}
//       </div>
//     );
//   }
// }

PricingCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      duration: PropTypes.string,
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
};

export default PricingCards;
