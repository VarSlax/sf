import training from "public/cardsImages/training.svg";
import health from "public/cardsImages/health.svg";
import healthCare from "public/cardsImages/health-care.svg";
import timer from "public/cardsImages/timer.svg";
import gym from "public/cardsImages/gym.svg";
import talentManagment from "public/cardsImages/talent-management.svg";
import mom from "public/cardsImages/mom.svg";
import scale from "public/cardsImages/scale.svg";

const getIconForCard = (type) => {
  switch (type) {
    case "training":
      return training;
    case "healthCare":
      return healthCare;
    case "timer":
      return timer;
    case "health":
      return health;
    case "gym":
      return gym;
    case "talentManagment":
      return talentManagment;
    case "mom":
      return mom;
    case "scale":
      return scale;
  }
};

export default getIconForCard;
