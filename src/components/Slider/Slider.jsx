import "./Slider.css";

import React, { useState } from "react";
import "./slider.css";
import { slideImagesProf } from "../constants/constslider";

export default function Slider() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex + 1) % slideImagesProf.length
    );
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) =>
        (prevIndex - 1 + slideImagesProf.length) % slideImagesProf.length
    );
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__text">
          <h1 className="slider__title">
            {slideImagesProf[currentPhotoIndex].text}
          </h1>
          <button className="slider__button">БРОНИРОВАТЬ</button>
        </div>
        <div className="slider__photo">
          <img
            src={slideImagesProf[currentPhotoIndex].image}
            alt={slideImagesProf[currentPhotoIndex].alt}
            className="slider__photo-front"
          />
          <img
            src={
              slideImagesProf[(currentPhotoIndex + 1) % slideImagesProf.length]
                .image
            }
            alt={
              slideImagesProf[(currentPhotoIndex + 1) % slideImagesProf.length]
                .alt
            }
            className="slider__photo-back"
          />
        </div>
        <div className="slider__btns">
          <button
            className="slider__btn slider__btn-left"
            onClick={handlePrevPhoto}
          ></button>
          <button
            className="slider__btn slider__btn-right"
            onClick={handleNextPhoto}
          ></button>
        </div>
      </div>
    </div>
  );
}
