import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { slideImages } from "../constants/constCarousel";

export default function Carousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);


    // Функция для автоматического переключения слайдов каждые 5 секунд
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
      }, 5000);
  
      return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект должен запуститься только один раз

  return (
    <div className="carousel">
      <div className="carousel__container">   
          <h1 className="carousel__title">{slideImages[currentPhotoIndex].text}</h1>
          <img
            src={slideImages[currentPhotoIndex].image}
            alt={slideImages[currentPhotoIndex].alt}
            className="carousel__photo"
          />
        <div className="carousel__indicators">
          {slideImages.map((photo, index) => (
            <div
              key={index}
              className={
                currentPhotoIndex === index ? "carousel__indicator-active" : "carousel__indicator"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
