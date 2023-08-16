import time from "public/time-icon.svg";
import phone from "public/phone-icon.svg";
import map from "public/map-icon.svg";

const getIconForContacts = (type) => {
  switch (type) {
    case "time":
      return time;
    case "phone":
      return phone;
    case "map":
      return map;
  }
};

export default getIconForContacts;
