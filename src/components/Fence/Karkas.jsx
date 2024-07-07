import FenceDetails from "../FanceDetails/FanceDetails";

import Slider from "../Slider/Slider";
import { karkas } from "../constants/constZabors";

import "./Fence.css";

export default function Base({ openPopup }) {
  // console.log(woud)
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
    advan,
    slideImages,
  } = karkas;

  return (
    <section className="wood page__size">
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
            {/* <img
              src={montageImg}
              alt={altShema}
              title={altShema}
              className="fence__montage-img"
            /> */}
          </div>
        </div>
        <FenceDetails fenceData={fenceData} openPopup={openPopup} />
        <Slider slideImages={slideImages} />
      </div>
    </section>
  );
}
