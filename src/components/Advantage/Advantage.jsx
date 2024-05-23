import { advan } from '../constants/constAdvantage'
import './Advantage.css'

export default function Advantage() {
    return(
        <section className='advantage page__size'>
            <div className="advantage__container">
            <h2 className="advantage__title title__size">Преимущества работы с нами:</h2>
            <div className="advantage__grid">
          {advan.map((adv, index) => (
            <div key={index} className="advantage__grid_item">
                     <img
                className="advantage__imgs"
                alt={adv.text}
                src={adv.image}
              />
              <p className="advantage__text">{adv.text}</p>
         
            </div>
          ))}
        </div>
        </div>
        </section>
    )
}