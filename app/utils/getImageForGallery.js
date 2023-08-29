import ems from "public/cards/ems-swiped-bg.png";
import box from "public/cards/box-swiped-bg.png";
import functionalPower from "public/cards/functional-power-swiped-bg.png";

const getImageForGallery = (type) => {
  switch (type) {
    case "ems":
      return ems;
    case "box":
      return box;
    case "functionalPower":
      return functionalPower;
  }
};

export default getImageForGallery;
