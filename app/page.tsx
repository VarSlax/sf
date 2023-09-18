import Image from "next/image";
import SwipedCardsWrapper from "./components/Cards/SwipedCardsWrapper";
import FAQImage from "public/faq-main-photo.webp";
import Header from "./components/Header";
import Title from "./components/Title";
import WhyEmsCard from "./components/Cards/WhyEmsCard";
import SwipedCard from "./components/Cards/SwipedCard";
import EmsType from "./components/Cards/EmsType";
import Faq from "./components/Faq";
// import PhotoGallery from "./components/PhotoGallery";
import PriceCard from "./components/Cards/PriceCard";
import Contacts from "./components/Contacts";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { dataForWhyEmsCards } from "./constants/dataForWhyEmsCards";
import { dataForEmsTypesCards } from "./constants/dataForEmsTypesCards";
import { dataForFaq } from "./constants/dataForFaq";
import { dataForContacts } from "./constants/dataForContacts";
import { dataForPriceCards } from "./constants/dataForPriceCard";
import { dataForSwipedCards } from "./constants/dataForSwipedCards";
import EffectCards from "./components/Cards/EffectCards";
import { isMobile } from "./utils";

export default function Main() {
  const { phone } = isMobile();

  return (
    <div className="h-screen overflow-x-hidden text-lg text-white">
      <Header />
      <video autoPlay loop muted className="h-screen object-cover">
        <source src="/video.webm" />
      </video>
      <div className="container mx-auto">
        <SwipedCardsWrapper cards={dataForSwipedCards} Component={SwipedCard} />
        <SwipedCardsWrapper
          cards={dataForEmsTypesCards}
          Component={EmsType}
          {...(phone && { effect: "cards", modules: [EffectCards] })}
        />
        <div id="ems-section" className="scroll-m-28">
          <Title title="ЕМС ФІТНЕС - ІДЕАЛЬНЕ РІШЕННЯ ЯКЩО:" />
          <div className="flex-wrap lg:flex">
            {dataForWhyEmsCards.map(({ id, title, description, type }) => (
              <WhyEmsCard
                key={id}
                title={title}
                description={description}
                type={type}
              />
            ))}
          </div>
        </div>
        <Image src={FAQImage} className="mt-10 w-full" alt="no photo" />
        <Title title="Часті запитання" />
        {dataForFaq.map(({ id, question, answer, additionalInfo }) => (
          <Faq
            key={id}
            question={question}
            answer={answer}
            additionalInfo={additionalInfo}
          />
        ))}
        {/* <div id="photo-gallery-section" className="scroll-m-28">
          <Title title="Фотогалерея зали" />
          <PhotoGallery />
        </div> */}
        <div id="abonements-section" className="scroll-m-28">
          <Title title="Ціни на абонементи" />
          <div className="mb-4 text-center">
            Ціни можуть відрізнятися від студії
          </div>
          <SwipedCardsWrapper
            cards={dataForPriceCards}
            Component={PriceCard}
            slidesPerView="auto"
            spaceBetween={50}
            centeredSlides={false}
            {...(phone && {
              effect: "cards",
              modules: [EffectCards],
              slidesPerView: 1,
            })}
          />
        </div>
        <div id="contacts-section" className="scroll-m-28">
          <Title title="Контакти" />
          {dataForContacts.map(({ id, type, info }) => (
            <Contacts key={id} info={info} type={type} />
          ))}
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  );
}
