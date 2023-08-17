import ems from "public/cards/ems-swiped-bg.png";
import boxing from "public/cards/box-swiped-bg.png";
import functionalPower from "public/cards/functional-power-swiped-bg.png";
import massage from "public/cards/massage-swiped-bg.png";

const getBgImageForSwipedCard = (type) => {
  switch (type) {
    case "ems":
      return ems;
    case "boxing":
      return boxing;
    case "functionalPower":
      return functionalPower;
    case "massage":
      return massage;
  }
};

export default getBgImageForSwipedCard;
