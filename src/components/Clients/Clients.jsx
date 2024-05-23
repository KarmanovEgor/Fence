import { clients } from '../constants/constAdvantage'
import './Clients.css'

export default function Clients() {
    return(
        <section className="clients page__size">
            <div className="clients__container">
                <h2 className="clients__title title__size">Кто наши клиенты:</h2>
                <div className="clients__grid">
          {clients.map((cli, index) => (
            <div key={index} className="clients__grid_item">
            <h3 className="clients__header">{cli.title}</h3>
              <p className="clients__text">{cli.parag}</p>
         
            </div>
          ))}
        </div>
            </div>
        </section>
    )
}