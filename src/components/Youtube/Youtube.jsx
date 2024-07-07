import { Link } from "react-router-dom";
import "./Youtube.css";

export default function Youtube() {
  return (
    <section className="youtube page__size">
      <div className="youtube__container">
        <h2 className="youtube__title title__size">
          Наш YouTube канал, в котором вы увидите:
        </h2>
        <div className="youtube__block">
          <ul className="youtube__block-text">
            <li className="string"> Технологию работы</li>
            <li className="string"> Процесс установки забора от А до Я</li>
            <li className="string"> Отзывы наших клиентов</li>
            <li className="string">Результат работы, а главное ее качество</li>
            <li className="string"><Link className="youtube__link" to="https://www.youtube.com/@ZABORYDOMA22" target="_blank" rel="noopener noreferrer">Ссылка на YouTube канал, нажми и посмотри </Link></li>
          </ul>
          <iframe
  className="youtube__block-video"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/krAPipcejC8?si=kHHz-OuTAH-qiDeD"
  id="our works"
  title="наши работы на youtube"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  frameBorder="none"
  sandbox="allow-scripts allow-same-origin"
  referrerPolicy="origin"
  allowFullScreen={true}
></iframe>

        </div>
      </div>
    </section>
  );
}
