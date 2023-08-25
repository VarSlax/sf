import suit from "public/cards/suit.jpeg";
import massage from "public/cards/massage.jpeg";
import training from "public/cards/training.jpeg";

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
