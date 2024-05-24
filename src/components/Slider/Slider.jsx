import { slideImagesProf } from "../constants/constCarousel";
import "./Slider.css";

import React, { useState } from "react";


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
    <div className="slider ">
          <h3 className="slider__title title__size">
          Фото  наших работ с объектов
          </h3>
      <div className="slider__container page__size">
      

        <div className="slider__photo">
          <img
            src={slideImagesProf[currentPhotoIndex].image}
            alt={slideImagesProf[currentPhotoIndex].alt}
            className="slider__photo-left slider__photo-size"
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
            className="slider__photo-center slider__photo-size"
          />
             <img
            src={
              slideImagesProf[(currentPhotoIndex + 2) % slideImagesProf.length]
                .image
            }
            alt={
              slideImagesProf[(currentPhotoIndex + 2) % slideImagesProf.length]
                .alt
            }
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
