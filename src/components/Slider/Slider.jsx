import "./Slider.css";

import React, { useState } from "react";

export default function Slider({slideImages}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + slideImages.length) % slideImages.length
    );
  };

  return (
    <div className="slider ">
      <h3 className="slider__title title__size">Фото наших работ с объектов</h3>
      <div className="slider__container page__size">
        <div className="slider__photo">
          <img
            src={slideImages[currentPhotoIndex].image}
            alt={slideImages[currentPhotoIndex].alt}
            className="slider__photo-left slider__photo-size"
          />
          <img
            src={
              slideImages[(currentPhotoIndex + 1) % slideImages.length].image
            }
            alt={slideImages[(currentPhotoIndex + 1) % slideImages.length].alt}
            className="slider__photo-center slider__photo-size"
          />
          <img
            src={
              slideImages[(currentPhotoIndex + 2) % slideImages.length].image
            }
            alt={slideImages[(currentPhotoIndex + 2) % slideImages.length].alt}
            className="slider__photo-right slider__photo-size"
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
