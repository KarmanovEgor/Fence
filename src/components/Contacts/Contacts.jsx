
import "./Contacts.css";
import { Link } from "react-router-dom";
import buildImg from '../../img/build.jpeg'

export default function Contacts() {
  const phoneNumber = "+79130278176";
  const email = " olga_biznessibiri@mail.ru";

  return (
    <section className="contacts page__size">
      <h2 className="contacts__title title__size">Наши контакты</h2>
      <div className="contacts__container">
        <div className="contacts__list">
          <img className="contacts__img" title="строим заборы" alt="строим заборы" src={buildImg}></img>
          <Link to={`tel:${phoneNumber}`} className="contacts__links">
            {phoneNumber}
          </Link>
          <Link to={`https://t.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта Zabor u doma`} className="contacts__links">
            Telegram
          </Link>
          <Link
            to={`https://wa.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта Zabor u doma`}
            className="contacts__links"
          >
            WhatsApp
          </Link>
          <Link to={`mailto:${email}?text=Здравствуйте,пишу с вашего сайта Zabor u doma`} className="contacts__links">
            {email}
          </Link>
        </div>

        {/* <WidgetComponent /> */}
        <div className="contacts__map">
          <iframe
            title="Местоположение компании Забор у дома"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A91b0b6066878a619b92ec2b3bc9bb1d2670b47f9be599daa77aeb9ee8b889b9e&amp;source=constructor"
            width="600"
            height="400"
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="origin"
            allowFullScreen={true}
          ></iframe>
          
        </div>
      </div>
    </section>
  );
}
