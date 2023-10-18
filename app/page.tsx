import SwipedCardsWrapper from "./components/Cards/SwipedCardsWrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import WhyEmsCard from "./components/Cards/WhyEmsCard";
import SwipedCard from "./components/Cards/SwipedCard";
import EmsType from "./components/Cards/EmsType";
import Faq from "./components/Faq";
// import PhotoGallery from "./components/PhotoGallery";
import PriceCard from "./components/Cards/PriceCard";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { dataForWhyEmsCards } from "./constants/dataForWhyEmsCards";
import { dataForEmsTypesCards } from "./constants/dataForEmsTypesCards";
import { dataForFaq } from "./constants/dataForFaq";
import { dataForContacts } from "./constants/dataForContacts";
import { dataForPriceCards } from "./constants/dataForPriceCard";
import { dataForSwipedCards } from "./constants/dataForSwipedCards";
import EffectCards from "./components/Cards/EffectCards";
import { isMobile } from "./utils";
import Video from "./components/Video";

export default function Main() {
  const { phone } = isMobile();

  return (
    <div className="h-screen overflow-x-hidden text-lg text-white">
      <Header />
      <Video />
      <div className="container mx-auto">
        <Title title="ПОСЛУГИ" className="-mb-20 max-lg:hidden" />
        <SwipedCardsWrapper
          id="cards"
          className="scroll-m-28"
          paginationType="fraction"
          navigation
          navigationMargin
          cards={dataForSwipedCards}
          delay={7000}
          Component={SwipedCard}
        />
        <Title title="ЩО ТАКЕ ЕМС?" className="-mb-20 max-lg:hidden" />
        <SwipedCardsWrapper
          cards={dataForEmsTypesCards}
          Component={EmsType}
          paginationType="fraction"
          navigation
          delay={7000}
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
          <SwipedCardsWrapper
            cards={dataForPriceCards}
            delay={1000000}
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
        <div
          id="contacts-section"
          className="scroll-m-28 flex-row-reverse lg:flex"
        >
          <div>
            <Title title="Контакти" />
            {dataForContacts.map(({ id, type, info }) => (
              <Contacts key={id} info={info} type={type} />
            ))}
          </div>
          <div className="my-4 basis-1/2 overflow-hidden lg:m-5 lg:rounded-3xl">
            <iframe
              title={dataForContacts[2].info as string}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.3729277206565!2d30.52001536427181!3d50.49848861900067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1f847c8f831%3A0xea7d1daeb3deca2a!2z0YPQuy4g0J7QsdC-0LvQvtC90YHQutCw0Y8g0L3QsNCxLiwgMTUsINC60L7RgNC_0YPRgSAzLCDQmtC40LXQsiwgMDQyMTA!5e0!3m2!1sru!2sua!4v1695128280794!5m2!1sru!2sua"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
