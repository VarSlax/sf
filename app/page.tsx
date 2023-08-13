import Header from "./components/Header";
import Card from "./components/Card/Card";
import { dataForCards } from "./components/Card/constants/dataForCards";
import getIconForCard from "./utils/getIconForCard";

export default function Page() {
  return (
    <>
      <Header />
      <div>
        <div className="m-4 text-yellow-500 text-2xl font-semibold uppercase ">
          ЕМС ФІТНЕС - ІДЕАЛЬНЕ РІШЕННЯ ЯКЩО:
        </div>
        {dataForCards.map(({ id, title, explainings, reason }) => (
          <Card
            key={id}
            title={title}
            explainings={explainings}
            reasonIcon={getIconForCard(reason)}
          />
        ))}
      </div>
    </>
  );
}
