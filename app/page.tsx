import Image from 'next/image';
import SwipedCardsWrapper from './components/Cards/SwipedCardsWrapper';
import FAQImage from 'public/faq-main-photo.png';
import Header from './components/Header';
import Title from './components/Title';
import WhyEmsCard from './components/Cards/WhyEmsCard';
import SwipedCard from './components/Cards/SwipedCard';
import EmsType from './components/Cards/EmsType';
import Faq from './components/Faq';
import PhotoGallery from './components/PhotoGallery';
import PriceCard from './components/Cards/PriceCard';
import Contacts from './components/Contacts';
import Map from './components/Map';
import Footer from './components/Footer';
import { dataForWhyEmsCards } from './constants/dataForWhyEmsCards';
import { dataForEmsTypesCards } from './constants/dataForEmsTypesCards';
import { dataForFaq } from './constants/dataForFaq';
import { dataForContacts } from './constants/dataForContacts';
import { dataForPriceCards } from './constants/dataForPriceCard';
import { dataForSwipedCards } from './constants/dataForSwipedCards';

export default function Main() {
  return (
    <div className="text-white text-lg">
      <Header />
      <SwipedCardsWrapper
        cards={dataForSwipedCards}
        pagination
        Component={SwipedCard}
      />
      <SwipedCardsWrapper
        cards={dataForEmsTypesCards}
        pagination
        Component={EmsType}
      />
      <div id="ems-section">
        <Title title="ЕМС ФІТНЕС - ІДЕАЛЬНЕ РІШЕННЯ ЯКЩО:" />
        <div>
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
      <Image src={FAQImage} className="w-full mt-10" alt="no photo" />
      <Title title="Часті запитання" />
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
        <Title title="Фотогалерея зали" />
        <PhotoGallery />
      </div>
      <div id="abonements-section">
        <Title title="Ціни на абонементи" />
        <div className="text-center mb-4">
          ціни можуть відрізнятися від студії
        </div>
        <div className="flex space-x-6 overflow-x-auto mt-2.5 mx-5 text-base">
          {dataForPriceCards.map(({ id, description, type }) => (
            <PriceCard key={id} id={id} info={description} type={type} />
          ))}
        </div>
      </div>
      <div id="contacts-section">
        <Title title="Контакти" />
        {dataForContacts.map(({ id, type, info }) => (
          <Contacts key={id} info={info} type={type} />
        ))}
      </div>
      <Map />
      <Footer />
    </div>
  );
}
