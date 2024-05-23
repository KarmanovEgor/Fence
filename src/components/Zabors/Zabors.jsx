import { zaborImages } from "../constants/constZabors";
import "./Zabors.css";
import { useNavigate } from 'react-router-dom';

export default function Zabors() {

  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <section className="zabors page__size">
      <div className="zabors__container">
   
        <div className="zabors__grid">
          {zaborImages.map((zabor, index) => (
           
            <div key={index} className="zabors__grid_item">

              <h3 className="zabors__title"  onClick={()=>handleClick(zabor.way)}>{zabor.text}</h3>
              <div
                className={`zabors__imgs zabors__img${index + 1}`}
                alt={zabor.alt}
                onClick={()=>handleClick(zabor.way)}
              />
             
            </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
