import one from "public/prices/trial-training.svg";
import oneStar from "public/prices/one-star.svg";
import twoStars from "public/prices/two-stars.svg";
import threeStars from "public/prices/three-stars.svg";
import fourStars from "public/prices/four-stars.svg";
import fiveStars from "public/prices/five-stars.svg";

const getIconForPriceCards = (type) => {
  switch (type) {
    case "trial":
      return one;
    case "oneStar":
      return oneStar;
    case "twoStars":
      return twoStars;
    case "threeStars":
      return threeStars;
    case "fourStars":
      return fourStars;
    case "fiveStars":
      return fiveStars;
  }
};

export default getIconForPriceCards;
