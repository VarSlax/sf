import Image from "next/image";
import SwipedCardsWrapper from "./components/Cards/SwipedCardsWrapper";
import FAQImage from "public/faq-main-photo.png";
import Header from "./components/Header";
import Title from "./components/Title";
import WhyEmsCard from "./components/Cards/WhyEmsCard";
import EmsType from "./components/Cards/EmsType";
import Faq from "./components/Faq";
import PhotoGallery from "./components/PhotoGallery";
import PriceCard from "./components/Cards/PriceCard";
import Contacts from "./components/Contacts";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { dataForWhyEmsCards } from "./components/Cards/constants/dataForWhyEmsCards";
import { dataForEmsTypesCards } from "./components/Cards/constants/dataForEmsTypesCards";
import { dataForFaq } from "./components/Cards/constants/dataForFaq";
import { dataForContacts } from "./components/Cards/constants/dataForContacts";
import { dataForPriceCards } from "./components/Cards/constants/dataForPriceCard";
import getIconForCard from "./utils/getIconForCard";
import getBgImageForCard from "./utils/getBgImageForCard";
import getIconForContacts from "./utils/getIconForContacts";
import getIconForPriceCards from "./utils/getIconForPriceCards";

const Page = () => {
  return (
    <div className="text-white text-lg">
      <Header />
      <SwipedCardsWrapper />
      <div className="flex overflow-x-auto">
        {dataForEmsTypesCards.map(
          ({ id, title, explainings, type, additionalExplainings }) => (
            <EmsType
              key={id}
              title={title}
              explainings={explainings}
              bgImage={getBgImageForCard(type)}
              additionalExplainings={additionalExplainings}
            />
          )
        )}
      </div>
      <div id="ems-section">
        <Title position="" title="ЕМС ФІТНЕС - ІДЕАЛЬНЕ РІШЕННЯ ЯКЩО:" />
        <div>
          {dataForWhyEmsCards.map(({ id, title, explainings, reason }) => (
            <WhyEmsCard
              key={id}
              title={title}
              explainings={explainings}
              reasonIcon={getIconForCard(reason)}
            />
          ))}
        </div>
      </div>
      <Image src={FAQImage} className="w-full mt-10" alt="no photo" />
      <Title position="" title="Часті запитання" />
      <div className="my-3 mx-4">
        Ми зібрали та підготували відповіді на найпоширеніші запитання про наші
        тренування!
        <div className="my-3 border-b-2 border-black"></div>
      </div>
      {dataForFaq.map(({ id, question, answer, additionalInfo }) => (
        <Faq
          key={id}
          question={question}
          answer={answer}
          additionalInfo={additionalInfo}
        />
      ))}
      <div id="photo-gallery-section">
        <Title position="middle" title="Фотогалерея зали" />
        <PhotoGallery />
      </div>
      <div id="abonements-section">
        <Title position="center" title="Ціни на абонементи" />
        <div className="text-center mb-4">
          ціни можуть відрізнятися від студії
        </div>
        <div className="flex space-x-6 overflow-x-auto mt-2.5 mx-5 text-base">
          {dataForPriceCards.map(({ id, description, type }) => (
            <PriceCard
              key={id}
              id={id}
              info={description}
              iconType={getIconForPriceCards(type)}
            />
          ))}
        </div>
      </div>
      <div id="contacts-section">
        <Title position="center" title="Контакти" />
        {dataForContacts.map(({ id, type, info }) => (
          <Contacts key={id} info={info} icon={getIconForContacts(type)} />
        ))}
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Page;
