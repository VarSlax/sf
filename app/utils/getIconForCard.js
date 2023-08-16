import training from "public/cards/training.svg";
import health from "public/cards/health.svg";
import healthCare from "public/cards/health-care.svg";
import timer from "public/cards/timer.svg";
import gym from "public/cards/gym.svg";
import talentManagment from "public/cards/talent-management.svg";
import mom from "public/cards/mom.svg";
import scale from "public/cards/scale.svg";

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
