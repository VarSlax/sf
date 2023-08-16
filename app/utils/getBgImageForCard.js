import suit from "public/cards/suit.png";
import massage from "public/cards/massage.png";
import training from "public/cards/training.png";

const getBgImageForCard = (type) => {
  switch (type) {
    case "training":
      return training;
    case "suit":
      return suit;
    case "massage":
      return massage;
  }
};

export default getBgImageForCard;
