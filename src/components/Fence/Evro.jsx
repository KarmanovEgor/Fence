import FenceDetails from "../FanceDetails/FanceDetails";
import KalitkaDetails from "../FanceDetails/KalitkaDetails";
import VorotaDetails from "../FanceDetails/VorotaDetails";

import Slider from "../Slider/Slider";
import { evro } from "../constants/constZabors";
import "./Fence.css";

export default function Evro({ openPopup }) {
  const {
    alt,
    image,
    subtitle,
    text,
    title,
    titlePlus,
    montageTitle,
    montageText,
    montageImg,
    altShema,
    fenceData,
    kalitkaData,
    vorotaData,
    advan,
    slideImages,
    lentoch,
  } = evro;

  return (
    <section className="evro page__size">
      <h2 className="fence__title title__size">{title}</h2>
      <div className="fence__container">
        <div className="fence__block-describe">
          <img src={image} alt={alt} className="fence__img" />
          <div className="fence__block-text">
            <h4 className="fence__subtitle">{subtitle}</h4>
            <p className="fence__text">{text}</p>
          </div>
        </div>
        <div className="fence__plus">
          <h3 className="fence__plus-title title__size">{titlePlus}</h3>
          <ul className="fence__advantage">
            {advan.map((adv, index) => (
              <li key={index} className="fence__grid_item">
                <img className="fence__imgs" alt={adv.text} src={adv.image} />
                <p className="fence__text">{adv.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="fence__montage">
          <h3 className="fence__montage-title title__size">{montageTitle}</h3>
          <div className="fence__montage-block">
            <p className="fence__montage-text">{montageText}</p>
            <img
              src={montageImg}
              alt={altShema}
              title={altShema}
              className="fence__montage-img"
            />
          </div>
        </div>
        <FenceDetails fenceData={fenceData} openPopup={openPopup} />
        <div className="fence__plus">
          <h3 className="fence__plus-title title__size">{lentoch.title}</h3>
          <ul className="fence__advantage fence__advantage-lent">
            {lentoch.cards.map((adv, index) => (
              <li
                key={index}
                className="fence__grid_item fence__grid_item-lent"
              >
                <div className="fence__grid_item-blcok">
                  <img className="fence__imgs" alt={adv.title} src={adv.img} />
                  <h4 className="fence__text-title">{adv.title}</h4>
                </div>

                <p className="fence__text">{adv.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <KalitkaDetails kalitkaData={kalitkaData} />
        <VorotaDetails vorotaData={vorotaData} />
        <Slider slideImages={slideImages} />
      </div>
    </section>
  );
}
