import Dev from '../Develops/Develops'
import './Footer.css'

export default function Footer(){

    return(
<footer className="footer page__header">
    <div className="footer__container">
        <div className="footer__logo logo"></div>
        <ul className="footer__list">
            <li className="footer__list-item">ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ</li>
            <li className="footer__list-item">ЛИТВИНЧУК ОЛЬГА ИГОРЕВНА</li>
            <li className="footer__list-item">ИНН: 222504600601</li>
        </ul>
        <Dev />
    </div>
</footer>
    )
}